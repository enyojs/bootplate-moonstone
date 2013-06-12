// this kind represents a full-album model (unlike AlbumSearchModel that is
// a partial-album returned from the search api)
enyo.kind({
	name: "sample.AlbumModel",
	kind: "sample.Model",
	panelName: "albumPanel",
	dataKey: "album",
	// our api relies on the query string so we build the correct
	// options for this type of model
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
	// we have a meta-property for the cover photo (url) returned
	// from the sub-structed image property returned by the api
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
