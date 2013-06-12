enyo.kind({
	name: "sample.Source",
	kind: "enyo.Source",
	readOnly: true,
	ignorePort: true,
	requestKind: "enyo.JsonpRequest",
	domain: "http://ws.audioscrobbler.com/2.0/",
	buildQueryParams: function (model, options) {
		this.inherited(arguments);
		enyo.mixin(options.queryParams, {
			format: "json",
			api_key: "064788d95e436b69008a1245c79bf1fd"
		});
	}
});
