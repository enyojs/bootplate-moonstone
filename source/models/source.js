enyo.kind({
	name: "sample.Source",
	kind: "enyo.Source",
	readOnly: true,
	ignorePort: true,
	requestKind: "enyo.JsonpRequest",
	domain: "http://ws.audioscrobbler.com/2.0/",
	events: {
		onError: ""
	},
	buildQueryParams: function (model, options) {
		this.inherited(arguments);
		enyo.mixin(options.queryParams, {
			format: "json",
			api_key: "064788d95e436b69008a1245c79bf1fd"
		});
	},
	//*@public
	/**
		_enyo.Source_ has a special feature that for any of the commands you
		can issue (e.g. fetch, commit, destroy, update) you can create a function
		of the form _didFetch_, _didCommit_ etc. These are special though because
		you're not overloading them. If they exist it will expect either a true
		or false return. A true return means "ok, keep going" and a false means
		"there was an issue, stop normal flow".
	
		The errors we're looking for come back as successful requests
		(meaning that the server responded OK) but the payload will
		include the error number and status text. So we have to look for
		that and issue our own error.
	*/
	didFetch: function (options, result) {
		// look for an error key that will only exist when something went
		// wrong in the api or the server couldn't find something we were
		// looking for
		if (result && result.error) {
			// we have a special event setup so that we emit the error for
			// any listeners, in our case, the application is handling it
			this.doError({message: result.message});
			// we also need to indicate to the model/collection that made
			// the initial request that there was an error and not to keep
			// going as if everything is ok
			if (options.error) {
				options.error(result);
			}
			// in order to ensure that the source does not continue with its
			// normal flow we return false
			return false;
		}
		// it nothing is wrong we must return true so it will continue
		return true;
	}
});
