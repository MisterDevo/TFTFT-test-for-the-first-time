require.config({
	paths: {
    jquery: 'vendor/jquery.min',
    bootstrap: 'vendor/bootstrap.min',
    metisMenu: 'vendor/metisMenu.min',
		sbadmin2: 'vendor/sb-admin-2',

    angular: 'vendor/angular.min',
    angularRoute: 'vendor/angular-route.min',
		angularResource: "vendor/angular-resource.min",

    //bootstrapUi: "vendor/ui-bootstrap-tpls-0.12.0.min"
	},
	shim: {
		'app': ['angular'],
		'sbadmin2': ['jquery','bootstrap', 'metisMenu'],
		'metisMenu': ['jquery'],
    'bootstrap': ['jquery']
	}
});

require(['app','sbadmin2'], function() {
		//var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['TFTFT']);
		});
});
