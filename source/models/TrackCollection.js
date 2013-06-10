enyo.kind({
	name: "sample.TrackCollection",
	kind: "sample.Collection",
	model: "sample.TrackModel",
	url: "/releases/:id",
	dataKey: "tracklist"
});