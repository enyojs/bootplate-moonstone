/**
	TODO: This should ultimately be of kind moon.SearchHeader but
	at the time this was created that kind was not working.
*/
enyo.kind({
	name: "sample.SearchBox",
	kind: "enyo.View",
	classes: "search-box moon",
	spotlight: false,
	controller: ".app.controllers.artists",
	bindings: [
		{from: ".$.search.value", to: ".controller.searchTerm"}
	],
	components: [
		{kind: "moon.InputDecorator", components: [
			{name: "search", classes: "search", kind: "moon.Input", placeholder: "Search Artists"}]}
	]
});