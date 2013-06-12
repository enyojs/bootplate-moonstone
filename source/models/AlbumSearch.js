enyo.kind({
	name: "sample.AlbumSearchModel",
	kind: "sample.Model",
	thumb: enyo.computed(function () {
		return this.image? this.image[1]["#text"]: "";
	}, "image"),
	attributes: {
		id: "mbid",
		name: "name",
		rank: "rank",
		artist: "artist",
		image: "image"
	}
});
