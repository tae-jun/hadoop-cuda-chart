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

    .run((chartService, $window, hadoopService:common.HadoopService, jobService:common.JobService) => {
        $window.chartService = chartService;
        $window.hadoopService = hadoopService;
        $window.jobService = jobService;

        jobService.list().then((data)=>console.log(data));
        jobService.getTasks('job_1425368798462_0002').then((data)=>console.log(data));
    });
