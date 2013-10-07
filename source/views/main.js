enyo.kind({
	name: "Tutorial.Develop.FirstApp.MainView",
	kind: "moon.Panels",
	pattern: "alwaysviewing",
	autoNumber: false,
	title: "Flickr Search",
	classes: "moon main-view",
	controller: ".app.controllers.searchController",
	bindings: [
		{from: ".controller.searching", to: ".$.searchSpinner.showing"},
		{from: ".controller.total", to: ".total"}
	],
	components: [
		{name: "searchPanel", title: "Flickr Search", autoNumber: false, headerComponents: [
			{name: "searchSpinner", kind: "moon.Spinner", showing: false},
			{kind: "moon.InputDecorator", components: [
				{kind: "moon.Input", onchange: "search"},
				{kind: "enyo.Image", src: "assets/search-input-search.png"}
			]}
		], components: [
			/*{name: "list", kind: "moon.List", fit: true, touch: true, onSetupItem: "setupItem", components: [
				{name: "item", style: "padding: 10px;", classes: "panels-flickr-item", ontap: "itemTap", components: [
				//{name: "item", ontap: "showImage", components: [
					{name: "thumbnail", kind: "enyo.Image", classes: "panels-flickr-thumbnail"},
					{name: "title", classes: "panels-flickr-title"}
				]},
				{name: "more", style: "background-color: #323232;", components: [
					{kind: "onyx.Button", content: "more photos", classes: "onyx-dark panels-flickr-more-button", ontap: "more"},
					{name: "moreSpinner", kind: "Image", src: "assets/spinner.gif", classes: "panels-flickr-more-spinner"}
				]}
			]}*/
			{name: "list", kind: "moon.DataList", controller: ".app.controllers.resultCollection", components: [
				{kind: "Tutorial.Develop.FirstApp.ResultListItem", ontap: "itemTap"}
			]}
		]},
		{name: "pictureView", fit: true, kind: "enyo.FittableRows", classes: "panels-flickr-main", components: [
			{fit: true, components: [
				{name: "flickrImage", kind: "enyo.Image", classes: "enyo-fit panels-flickr-center panels-flickr-image", showing: false, onload: "imageLoaded", onerror: "imageLoaded"},
				{name: "imageSpinner", kind: "moon.Spinner", classes: "enyo-fit panels-flickr-center"}
			]}
		]}
	],
	totalChanged: function() {
		//this.$.searchPanel.set("titleAbove", this.total);
	},
	// Repurposed from the Sampler app (http://enyojs.com/sampler)
	search: function(inSender, inEvent) {
		var rc = this.app.controllers.resultCollection;
		this.searchText = inSender.get("value");
		//this.page = 0;
		if (rc.length) {
			rc.destroyAll();
		}
		this.controller.search(this.searchText);
		return true;
	},
	/*searchResults: function(inSender, inResults) {
		this.$.searchSpinner.set("showing", false);
		//this.$.moreSpinner.hide();
		this.results = this.results.concat(inResults);
		this.$.list.setCount(this.results.length);
		if (this.page === 0) {
			this.$.list.reset();
		} else {
			this.$.list.refresh();
		}
	},*/
	itemTap: function(inSender, inEvent) {
		var model = inEvent.model;
		var item = model.attributes;
		this.next();
		this.$.imageSpinner.set("showing", true);

		if (item.original == this.$.flickrImage.get("src")) {
			this.imageLoaded();
		} else {
			this.$.flickrImage.hide();
			this.$.flickrImage.set("src", item.original);
		}
		return true;
	},
	imageLoaded: function() {
		var img = this.$.flickrImage;
		img.removeClass("tall");
		img.removeClass("wide");
		img.show();
		var b = img.getBounds();
		var r = b.height / b.width;
		if (r >= 1.25) {
			img.addClass("tall");
		} else if (r <= 0.8 ) {
			img.addClass("wide");
		}
		this.$.imageSpinner.set("showing", false);
	}
});

enyo.kind({
	name: "Tutorial.Develop.FirstApp.ResultListItem",
	kind: "moon.Item",
	layoutKind: "enyo.FittableColumnsLayout",
	classes: "panels-flickr-item",
	bindings: [
		{from: ".model.thumbnail", to: ".$.thumbnail.src"},
		{from: ".model.title", to: ".$.title.content"}
	],
	components: [
		{name: "thumbnail", kind: "enyo.Image", classes: "panels-flickr-thumbnail"},
		{name: "title", classes: "panels-flickr-title"}
	]
});
