enyo.kind({
	name: "sample.ArtistPanel",
	kind: "moon.Panel",
	bindings: [
		{from: ".model.name", to: ".title"},
		{from: ".model.summary", to: ".$.header.$.bio.content"},
		{from: ".model.largeImage", to: ".$.header.$.thumb.src"},
		{from: ".model.albums", to: ".$.albums.controller"}
	],
	parents: [
		"artists"
	],
	headerComponents: [
		{classes: "artist-header", components: [
			{name: "bio", allowHtml: true, classes: "artist-bio"},
			{name: "thumb", kind: "enyo.Image", classes: "artist-image"}]}
	],
	components: [
		{name: "albums", kind: "moon.DataList", classes: "enyo-fill", fit: true, components: [
			{kind: "sample.AlbumRow", ontap: "dispatchAlbum"}]}
	],
	dispatchAlbum: function (sender, event) {
		var $row = event.row;
		if ($row) {
			router.set("location", "album/" + $row.model.get("id"));
		}
		return true;
	}
});