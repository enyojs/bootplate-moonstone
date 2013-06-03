enyo.kind({
	name: "sample.ArtistModel",
	kind: "enyo.Model",
	url: "artist",
	attributes: {
		id: "id",
		name: "name",
		image: "image",
		bio: "bio",
		albums: {
			relation: {
				json: true,
				key: "artist",
				type: "toMany",
				kind: "sample.AlbumModel"
			}
		}
	}
});

enyo.kind({
	name: "sample.ArtistsCollection",
	kind: "enyo.Collection",
	model: "sample.ArtistModel"
});