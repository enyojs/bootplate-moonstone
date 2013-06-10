
enyo.kind({
	name: "sample.AlbumCollection",
	kind: "sample.Collection",
	model: "sample.AlbumModel",
	url: "/artists/:id/releases",
	dataKey: "releases"
});