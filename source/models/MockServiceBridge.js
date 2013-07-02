enyo.kind({
	name: "WebOS.MockServiceBridge",
	kind: "WebOS.PalmServiceBridge",

	buildRequest: function (model, options) {
		this.inherited(arguments);
		this.buildUrl(model, options);
		options.method = "GET";
	},
	buildUrl: function(model, options) {
		var service = options.service;
		
		service = service.replace("palm://", "assets/") + "." + options.method.toLowerCase() + ".json";
		service = this.domain + "/" + service;
		
		options.url = service;
	},
	exec: function (model, options) {
		var $options = enyo.only(this._ajaxOptions, options);
		var $success = this.bindSafely("onSuccess", options);
		var $com = new this.requestKind($options);
		$com.response($success);
		$com.error(options.onFailure);
		$com.go();
	},
	onSuccess: function(options, inSender, inResponse) {
		options.success(inResponse);
	}
})