/// <reference path="./chart/main.ts" />

var dependencies = ['ngRoute', 'ngMaterial', 'chart'];

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
