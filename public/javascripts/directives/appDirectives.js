angular.module('directives', [])
    .directive('welcome', function () {
        return {
            restrict: 'E',
            template: '<img src="../images/logo.png"/>',
            link: function(scope, element, attrs) {
            }
        }
    })
    .directive('mailme', function () {
        return {
            restrict: 'E',
            template: "<form id='mailForm'>"
                      + "<input type='email' class='form-control' placeholder='Enter email or not !!!'>"
                      + "<textarea class='form-control' rows='4' placeholder='Message ?'></textarea>"
                      + "<a href='/mail' class='btn btn-primary form-control'>Send</a>"
                      + "</form>",
            link: function(scope, element, attrs) {
            }
        };
    });
