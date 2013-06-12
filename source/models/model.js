enyo.kind({
	name: "sample.Model",
	kind: "enyo.Model",
	noUrl: true,
	panelName: "",
	didFetch: function (options, result) {
		this.log(result);
		this.inherited(arguments);
	}
});

enyo.kind({
	name: "sample.Collection",
	kind: "enyo.Collection"
});