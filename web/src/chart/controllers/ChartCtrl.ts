/// <reference path="../main" />
/// <reference path="../services/chartService" />
/// <reference path="../config/chartOptions" />

module chart {
    export class ChartCtrl {

        constructor($scope:IChartScope,
                    $mdSidenav,
                    chartService:ChartService,
                    data,
                    toolbarService:toolbar.ToolbarService,
                    $routeParams) {
            $scope.toggleSidenav = (menuId) => {
                $mdSidenav(menuId).toggle();
            };

            toolbarService.setTitle('Chart', $routeParams.jobId);

            console.log(data);

            var tasks = data.tasks;
            var nodeTasks = data.nodeTasks;

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
