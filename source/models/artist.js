enyo.kind({
	name: "sample.ArtistModel",
	kind: "sample.Model",
	panelName: "artistPanel",
	// our api relies on the query string so we build the correct
	// options for this type of model
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
	filterData: function (data) {
		return data.artist;
	},
	attributes: {
		id: {
			remoteKey: "mbid",
			type: String
		},
		name: {
			type: String
		},
		thumb: {
			type: String,
			formatter: function (key, value, action, payload) {
				return payload.image? payload.image[1]["#text"]: "";
			}
		},
		summary: {
			type: String,
			formatter: function (key, value, action, payload) {
				return payload.bio? payload.bio.summary: "";
			}
		},
		largeImage: {
			type: String,
			formatter: function (key, value, action, payload) {
				return payload.image? payload.image[3]["#text"]: "";
			}
		},
		albums: {
			relation: enyo.toMany({
				inverseKey: "artist",
				collection: "sample.AlbumCollection"
			})
		}
	}
});
