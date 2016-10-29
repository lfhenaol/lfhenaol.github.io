(function () {
    'use strict';

    angular
        .module('ludificar')
        .controller('LudificarCtrl',LudificarCtrl);

    LudificarCtrl.$inject = ['$state','$scope'];
    
    function LudificarCtrl($state,$scope) {
        var ludif = this;
        ludif.fn = {
            active: active,
            activeSubMenu:activeSubMenu,
            mostrarBorde: mostrarBorde
        };

        ludif.test = "Test";
        ludif.active = {};
        ludif.sub = {};
        /////////////////////////////

        function active(str) {
            if(ludif.active) {
                ludif.active = {};
                ludif.active[str] = "active";
            }
        }

        function activeSubMenu(str) {
            console.log(str);
            if(ludif.sub) {
                ludif.sub = {};
                ludif.sub[str] = "active";
            }
        }

        function mostrarBorde() {
            return $state.is("intro");
        }
    }
})();