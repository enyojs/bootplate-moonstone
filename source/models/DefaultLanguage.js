enyo.kind({
	name: "Settings.DefaultLanguage",
	kind: "WebOS.Service",
	service: "palm://com.lge.settingsservice",
	method: "getSystemSettings",
	
	onSuccess: function(inData) {
		this.log(inData);
	},
	onFailure: function() {
		this.log(arguments);
	}
});