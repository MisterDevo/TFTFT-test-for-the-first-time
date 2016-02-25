//auto generate by bower-requirejs : see bower postinstall
require.config({
	paths: {
	},
	shim: {
		app: [
			'angular'
		]
	},
	packages: [

	]
});

require(['app'], function() {
		//var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['TFTFT']);
		});
});
