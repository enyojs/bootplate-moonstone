enyo.kind({
	name: "sample.Router",
	kind: "enyo.Router",
	useHistory: true,
	triggerOnStart: false,
	routes: [
		{default: true, path: "search", handler: "handleSearch", context: ".app"},
		{path: "artist/:id", handler: "handleArtist", context: ".app"},
		{path: "album/:id", handler: "handleAlbum", context: ".app"}
	]
});