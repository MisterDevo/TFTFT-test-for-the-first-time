require.config({
	paths: {
    jquery: 'vendor/jquery.min',
    bootstrap: 'vendor/bootstrap.min',
    sbadmin2: 'vendor/sb-admin-2',
    metisMenu: 'vendor/metisMenu.min',
    angular: 'vendor/angular.min',
    angularRoute: 'vendor/angular-route.min',
		angularResource: "vendor/angular-resource.min",

    bootstrapUi: "vendor/ui-bootstrap-tpls-0.12.0.min"
	},
	shim: {
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular'],
		'angularResource': {
            deps: ['angular'],
            exports: 'angularResource'
        },

    'sbadmin2': ['jquery','metisMenu'],

    bootstrap: {
        deps: ['jquery'],
        exports: 'bootstrap'
    },

    bootstrapUi: {
        deps: ['angular', 'bootstrap'],
        exports: 'bootstrapUi'
    },

    metisMenu: {
        deps: ['jquery'],
        exports: 'metisMenu'
    }

	}
});

require([
	'angular',
  'sbadmin2',
	'app'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['TFTFT']);
		});
	}
);
