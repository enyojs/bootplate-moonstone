(function(enyo) {
	var requestProps = [
		"service",
		"method",
		"subscribe",
		"resubscribe"
	];
	
	var callbackMap = {
		success: "onSuccess",
		error: "onFailure",
		complete: "onComplete"
	};
	
	enyo.kind({
		name: "WebOS.PalmServiceBridge",
		kind: "enyo.Source",
	
		buildUrl: function (model, options) {
		
		},
		fetch: function (model, options) {
			this.buildRequest(model, options);
			this.exec(model, options);
		},
		buildRequest: function (model, options) {
			// Mixin params in _requestProps_ from model to options
			enyo.mixin(options, enyo.only(requestProps, model));
			// Remap callbacks to API callback names
			enyo.mixin(options, enyo.remap(callbackMap, options));
		},
		exec: function (model, options) {
			model.request = navigator.Service.Request(options.service, options);
		},
		commit: function (model, options) {
		
		},
		destroy: function (model, options) {
			model.request.cancel();
		}
	});
})(enyo);