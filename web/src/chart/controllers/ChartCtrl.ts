/// <reference path="../main" />
/// <reference path="../services/chartService" />
/// <reference path="../config/chartOptions" />

module chart {
    export class ChartCtrl {

        constructor($scope:IChartScope,
                    $mdSidenav,
                    chartService:ChartService,
                    job,
                    toolbarService:toolbar.ToolbarService,
                    $routeParams) {
            $scope.toggleSidenav = (menuId) => {
                $mdSidenav(menuId).toggle();
            };
            var jobId = $routeParams.jobId;
            var nodeName = $routeParams.nodeName;

            toolbarService.setTitle('Chart', jobId, nodeName);

            console.log(job);

            var tasks = job.tasks;
            var nodeTasks = job.nodeTasks;

            console.log('ChartCtrl', 'tasks', tasks);
            chartService.setChart(tasks);
            console.log(tasks);
            console.log(nodeTasks);

            $scope.nodes = nodeTasks;


        }
    }

    export interface IChartScope extends ng.IScope {
        toggleSidenav(menuId);
        chartConfig:any;
        nodes:Object;
    }

    registerController('chartCtrl', ChartCtrl);
}
