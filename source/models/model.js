enyo.kind({
	name: "sample.Model",
	kind: "enyo.Model",
	// setting the noUrl flag to true allows us to rely solely
	// on query parameters (for a query string) which is necessary
	// for our models to work with last.fm's remote api
	noUrl: true,
	// the models each name the panel assigned to them so it can
	// be easily found and removed/added when necessary
	panelName: ""
});
