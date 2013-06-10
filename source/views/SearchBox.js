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
		{from: ".$.search.value", to: ".controller.searchTerm"},
		{from: ".controller.more", to: ".$.more.disabled", transform: "disableMore"}
	],
	components: [
		{kind: "moon.InputDecorator", components: [
			{name: "search", kind: "moon.Input", placeholder: "Search Artists"}]},
		{name: "more", kind: "moon.Button", content: "Show More", ontap: "onShowMore", disabled: true}
	],
	disableMore: function (value) {
		return !value;
	}
});