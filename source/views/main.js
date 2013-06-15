enyo.kind({
	name: "sample.MainView",
	kind: "enyo.View",
	classes: "main-view moon enyo-unselectable enyo-fit",
	components: [
		{kind: "enyo.Spotlight"},
		{name: "dialog", kind: "sample.Dialog"},
		{name: "panels", kind: "sample.Panels"}
	]
});
