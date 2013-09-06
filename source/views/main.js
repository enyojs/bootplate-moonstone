enyo.kind({
	name: "MyApp.MainView",
	kind: "moon.Panel",
	classes: "moon main-view",
	controller: ".app.controllers.messageController",
	bindings: [{
		from: ".controller.message",
		to: ".title"
	}],
	components: [
		{content: "Your content here"}
	],
	headerComponents: [
		{kind: "moon.IconButton", src: "assets/icon-like.png"}
	]
});
