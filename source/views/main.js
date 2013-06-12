enyo.kind({
	name: "sample.MainView",
	kind: "enyo.View",
	classes: "main-view moon",
	components: [
		{kind: "enyo.Spotlight"},
		{name: "loading", kind: "sample.Loading"},
		{name: "panels", kind: "sample.Panels"}
	]
});
