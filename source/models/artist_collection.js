enyo.kind({
	name: "sample.ArtistCollection",
	kind: "enyo.Collection",
	model: "sample.ArtistSearchModel",
	url: "/database/search",
	dataKey: "results",
	buildQueryParams: function (model, options) {
		enyo.mixin(options.queryParams, {
			type: "artist",
			q: "title:a*"
		});
	}
});
