enyo.kind({
	name: "Bootplate.MainView",
	kind: "enyo.View",
	classes: "bootplate-mainview",
	controller: ".app.controllers.messageController",
	bindings: [{
		from: ".controller.message",
		to: ".content"
	}]
});
