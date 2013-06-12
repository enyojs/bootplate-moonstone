enyo.kind({
	name: "sample.AlbumModel",
	kind: "sample.Model",
	panelName: "albumPanel",
	dataKey: "album",
	buildQueryParams: function (model, options) {
		var $props = {};
		$props.method = "album.getInfo";
		if (this.artist && this.name) {
			$props.artist = this.artist;
			$props.album = this.name;
		} else {
			$props.mbid = this.id;
		}
		enyo.mixin(options.queryParams, $props);
	},
	cover: enyo.computed(function () {
		return this.image? this.image[3]["#text"]: "";
	}, "image"),
	attributes: {
		id: "mbid",
		name: "name",
		image: "image",
		released: "releasedate",
		artist: "artist",
		tracks: {
			relation: {
				type: "toMany",
				collection: "sample.TrackCollection"
			}
		}
	}
});
