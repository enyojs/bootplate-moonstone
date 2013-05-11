enyo.kind({
	name: "MyApp.Application",
	kind: "enyo.Application",
	controllers: [{
		name: "messageController",
		kind: "enyo.Controller",
		message: $L("Hello World")
	}],
	view: "MyApp.MainView"
});
