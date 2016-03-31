angular.module('directives', [])
    .directive('welcome', function () {
        return {
            restrict: 'E',
            template: '<img src="../images/logo.png"/>',
            link: function(scope, element, attrs) {
            }
        }
    })
    .directive('mailme', ['$http', function($http) {
        return {
            restrict: 'E',
            template: "<form id='mailForm' name='mailForm' novalidate>"
                      + "<input type='email' ng-model='user.email' class='form-control' placeholder='Enter email or not !!!'>"
                      + "<textarea ng-model='user.message' required class='form-control' rows='4' placeholder='Message ?'></textarea>"
                      + "<input type='submit' class='btn btn-primary form-control' ng-click='send()' value='Send'>"
                      + "<div class='txtstyle'>{{response}}</div>"
                      + "</form>",
            link: function(scope, element, attrs) {
                scope.send = function () {
                  $http.post('/mail', scope.user)
                      .then(function successCallback(response) {
                          scope.response = response.data;
                        }, function errorCallback(response) {
                          scope.response = "An error occurs.";
                      });
              };
            }
        };
    }]);
