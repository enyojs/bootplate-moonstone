enyo.kind({
	name: "sample.AlbumRow",
	kind: "sample.Item",
	classes: "album-row",
	components: [
		{classes: "name", bindFrom: ".name"},
		{classes: "year", bindFrom: ".year"},
		{classes: "label", bindFrom: ".label"},
		{classes: "format", bindFrom: ".format"},
		{classes: "country", bindFrom: ".country"}
	]
});
