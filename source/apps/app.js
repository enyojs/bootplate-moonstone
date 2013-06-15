enyo.kind({
	name: "sample.Application",
	kind: "enyo.Application",
	view: "sample.MainView",
	controllers: [
		{name: "router", kind: "sample.Router", global: true},
		{name: "artists", kind: "sample.ArtistCollection"}
	],
	bindings: [
		{from: "enyo.store.busy", to: ".busy"}
	],
	handlers: {
		onError: "sourceDidError"
	},
	
	// dialog properties
	dialogTitle: "",
	dialogMessage: "",
	dialogShowing: false,

	busy: false,
	busyChanged: function () {
		if (this.busy) {
			this.set("dialogTitle", "Working");
			this.set("dialogMessage", "Talking to last.fm ...");
			this.set("dialogShowing", true);
		} else {
			this.set("dialogShowing", false);
		}
	},
	sourceDidError: function (sender, event) {
		this.set("dialogTitle", "Oops!");
		this.set("dialogMessage", event.message);
		this.set("dialogShowing", true);
		setTimeout(enyo.bind(this, function () {
			this.set("dialogShowing", false);
		}), 1500);
		setTimeout(enyo.bind(this, function () {
			router.back();
		}), 2500);
	},
	
	start: function () {
		this.inherited(arguments);
		enyo.store.addDispatchTarget(this);
		// TODO: Routers can automatically trigger their location (and do
		// by default) but can't now because they will trigger before the
		// view is available in most cases, should they be registered such that
		// when an application starts it then goes and wakes the router(s) it
		// contains
		if (!router.get("location")) {
			router.set("location", "search");
		} else if (router.get("location") !== "search") {
			router.addHistory("search", true);
		}
		router.trigger();
	},
	handlePanelAction: function (ctor, model) {
		var $panels = this.view.$.panels;
		var idx, pn = model.get("panelName"), $panel;
		if (($panel = $panels.$[pn])) {
			$panel.set("model", model);
			idx = $panel.indexInContainer();
			if (idx > $panels.getIndex()) {
				$panels.setIndex(idx);
			} else if (idx < $panels.getIndex()) {
				$panels.popPanels(idx+1);
			}
		} else {
			if (!$panels.getPanels().length) {
				this.handleSearch();
			}
			$panels.pushPanel({kind: ctor}, {model: model, name: pn});
		}
	},
	handleSearch: function () {
		var $panels = this.view.$.panels;
		var $ch = $panels.getPanels();
		if ($ch.length) {
			$panels.popPanels(1);
		} else {
			$panels.pushPanel({kind: sample.SearchPanel});
		}
	},
	handleAlbum: function (id) {
		enyo.store.findOne(sample.AlbumModel, {
			success: this.bindSafely("handlePanelAction", sample.AlbumPanel),
			params: {id: id}
		});
	},
	handleArtist: function (id) {
		enyo.store.findOne(sample.ArtistModel, {
			success: this.bindSafely("handlePanelAction", sample.ArtistPanel),
			params: {id: id}
		})
	}
});
