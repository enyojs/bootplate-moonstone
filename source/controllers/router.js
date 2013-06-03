enyo.kind({
	name: "sample.Router",
	kind: "enyo.Router",
	useHistory: true,
	triggerOnStart: false,
	routes: [
		{default: true, path: "artists", handler: "changePanel", context: ".app"},
		{path: ":kind/:id", handler: "changeWithData", context: ".app"}
	]
});