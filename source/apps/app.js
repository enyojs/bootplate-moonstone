enyo.kind({
	name: "Tutorial.Develop.FirstApp.Application",
	kind: "enyo.Application",
	controllers: [
		{name: "searchController", kind: "Tutorial.Develop.FirstApp.FlickrSearchController"},
		{name: "resultCollection", kind: "enyo.Collection"}
	],
	view: "Tutorial.Develop.FirstApp.MainView"
});
