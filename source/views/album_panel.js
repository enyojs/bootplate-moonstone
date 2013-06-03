enyo.kind({
	name: "sample.AlbumPanel",
	kind: "sample.Panel",
	parents: [
		"artists",
		"artist"
	],
	bindings: [
		{from: ".model.name", to: ".title"},
		{from: ".model.label", to: ".titleBelow"},
		{from: ".model.tracks", to: ".$.tracks.controller"}
	],
	headerComponents: [
	],
	components: [
		{name: "tracks", kind: "moon.DataList", classes: "enyo-fill", fit: true, components: [
			{kind: "sample.Item", ontap: "dispatchAlbum", layoutKind: "enyo.FittableColumnsLayout",
				components: [
					{bindFrom: ".position"},
					{bindFrom: ".name"}]}]}
	]
});