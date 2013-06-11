enyo.kind({
	name: "sample.AlbumModel",
	kind: "sample.Model",
	url: "/releases",
	create: function () {
		this.inherited(arguments);
		this.fetch();
	},
	attributes: {
		id: "id",
		name: "title",
		link: "uri",
		image: "thumb",
		label: "label",
		year: "year",
		artist: "artist",
		country: "country",
		format: "format",
		tracks: {
			relation: {
				type: "toMany",
				collection: "sample.TrackCollection",
				autoFetch: true
			}
		}
	}
});
