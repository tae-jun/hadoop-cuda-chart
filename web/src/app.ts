/// <reference path="./chart/main.ts" />
/// <reference path="./toolbar/main.ts" />
/// <reference path="./common/main.ts" />
/// <reference path="./info/main.ts" />
/// <reference path="./nav/main.ts" />

var dependencies =
    [
        'ngRoute',
        'ngMaterial',
        'chart',
        'toolbar',
        'common',
        'info',
        'nav'
    ];

var app = angular.module('hcc', dependencies)

    .config(($routeProvider:ng.route.IRouteProvider) => {
        $routeProvider

            .when('/history', {
                templateUrl: 'tpl/history.tpl.html',
                controller: 'infoCtrl',
                resolve: {
                    info: (historyService:common.HistoryService)=> {
                        return historyService.get();
                    }
                }
            })

            .when('/chart/:jobId', {
                templateUrl: 'tpl/chart.tpl.html',
                controller: 'chartCtrl',
                resolve: {
                    job: ($q:ng.IQService, $route, jobService:common.JobService)=> {
                        var jobId = $route.current.params.jobId;
                        return jobService.getTasks(jobId);
                    }
                }
            })

            .when('/chart/:jobId/:nodeName', {
                templateUrl: 'tpl/chart.tpl.html',
                controller: 'chartCtrl',
                resolve: {
                    job: ($q:ng.IQService, $route, jobService:common.JobService)=> {
                        var jobId = $route.current.params.jobId;
                        return jobService.getTasks(jobId);
                    }
                }
            })

            .otherwise({
                redirectTo: '/history'
            });
    })

    .run((chartService, $window, hadoopService:common.HadoopService, jobService:common.JobService) => {
        $window.chartService = chartService;
        $window.hadoopService = hadoopService;
        $window.jobService = jobService;

        //jobService.list().then((data)=>console.log(data));
        //jobService.getTasks('job_1425368798462_0002').then((data)=>console.log(data));
    });

