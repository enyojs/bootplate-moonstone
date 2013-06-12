enyo.kind({
	name: "sample.AlbumRow",
	kind: "sample.Item",
	classes: "album-row",
	components: [
		{classes: "rank", bindFrom: ".rank"},
		{classes: "thumb", components: [
			{kind: "enyo.Image", bindFrom: ".thumb", bindTo: ".src"}]},
		{classes: "name", bindFrom: ".name"}
	]
});
