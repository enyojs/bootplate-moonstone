
enyo.kind({
	name: "sample.AlbumCollection",
	kind: "sample.Collection",
	model: "sample.AlbumModel",
	url: "/artists/:id/releases",
	dataKey: "releases",
	filterData: function (data) {
		return enyo.filter(data, function (data) {
			return data.main_release && data.type == "master";
		});
	}
});