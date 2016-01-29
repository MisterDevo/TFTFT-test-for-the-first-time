define(['angular'], function(angular){ angular.module('controllers', [])
        .controller('welcomeController', ['$scope', 'welcomeService',
                function ($scope, welcomeService) {

                  //$scope.messages = [{text:'first message'}, {text:'second message'}];
                  $scope.messages = welcomeService.messages.query();

        }]);
});
