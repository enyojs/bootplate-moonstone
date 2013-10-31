enyo.kind({
	name: "MyApp.Application",
	kind: "enyo.Application",
	components: [{
		name: "messageController",
		kind: "enyo.Controller",
		message: $L("Hello World")
	}],
	view: "MyApp.MainView"
});
