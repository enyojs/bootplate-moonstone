enyo.ready(function () {

	enyo.kind({
		name: "models.Artist",
		kind: "enyo.Model",
		attributes: {
			id: "id",
			name: "name",
			image: "image",
			bio: "bio",
			albums: {
				relation: {
					kind: "models.Album",
					json: true,
					type: "toMany"
				}
			}
		}
	});
	
	enyo.kind({
		name: "models.Album",
		kind: "enyo.Model",
		attributes: {
			id: "id",
			name: "name",
			image: "image"
		}
	});
	
	enyo.kind({
		name: "models.Artists",
		kind: "enyo.Collection",
		model: "models.Artist"
	});
	
	enyo.kind({
		name: "models.Source",
		kind: "enyo.Source",
		urlPostfix: "/rest/"
	});
	
	new enyo.Store({source: "models.Source"});
	
	collection = new models.Artists();
	collection.fetch({success: function () {
		console.log("ready");
	}})

});
