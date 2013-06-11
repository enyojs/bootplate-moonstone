enyo.kind({
	name: "sample.ArtistPanel",
	kind: "sample.Panel",
	bindings: [
		{from: ".model.name", to: ".title"},
		{from: ".model.realName", to: ".titleBelow"},
		{from: ".model.albums", to: ".$.albums.controller"}
	],
	parents: [
		"artists"
	],
	headerComponents: [
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