enyo.kind({
	name: "sample.Source",
	kind: "enyo.Source",
	readOnly: true,
	ignorePort: true,
	requestKind: "enyo.JsonpRequest",
	domain: "api.discogs.com",
	filter: function (data) {
		if (data.data) {
			return data.data;
		}
	}
});