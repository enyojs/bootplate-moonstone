enyo.kind({
	name: "sample.TrackModel",
	kind: "sample.Model",
	position: enyo.computed(function () {
		return this.rank? this.rank.rank: 0;
	}, "rank"),
	trackLength: enyo.computed(function () {
		var str, rem, dur = this.get("duration");
		str = Math.floor(parseInt(dur) / 60);
		str += ":";
		rem = parseInt(dur) % 60;
		str += rem < 10? ("0" + rem.toString()): rem;
		return str;
	}, "duration"),
	attributes: {
		id: "mbid",
		name: "name",
		rank: "@attr",
		duration: "duration"
	}
});
