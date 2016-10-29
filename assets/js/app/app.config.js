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
            })
            .state('justificacion', {
                url: "/justificacion",
                templateUrl: "justificacion.html"
            })
            .state('antecedentes', {
                url: "/antecedentes",
                templateUrl: "antecedentes.html"
            })
            .state('legal', {
                url: "/legal",
                templateUrl: "estudio_legal.html"
            })
            .state('ambiental', {
                url: "/ambiental",
                templateUrl: "estudio_ambiental.html"
            })
            .state('organizacional', {
                url: "/organizacional",
                templateUrl: "estudio_organizacional.html"
            })
            .state('entorno', {
                url: "/entorno",
                templateUrl: "estudio_entorno.html"
            })
            .state('tecnico', {
                url: "/tecnico",
                templateUrl: "estudio_tecnico.html"
            })
            .state('mercado', {
                url: "/mercado",
                templateUrl: "estudio_mercado.html"
            })
            .state('financiacion', {
                url: "/financiacion",
                templateUrl: "fuentes_financiacion.html"
            })
            .state('financiera', {
                url: "/financiera",
                templateUrl: "evaluacion_financiera.html"
            })
            .state('integrantes', {
                url: "/integrantes",
                templateUrl: "about.html"
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "contact.html"
            });


        $urlRouterProvider.otherwise("/");
    }

})();