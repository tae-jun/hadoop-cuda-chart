/// <reference path="./chart/main.ts" />
/// <reference path="./toolbar/main.ts" />

var dependencies = ['ngRoute', 'ngMaterial', 'chart', 'toolbar'];

var app = angular.module('hcc', dependencies)

    .config(($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
        .when('/chart', {
        templateUrl: 'tpl/chart.tpl.html'
    })

        .otherwise({
        redirectTo: '/chart'
    });
})

    .run((chartService, $window) => {
    $window.chartService = chartService;
});
