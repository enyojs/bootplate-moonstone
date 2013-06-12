enyo.kind({
	name: "sample.TrackRow",
	kind: "sample.Item",
	classes: "track-row",
	components: [
		{classes: "position", bindFrom: ".position"},
		{classes: "name", bindFrom: ".name"},
		{classes: "duration", bindFrom: ".trackLength"}
	]
});
