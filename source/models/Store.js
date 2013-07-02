enyo.kind({
	name: "WebOS.Store",
	kind: "enyo.Store",
	constructor: function () {
		this.inherited(arguments);
		
		if (!window.PalmSystem) {
			this.source = new WebOS.MockServiceBridge();
		} else {
			this.source = new WebOS.PalmServiceBridge();
		}
	}
});