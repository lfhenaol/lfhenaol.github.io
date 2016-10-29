(function () {
    'use strict';

    angular
        .module('ludificar')
        .controller('LudificarCtrl',LudificarCtrl);
    
    function LudificarCtrl() {
        var ludif = this;
        ludif.fn = {
            active: active
        };
        ludif.test = "Test";
        ludif.active = {};
        /////////////////////////////

        function active(str) {
            console.log(ludif);
            if(ludif.active) {
                ludif.active = {};
                ludif.active[str] = "active";
            }
        }
    }
})();