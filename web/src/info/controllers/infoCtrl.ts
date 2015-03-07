/// <reference path="../main.ts" />

module info {
    class InfoCtrl {

        constructor($scope, info, toolbarService:toolbar.ToolbarService) {
            $scope.info = info.historyInfo;
            $scope.info.startedOn = new Date($scope.info.startedOn).toLocaleString();
            $scope.info.hadoopVersionBuiltOn = new Date($scope.info.hadoopVersionBuiltOn).toLocaleString();

            toolbarService.setTitle('Hadoop Server Info');
        }
    }

    registerController('infoCtrl', InfoCtrl);
}