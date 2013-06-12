/**
	ABOUT THIS BOOTPLATE-MOONSTONE EXAMPLE APPLICATION

	This is an example application intended to show some useful, working example
	of how to use the data-backend as well as routing and one possible pattern
	for using data-driven panels. There are many ways to accomplish what is seen
	in this particular implementation. This will be updated as changes are made
	to the framework to support new features or correct bugs, etc.

	One particular thing to note is that the backend API (last.fm) is only a
	single type of remote data. In this application we are using our local models
	to represent their data return structure and calls. Other applications will
	need to be modified according to their needs. When using remote data, there is
	no one-size-fits-all solution.
*/
enyo.ready(function () {

	// create our store instance for the application with
	// our overloaded source
	new enyo.Store({source: "sample.Source"});
	// now create our application instance that will automatically
	// start (default settings)
	new sample.Application();
	
});