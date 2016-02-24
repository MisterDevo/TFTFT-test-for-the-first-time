require.config({
	paths: {
    angular: 'vendor/angular.min',
    angularRoute: 'vendor/angular-route.min',
		angularResource: "vendor/angular-resource.min",
		angularAnimate: "vendor/angular-animate.min",
    bootstrapUi: "vendor/ui-bootstrap-tpls.min"
	},
	shim: {
		'app': ['angular']
	}
});

require(['app'], function() {
		//var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['TFTFT']);
		});
});
