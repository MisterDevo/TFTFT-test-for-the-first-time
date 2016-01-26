define(['angular',
    'angularRoute',
    'bootstrapUi',
    'metisMenu'

  ], function(angular) {
        return angular.module('TFTFT', ['ngRoute'

        ])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                      templateUrl: '../welcome.html'
                    })
                    .when('/coverage', {
                      templateUrl: '../coverage.html'
                    })
                    .when('/login', {
                      templateUrl: '../login.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }
        ])
  }
)
