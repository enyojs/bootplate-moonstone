enyo.kind({
	name: "sample.Loading",
	kind: "enyo.View",
	classes: "loader",
	fetching: false,
	bindings: [
		{from: "enyo.store.fetching", to: ".fetching"}
	],
	components: [
		{tag: "h2", content: "Fetching Data"}
	],
	fetchingChanged: function (prev, val) {
		this.log(prev, val);
		if (true === val) {
			this.addClass("loading");
		} else {
			this.removeClass("loading");
		}
	}
});
