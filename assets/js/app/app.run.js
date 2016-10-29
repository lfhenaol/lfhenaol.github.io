(function () {
    'use strict';

    angular
        .module('ludificar')
        .run(run);
    run.$inject = ['$rootScope','$location','$state','$window'];

    //Bloque de código que se ejecuta una vez que comienza a correr la app Angular
    function run($rootScope,$location,$state,$window) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {
            //Scroll hasta arriba para simular un refresco de pagina
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }
})();