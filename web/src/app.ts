/// <reference path="./chart/main.ts" />
/// <reference path="./toolbar/main.ts" />
/// <reference path="./common/main.ts" />

var dependencies =
    [
        'ngRoute',
        'ngMaterial',
        'chart',
        'toolbar',
        'common'
    ];

var app = angular.module('hcc', dependencies)

    .config(($routeProvider:ng.route.IRouteProvider) => {
        $routeProvider
            .when('/chart', {
                templateUrl: 'tpl/chart.tpl.html'
            })

            .otherwise({
                redirectTo: '/chart'
            });
    })

    .run((chartService, $window, hadoopService:common.HadoopService) => {
        $window.chartService = chartService;
        $window.hadoopService = hadoopService;

        hadoopService.request('/history/info')
            .then(
            function (data) {
                console.log(data);
            },
            function (err) {
                console.log(err);
            }
        );
    });
