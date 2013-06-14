enyo.kind({
	name: "sample.ArtistSearchModel",
	kind: "sample.Model",
	attributes: {
		id: {
			remoteKey: "mbid",
			type: String
		},
		name: {
			type: String
		},
		thumb: {
			remoteKey: "image_small",
			type: String
		}
	}
});
