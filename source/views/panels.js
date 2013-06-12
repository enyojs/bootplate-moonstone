enyo.kind({
	name: "sample.Panels",
	kind: "moon.Panels",
	arrangerKind: "moon.LeanForwardArranger",
	classes: "enyo-fit moon",
	// TODO: This doesn't seem like it should be necessary for an
	// end-developer to need to worry about this
	onTap: function(server, event) {
		if (event.originator.isBreadcrumb) {
			enyo.Spotlight.setLast5WayControl(event.originator);
			enyo.Spotlight.setPointerMode(false);
			router.back();
			return true;
		}
		return false;
	},
	onSpotlightPanelLeave: function(sender, event) {
		// TODO: This is being called a minimum of 3 times for each
		// attempt to leave a panel...
		if (event.direction === "LEFT") {
			router.back();
			return true;
		}
		return this.inherited(arguments);
	},
});