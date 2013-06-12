enyo.kind({
	name: "sample.AlbumPanel",
	kind: "sample.Panel",
	bindings: [
		{from: ".model.name", to: ".title"},
		{from: ".model.artist", to: ".titleBelow"},
		{from: ".model.cover", to: ".$.header.$.cover.src"},
		{from: ".model.tracks", to: ".$.tracks.controller"}
	],
	headerComponents: [
		{name: "cover", kind: "enyo.Image"}
	],
	components: [
		{name: "tracks", kind: "moon.DataList", classes: "enyo-fill", fit: true, components: [
			{kind: "sample.TrackRow", ontap: "dispatchAlbum"}]}
	]
});