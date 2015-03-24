/// <reference path="../main.ts" />

module nav {
    export class JobListCtrl {

        constructor($scope, jobService:common.JobService, $routeParams) {
            var jobId = $routeParams.jobId;
            jobService.list()
                .then((data)=> {
                    $scope.jobs = data.jobs.job;
                    $scope.jobs.forEach((job)=> {
                        if (job['id'] == jobId)
                            return job['selected'] = true;

                        job['selected'] = false;
                    });

                    console.log('jobList', data);
                });

            $scope.$on('$locationChangeSuccess', (newState, oldState)=> {
                console.log('newState', newState);
                console.log('oldState', oldState);
                console.log('current job in controller', jobService.getCurrentJob());
            });
        }
    }

    registerController('jobListCtrl', JobListCtrl);
}