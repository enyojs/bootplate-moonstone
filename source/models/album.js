enyo.kind({
	name: "sample.AlbumModel",
	kind: "sample.Model",
	url: "/releases",
	attributes: {
		id: "id",
		name: "title",
		link: "uri",
		image: "thumb",
		label: "label",
		year: "year",
		artist: "artist",
		tracks: {
			relation: {
				type: "toMany",
				collection: "sample.TrackCollection",
				autoFetch: true
			}
		}
	}
});
