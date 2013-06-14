enyo.kind({
	name: "sample.TrackCollection",
	kind: "enyo.Collection",
	model: "sample.TrackModel",
	filterData: function (data) {
		return data.track;
	}
});
