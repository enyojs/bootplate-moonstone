enyo.kind({
	name: "sample.List",
	kind: "moon.DataList",
	classes: "enyo-fit",
	controller: ".app.controllers.contacts",
	components: [
		{kind: "sample.ListItem"}
	]
})