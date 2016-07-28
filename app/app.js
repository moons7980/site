
var mainApp = angular.module('mainApp', ['ngRoute', 'services']);

mainApp
    .controller('homeController', function ($scope, $location, AppServices) {
        AppServices.getHomeContents().then(function (msg) {
            $scope.msg = msg.data;            
        });
        $scope.getClass = function (path) {
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        }
    })
    .controller('aboutController', function ($scope, AppServices) {
        AppServices.getAboutContents().then(function (msg) {
            $scope.msg = msg.data;
        });
    });

mainApp.run(function ($rootScope, $location, $anchorScroll) {
    $anchorScroll.yOffset = 70;
    $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
        if ($location.hash()) $anchorScroll();
    });
});

mainApp.filter('unsafe', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});

mainApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider
        .when("/home", {
            templateUrl: "templates/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html"
        })
        .when("/services", {            
            templateUrl: "templates/services.html",
            controller: "homeController"
        })
        .otherwise({
            redirectTo: "/home"
        })
    $locationProvider.html5Mode(true);
});