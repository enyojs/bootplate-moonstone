/**
	Define and instantiate your enyo.Application kind in this file.  Note,
	application rendering should be deferred until DOM is ready by wrapping
	it in a call to ready().
*/

var
	kind = require('enyo/kind'),
	ready = require('enyo/ready'),
	view = require('./src/views/views.js');

var
	Application = require('enyo/Application');

	var MyApp = module.exports = kind({
	name: "myApp.Application",
	kind: Application,
	view: view
});

ready(function () {
	new MyApp({name: "app"});

});