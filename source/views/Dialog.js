enyo.kind({
	name: "sample.Dialog",
	kind: "moon.Dialog",
	classes: "dialog",
	bindings: [
		{from: ".app.dialogMessage", to: ".message"},
		{from: ".app.dialogTitle", to: ".title"},
		{from: ".app.dialogShowing", to: ".showing"}
	]
});
