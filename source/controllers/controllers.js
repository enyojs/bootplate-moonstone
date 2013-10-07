// Modified from original FlickrSearch component in the Sampler app (http://enyojs.com/sampler)

enyo.kind({
	name: "Tutorial.Develop.FirstApp.FlickrSearchController",
	kind: "enyo.Controller",
	url: "http://api.flickr.com/services/rest/",
	page: 0,
	pageSize: 200,
	api_key: "2a21b46e58d207e4888e1ece0cb149a5",
	searchText: "",
	search: function(inSearchText, inPage) {
		this.set("searchText", inSearchText || this.get("searchText"));
		var i = (inPage || 0) * this.pageSize;
		var params = {
			method: "flickr.photos.search",
			format: "json",
			api_key: this.api_key,
			per_page: this.pageSize,
			page: i,
			text: this.get("searchText")
		};
		var req;
		this.set("searching", true);
		if (window.location.protocol === "ms-appx:") {
			params.nojsoncallback = 1;
			// Use ajax for platforms with no jsonp support (Windows 8)
			req = new enyo.Ajax({url: this.url, handleAs: "text"})
				.response(this, "processAjaxResponse")
				.go(params);
		} else {
			req = new enyo.JsonpRequest({url: this.url, callbackName: "jsoncallback"})
				.response(this, "processResponse")
				.go(params);
		}
		return req;
	},
	processAjaxResponse: function(inSender, inResponse) {
		inResponse = JSON.parse(inResponse);
		this.processResponse(inSender, inResponse);
	},
	processResponse: function(inSender, inResponse) {
		var photos = inResponse.photos ? inResponse.photos.photo || [] : [];
		var m;
		for (var i=0, p; (p=photos[i]); i++) {
			var urlprefix = "http://farm" + p.farm + ".static.flickr.com/" + p.server + "/" + p.id + "_" + p.secret;
			p.thumbnail = urlprefix + "_s.jpg";
			p.original = urlprefix + ".jpg";
			m = new Tutorial.Develop.FirstApp.ResultModel();
			m.set(p);
			this.app.controllers.resultCollection.add(m);
		}
		this.set("searching", false);
		this.set("total", inResponse.photos.total || 0);
		return photos;
	}
});
