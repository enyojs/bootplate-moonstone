enyo.kind({
	name: "WebOS.Service",
	kind: "enyo.Model",
	service: "",
	method: "",
	subscribe: false,
	resubscribe: false,
	
	filterData: function (data) {
		return data;
	},
	cancel: function() {
		this.destroy();
	},
	onSuccess: function() {
		
	},
	onFailure: function() {
		
	},
	onComplete: function() {
		
	},
	send: function() {
		this.fetch();
	},
	
	//* @protected
	
	exec: function (action, options) {
		if (enyo.store) {
			var $options = options? enyo.clone(options): {};
			$options.success = this.bindSafely("onSuccess");
			$options.error = this.bindSafely("onFailure");
			$options.complete = this.bindSafely("onComplete");
			enyo.store[action](this, $options);
		} else {
			this.set("status", ERROR.SOURCE);
		}
	},
	constructed: function() {
		this.inherited(arguments);
		this._relations = {};
	}
});