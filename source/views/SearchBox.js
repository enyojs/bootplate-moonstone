/**
	TODO: This should ultimately be unnecessary and removed
	when moon.SearchPanel becomes useable.
*/
enyo.kind({
	name: "sample.SearchBox",
	kind: "enyo.View",
	classes: "search-box",
	spotlight: false,
	bindings: [
		{from: ".$.search.value", to: ".app.controllers.artists.searchTerm"}
	],
	components: [
		{kind: "moon.TooltipDecorator", components: [
			{kind: "moon.InputDecorator", components: [
				{name: "search", classes: "search", kind: "moon.Input", placeholder: "Search Artists"},
				// TODO: Proper way to show the image in debug.html?
				{kind: "enyo.Image", src: "$lib/moonstone/samples/assets/search-input-search.png"}
			]},
			{kind: "moon.Tooltip", content: "Search for an artist"}
		]}
	]
});