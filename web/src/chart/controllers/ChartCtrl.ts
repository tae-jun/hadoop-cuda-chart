/// <reference path="../main" />
/// <reference path="../services/chartService" />
/// <reference path="../config/chartOptions" />

module chart {
    export class ChartCtrl {

        constructor($scope:IChartScope, $mdSidenav, chartService:ChartService, tasks) {
            $scope.toggleSidenav = (menuId) => {
                $mdSidenav(menuId).toggle();
            };
            //chartService.init();
            console.log('ChartCtrl');
            console.log(tasks);
        }
    }

    export interface IChartScope extends ng.IScope {
        toggleSidenav(menuId);
        chartConfig: any;
    }

    registerController('chartCtrl', ChartCtrl);
}
