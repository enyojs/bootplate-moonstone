enyo.kind({
	name: "sample.Application",
	kind: "enyo.Application",
	controllers: [
		{name: "contacts", kind: "sample.Contacts"}
	],
	view: "sample.MainView"
});