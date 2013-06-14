enyo.kind({
	name: "sample.MainView",
	kind: "enyo.View",
	classes: "main-view moon",
	components: [
		{kind: "enyo.Spotlight"},
		// TODO: Can this be moved to the floatingLayer
		{name: "loading", kind: "sample.Popup"},
		{name: "panels", kind: "sample.Panels"}
	]
});
