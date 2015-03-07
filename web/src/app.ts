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
                        /**
                         * TODO:
                         * DELETE SAMPLE DATA
                         */
                        return {
                            "historyInfo": {
                                "startedOn": 1425369693984,
                                "hadoopVersion": "2.4.1",
                                "hadoopBuildVersion": "2.4.1 from Unknown by root source checksum bb7ac0a3c73dc131f4844b873c74b630",
                                "hadoopVersionBuiltOn": "2014-07-25T13:06Z"
                            }
                        };

                        //return historyService.get();
                    }
                }
            })

            .when('/chart/:jobId', {
                template: '<div></div>',
                //templateUrl: 'tpl/chart.tpl.html',
                controller: 'chartCtrl',
                resolve: {
                    tasks: ($q:ng.IQService, $route, jobService:common.JobService)=> {
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

