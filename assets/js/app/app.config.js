(function () {
    'use strict';

    angular
        .module('ludificar')
        .config(routes);

    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('intro', {
                url: "/",
                templateUrl: "intro.html"
            })
            .state('objetivos', {
                url: "/objetivos",
                templateUrl: "objetivos.html"
            });


        $urlRouterProvider.otherwise("/");
    }

})();