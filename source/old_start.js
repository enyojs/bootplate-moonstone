enyo.ready(function () {
	
	enyo.kind({
		name: "Models.Album",
		kind: "enyo.Model",
		attributes: {
			id: "album_id",
			name: "album_title",
			artist: "artist_id",
			image: "album_image_file"
		}
	});
	
	enyo.kind({
		name: "Models.Albums",
		kind: "enyo.Collection",
		model: "Models.Album",
		url: "albums.jsonp",
		dataKey: "dataset",
		buildQueryParams: function (model, options) {
			// only necessary because of this whonky api
			// i'm pulling from
			var params = options.queryParams;
			var target = options.relation.from;
			params.artist_id = target.get("id");
		}
	});

	enyo.kind({
		name: "Models.Artist",
		kind: "enyo.Model",
		attributes: {
			id: {
				key: "artist_id",
			},
			name: "artist_name",
			image: "artist_image_file",
			bio: "artist_bio",
			albums: {
				key: "album_ids",
				relation: {
					json: true,
					key: "artist",
					type: "many",
					collection: "Models.Albums"
				}
			}
		}
	});
	
	enyo.kind({
		name: "Models.Artists",
		kind: "enyo.Collection",
		model: "Models.Artist",
		url: "artists.jsonp",
		dataKey: "dataset"
	});
	
	enyo.kind({
		name: "Sample.Source",
		kind: "enyo.Source",
		readOnly: true,
		requestKind: "enyo.JsonpRequest",
		domain: "freemusicarchive.org/api/get",
		defaultOptions: {
			cacheBust: false
		},
		buildQueryParams: function (model, options) {
			options.queryParams = {
				api_key: "9NQIEGH2FCKEHD3R",
				limit: 50
			}
			this.inherited(arguments);
		}
	});
	
	new enyo.Store({source: "Sample.Source"});
	
	collection = new Models.Artists();

});
