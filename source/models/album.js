enyo.kind({
	name: "sample.AlbumModel",
	kind: "sample.Model",
	panelName: "albumPanel",
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
	filterData: function (data) {
		return data.album;
	},
	attributes: {
		id: {
			remoteKey: "mbid",
			type: String
		},
		name: {
			type: String
		},
		cover: {
			type: String,
			formatter: function (key, value, action, payload) {
				return payload.image? payload.image[3]["#text"]: "";
			}
		},
		released: {
			remoteKey: "releasedate",
			type: String
		},
		artist: {
			type: String
		},
		tracks: {
			relation: enyo.toMany({
				collection: "sample.TrackCollection",
				autoFetch: false
			})
		}
	}
	
});
