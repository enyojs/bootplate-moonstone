enyo.ready(function () {

	new enyo.Store({source: "sample.Source"});
	app = new sample.Application();
	app.controllers.contacts.fetch();
	
});