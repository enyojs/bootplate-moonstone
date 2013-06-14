enyo.kind({
	name: "sample.AlbumSearchModel",
	kind: "sample.Model",
	attributes: {
		id: {
			remoteKey: "mbid",
			type: String
		},
		name: {
			type: String
		},
		rank: {
			type: Number
		},
		artist: {
			type: String
		},
		thumb: {
			type: String,
			formatter: function (key, value, action, payload) {
				return payload.image[1]["#text"];
			}
		}
	}
});
