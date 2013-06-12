// the album collection is a toMany related kind with the AlbumModel kind
// and uses the artist.getTopAlbums method from the last.fm api
enyo.kind({
	name: "sample.AlbumCollection",
	kind: "enyo.Collection",
	model: "sample.AlbumSearchModel",
	dataKey: "topalbums.album",
	// our api relies on the query string so we build the correct
	// options for this type of model
	buildQueryParams: function (model, options) {
		var $props = {}, $rel = this.relation.from;
		$props.method = "artist.getTopAlbums";
		if ($rel.name) {
			$props.artist = $rel.name;
		} else {
			$props.mbid = $rel.id;
		}
		enyo.mixin(options.queryParams, $props);
	}
});
