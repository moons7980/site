angular.module('services', [])
    .factory('AppServices', function ($http) {
        return {
            getHomeContents: function () {
                return $http.get('/contents/homeContents.json');
            },
            getAboutContents: function () {
                return $http.get('/contents/aboutContents.json');
            }
        };
    });