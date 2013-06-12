enyo.kind({
	name: "sample.ArtistModel",
	kind: "sample.Model",
	panelName: "artistPanel",
	dataKey: "artist",
	buildQueryParams: function (model, options) {
		var $props = {};
		$props.method = "artist.getInfo";
		if (this.name) {
			$props.name = this.name;
		} else {
			$props.mbid = this.id;
		}
		enyo.mixin(options.queryParams, $props);
	},
	summary: enyo.computed(function () {
		return this.bio? this.bio.summary: "";
	}, "bio"),
	thumb: enyo.computed(function () {
		return this.image? this.image[1]["#text"]: "";
	}, "image"),
	largeImage: enyo.computed(function () {
		return this.image? this.image[3]["#text"]: "";
	}, "image"),
	attributes: {
		id: "mbid",
		name: "name",
		image: "image",
		bio: "bio",
		albums: {
			relation: {
				type: "toMany",
				collection: "sample.AlbumCollection",
				autoFetch: true
			}
		}
	}
});
