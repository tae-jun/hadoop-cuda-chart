/// <reference path="./chart/main.ts" />
/// <reference path="../scripts/_references.d.ts" />
var dependencies = ['ngRoute', 'ngMaterial', 'chart'];
var app = angular.module('hcc', dependencies).config(function ($routeProvider) {
    $routeProvider.when('/chart', {
        templateUrl: 'tpl/chart.tpl.html'
    }).otherwise({
        redirectTo: '/chart'
    });
});
