/// <reference path="../main" />
/// <reference path="../../chart/services/chartService" />


module toolbar {
    export class ToolbarCtrl {
        /*constructor($scope: IToolbarScope, $mdBottomSheet) {*/
        constructor($scope:any, $mdBottomSheet, chartService:chart.ChartService) {
            $scope.clickSort = ($event) => {
                $mdBottomSheet.show({
                    templateUrl: 'tpl/toolbarBottomSheet.tpl.html',
                    /*controller: 'ListBottomSheetCtrl',*/
                    //targetEvent: $event,
                    parent: $('body')
                }).then(function (clickedItem) {

                });
            };

            $scope.items = [
                {name: 'name'},
                {name: 'start'},
                {name: 'end'}
            ];
            $scope.listItemClick = function ($index) {
                var clickedItem = $scope.items[$index];
                chartService.sort(clickedItem.name);
                $mdBottomSheet.hide(clickedItem);
            };


            $scope.$on('toolbarService:setTitle', (event, titles) => {
                $scope.titles = titles
            });
        }
    }

    registerController('toolbarCtrl', ToolbarCtrl);
}
