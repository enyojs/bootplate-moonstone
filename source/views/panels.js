enyo.kind({
	name: "sample.Panels",
	kind: "moon.Panels",
	arrangerKind: "moon.LeanForwardArranger",
	classes: "enyo-fit moon",
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
		if (event.direction === "LEFT") {
			router.back();
			return true;
		}
		return this.inherited(arguments);
	},
});