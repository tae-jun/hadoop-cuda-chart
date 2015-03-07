/// <reference path="../main.ts" />

module nav {
    export class JobListCtrl {

        constructor($scope, jobService:common.JobService) {
            jobService.list()
                .then((data)=> {
                    console.log(data);
                    $scope.jobs = data.jobs.job;
                });
        }
    }

    registerController('jobListCtrl', JobListCtrl);
}