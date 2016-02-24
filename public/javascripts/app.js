define(['angularRoute',
        'angularResource',
        'angularAnimate',
        'bootstrapUi',
        'controllers/appControllers',
        'services/welcomeService',
        'directives/welcomeDirective'
  ], function() {
        return angular.module('TFTFT', ['ngRoute',
                                        'ngResource',
                                        'ngAnimate',
                                        'ui.bootstrap',
                                        'controllers',
                                        'services',
                                        'directives'
        ])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                      templateUrl: '../welcome.html',
                      controller: 'welcomeController'
                    })
                    .when('/mochawesome', {
                      templateUrl: '../mochawesome.html'
                    })
                    .when('/coverage', {
                      templateUrl: '../coverage.html'
                    })
                    .when('/saucelabs', {
                      templateUrl: '../saucelabs.html'
                    })
                    .when('/login', {
                      templateUrl: '../login.html',
                      controller: 'loginController'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }
        ]);
    }
);
