// TODO: Should this always need to be done when using spotlight
// events
enyo.kind({
	name: "sample.Item",
	kind: "moon.Item",
	handlers: {
		onSpotlightRight: "right"
	},
	right: function () {
		this.bubble("ontap", {});
		return true;
	}
});
