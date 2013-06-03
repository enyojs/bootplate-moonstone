enyo.kind({
	name: "sample.MainView",
	kind: "enyo.View",
	classes: "sample-mainview moon",
	components: [
		{kind: "enyo.Spotlight"},
		{name: "panels", kind: "sample.Panels"}
	]
});
