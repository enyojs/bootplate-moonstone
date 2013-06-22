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
		{kind: "enyo.Spotlight"},
		{content: "Your content here"},
		{kind: "moon.CheckboxItem", content:"CSS Asset Check"},
		{kind: "enyo.Image", src:"$lib/moonstone/images/css3-icon.png"}
	],
	headerComponents: [
		{kind: "moon.IconButton", src: "assets/icon-like.png"}
	]
});
