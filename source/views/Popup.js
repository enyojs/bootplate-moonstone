// TODO: Currently this only works in webkit and uses CSS transitions
// but should this ultimately use an animator
enyo.kind({
	name: "sample.Popup",
	kind: "enyo.View",
	classes: "popup",
	showMessage: false,
	bindings: [
		{from: ".app.showPopup", to: ".showMessage"},
		{from: ".app.popupMessage", to: ".$.message.content"}
	],
	components: [
		{name: "message", tag: "h2"}
	],
	messageObserver: enyo.observer(function (prop, prev, val) {
		if (true === val) {
			this.addClass("showing");
		} else {
			this.removeClass("showing");
		}
	}, "showMessage")
});
