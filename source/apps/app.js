enyo.kind({
	name: "Bootplate.Application",
	kind: "enyo.Application",
	controllers: [{
		name: "messageController",
		kind: "enyo.Controller",
		message: $L("Hello World")
	}],
	view: "Bootplate.MainView"
});
