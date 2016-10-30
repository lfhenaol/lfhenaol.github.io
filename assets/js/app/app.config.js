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
                templateUrl: "evaluacion_financiera.html",
                controller: function () {
                    Highcharts.createElement('link', {
                        href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
                        rel: 'stylesheet',
                        type: 'text/css'
                    }, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
                    Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
                        proceed.call(this);
                        this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
                    });


                    Highcharts.theme = {
                        colors: ['#795548', '#009688', '#8d4654', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
                            '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                        chart: {
                            backgroundColor: null,
                            style: {
                                fontFamily: 'Signika, serif'
                            }
                        },
                        title: {
                            style: {
                                color: 'black',
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }
                        },
                        subtitle: {
                            style: {
                                color: 'black'
                            }
                        },
                        tooltip: {
                            borderWidth: 0
                        },
                        legend: {
                            itemStyle: {
                                fontWeight: 'bold',
                                fontSize: '13px'
                            }
                        },
                        xAxis: {
                            labels: {
                                style: {
                                    color: '#6e6e70'
                                }
                            }
                        },
                        yAxis: {
                            labels: {
                                style: {
                                    color: '#6e6e70'
                                }
                            }
                        },
                        plotOptions: {
                            series: {
                                shadow: true
                            },
                            candlestick: {
                                lineColor: '#404048'
                            },
                            map: {
                                shadow: false
                            }
                        },

                        // Highstock specific
                        navigator: {
                            xAxis: {
                                gridLineColor: '#D0D0D8'
                            }
                        },
                        rangeSelector: {
                            buttonTheme: {
                                fill: 'white',
                                stroke: '#C0C0C8',
                                'stroke-width': 1,
                                states: {
                                    select: {
                                        fill: '#D0D0D8'
                                    }
                                }
                            }
                        },
                        scrollbar: {
                            trackBorderColor: '#C0C0C8'
                        },

                        // General
                        background2: '#E0E0E8'

                    };

// Apply the theme
                    Highcharts.setOptions(Highcharts.theme);

                    Highcharts.chart('container', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Flujo de fondos puro'
                        },
                        xAxis: {
                            categories: ['Año 0', 'Año 1', 'Año 2', 'Año 3', 'Año 4']
                        },
                        credits: {
                            enabled: false
                        },
                        series: [{
                            name: 'Flujo de fondos neto',
                            data: [-337276140
                                ,102597485
                                , 109533861
                                , 115026980
                                , 122822056
                            ]
                        }]
                    });
                    Highcharts.chart('flujo_financiado', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Flujo de fondos financiado'
                        },
                        xAxis: {
                            categories: ['Año 0', 'Año 1', 'Año 2', 'Año 3', 'Año 4']
                        },
                        credits: {
                            enabled: false
                        },
                        series: [{
                            name: 'Flujo de fondos neto',
                            data: [-67455228
                                ,20654440
                                , 25782661
                                , 29232567
                                ,34718811

                            ]
                        }]
                    });

                    Highcharts.chart('flujo', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Flujo de fondos puro y financiado'
                        },
                        xAxis: {
                            categories: ['Año 0', 'Año 1', 'Año 2', 'Año 3', 'Año 4']
                        },
                        credits: {
                            enabled: false
                        },
                        series: [{
                            name: 'Flujo de fondos puro neto',
                            data: [-337276140
                                ,102597485
                                , 109533861
                                , 115026980
                                , 122822056
                            ]
                        },{
                            name: 'Flujo de fondos financiado neto',
                            data: [-67455228
                                ,20654440
                                , 25782661
                                , 29232567
                                ,34718811

                            ]
                        }]
                    });
                }
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