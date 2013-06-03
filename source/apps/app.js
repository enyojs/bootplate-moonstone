(function (enyo) {
	
	var kindNameFromPath = function (path) {
		return "sample." + enyo.cap(path) + "Panel";
	};
	
	var kindFromPath = function (path) {
		return enyo.getPath(kindNameFromPath(path));
	};

	enyo.kind({
		name: "sample.Application",
		kind: "enyo.Application",
		view: "sample.MainView",
		controllers: [
			{name: "router", kind: "sample.Router", global: true},
			{name: "artists", kind: "sample.ArtistCollection"}
		],
		start: function () {
			this.inherited(arguments);
			router.trigger({location: "artists", change: true});
			this.controllers.artists.fetch();
		},
		changePanel: function (root, id, model) {
			var $panels = this.view.$.panels;
			var $ch = $panels.getPanels();
			var kindName = kindNameFromPath(root);
			var $kind = enyo.getPath(kindName);
			var idx, $panel;
			idx = enyo.find($ch, function (panel) {
				return panel.kindName === kindName;
			});
			idx = parseInt(idx);
			if (idx === 0) {
				if ($ch.length) {
					$panels.popPanels(1);
				}
			} else if (!isNaN(idx) && model) {
				$panel = $ch[idx];
				$panel.set("model", model);
				if (idx !== $panels.getIndex()) {
					$panels.popPanels(idx + 1);
				}
			} else if ($kind) {
				$panels.pushPanel({kind: $kind}, {model: model});
			}
		},
		changeWithData: function (root, id) {
			var kindName = "sample." + enyo.cap(root) + "Model";
			var $kind = enyo.getPath(kindName);
			if ($kind) {
				enyo.store.findOne($kind, {
					success: this.bindSafely(function (root, id, record) {
						this.changePanel(root, id, record);
					}, root, id),
					error: this.bindSafely(function (root, id, kind) {
						enyo.warn("could not find record with id ", id);
						this.changePanel(root, id, new kind());
					}, root, id, $kind),
					id: id
				});
			}
		}
	});
	
})(enyo);
