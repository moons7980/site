angular.module('mainApp', ['services'])
    .controller('indexController', function ($scope, AppServices) {
        AppServices.get().then(function (msg) {
            $scope.msg = msg.data;
        });
    });


