if (Meteor.isClient) {

	UI.registerHelper('indicator', function(){
		var data = this.data;
		console.log("indicator helper called with data: ", data);

		return UI.With(function () {
			console.log("UI.With function called returning template with data context: ", data);
			return {dataContext: data};
		}, Template._indicator);
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
