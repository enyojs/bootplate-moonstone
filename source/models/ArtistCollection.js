enyo.kind({
	name: "sample.ArtistCollection",
	kind: "enyo.Collection",
	model: "sample.ArtistSearchModel",
	url: "/database/search",
	dataKey: "results",
	searchTerm: "",
	handlers: {
		onShowMore: "next"
	},
	more: enyo.computed(function () {
		var $pag = this.pagination;
		if ($pag) {
			return $pag.pages > $pag.page;
		} else {
			return false;
		}
	}, "pagination", {cached: true}),
	searchTermChanged: function () {
		if (this.searchTerm.length >= 3) {
			if (!this.fetching) {
				this.fetchAndReplace();
			} else {
				this.queued = true;
			}
		}
	},
	didFetch: function () {
		this.inherited(arguments);
		if (this.queued) {
			this.queued = false;
			this.fetchAndReplace();
		}
	},
	buildQueryParams: function (model, options) {
		if (!options.urlProvided) {
			enyo.mixin(options.queryParams, {
				type: "artist",
				q: "title:" + this.searchTerm
			});
		}
	},
	next: function () {
		if (this.pagination) {
			if (this.pagination.pages > this.pagination.page) {
				var options = {};
				options.url = this.pagination.urls.next;
				// TODO: will need to remove this once the Jsonp object is updated to support
				// custom callback names
				options.url = options.url.replace(/&callback=enyo_jsonp_callback_[0-9]*/, "");
				this.fetch(options);
			}
		}
	}
});
