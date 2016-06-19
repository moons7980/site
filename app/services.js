angular.module('services', [])
    .factory('AppServices', function ($http) {
        return {
            get: function () {
                return $http.get('/contents/contents.json');
            }
        };
    });