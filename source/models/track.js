enyo.kind({
	name: "sample.TrackModel",
	kind: "sample.Model",
	attributes: {
		id: {
			remoteKey: "mbid",
			type: String
		},
		name: {
			type: String
		},
		position: {
			type: Number,
			formatter: function (key, value, action, payload) {
				return payload["@attr"]? payload["@attr"].rank: 0;
			}
		},
		trackLength: {
			type: String,
			typeWrangler: function (key, value) {
				// TODO: this might not be IE safe
				return Math.floor(value/60)+":"+("0"+(value%60)).slice(-2);
			},
			formatter: function (key, value, action, payload) {
				return payload.duration? payload.duration: "00:00";
			}
		}
	}
});
