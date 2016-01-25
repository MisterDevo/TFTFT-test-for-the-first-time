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
                      templateUrl: '../login.html'
                  })
                  .otherwise({
                        redirectTo: '/'
                    });
            }
        ])
  }
)
