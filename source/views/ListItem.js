enyo.kind({
	name: "sample.ListItem",
	kind: "moon.Item",
	defaultKind: "sample.ListItemElement",
	style: "font-size: 18px; font-weight: normal; padding: 18px;",
	components: [
		{bindFrom: ".index", bindSource: ".parent.parent", style: "width: 200px;"},
		{bindFrom: ".FirstName", style: "width: 200px;"},
		{bindFrom: ".LastName", style: "width: 200px;"},
		{bindFrom: ".Email", style: "width: 220px;"}
	]
});

enyo.kind({
	name: "sample.ListItemElement",
	style: "display: inline-block; -moz-box-sizing: border-box; box-sizing: border-box;"
});