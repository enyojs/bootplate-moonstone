enyo.kind({
	name: "sample.Panels",
	kind: "moon.Panels",
	classes: "enyo-fit moon",
	onSpotlightPanelLeave: function(sender, event) {
		// TODO: This is being called a minimum of 3 times for each
		// attempt to leave a panel going LEFT...
		// this.log(event.direction);
		if (event.direction === "LEFT") {
			router.back();
			return true;
		}
		return this.inherited(arguments);
	}
});