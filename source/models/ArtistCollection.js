enyo.kind({
	name: "sample.ArtistCollection",
	kind: "enyo.Collection",
	model: "sample.ArtistSearchModel",
	dataKey: "results.artistmatches.artist",
	searchTerm: "",
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
		enyo.mixin(options.queryParams, {
			method: "artist.search",
			artist: this.get("searchTerm"),
			limit: 10
		});
	}
});
