define(['angularRoute',
        'angularResource',
        'controllers/appControllers',
        'services/welcomeService',
        'directives/welcomeDirective'
  ], function() {
        return angular.module('TFTFT', ['ngRoute',
                                        'ngResource',
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
                    .when('/coverage', {
                      templateUrl: '../coverage.html'
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
