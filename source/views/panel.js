enyo.kind({
	name: "sample.Panel",
	kind: "moon.Panel",
	parents: [],
	model: null,
	modelChanged: function () {
		if (enyo.isModel(this.model)) {
			this.rebuildBindings();
		}
	}
});