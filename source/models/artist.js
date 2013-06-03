enyo.kind({
	name: "sample.ArtistModel",
	kind: "sample.Model",
	url: "artists",
	attributes: {
		// the id field for this artist in the database
		id: "id",
		// the actual name of the artist
		name: "name",
		// real name of the artist if not the name of a band
		realName: "realname",
		// the http-clickable link to the artist from the database
		// website
		link: "uri",
		// the images for the artist
		images: "images",
		//
		albums: {
			relation: {
				type: "toMany",
				collection: "sample.AlbumCollection",
				autoFetch: true
			}
		}
	}
});
