enyo.ready(function () {

	// create our store instance for the application with
	// our overloaded source
	new enyo.Store({source: "sample.Source"});
	// now create our application instance
	app = new sample.Application();
	
});