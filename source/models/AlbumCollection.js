enyo.kind({
	name: "sample.AlbumCollection",
	kind: "sample.Collection",
	model: "sample.AlbumSearchModel",
	dataKey: "topalbums.album",
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
