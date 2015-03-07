/// <reference path="../main.ts" />

module nav {
    export class JobListCtrl {

        constructor($scope, jobService:common.JobService) {
            jobService.list()
                .then((data)=> {
                    console.log(data);
                });

            $scope.jobs = [{
                "submitTime": 1425369353818,
                "startTime": 1425369358879,
                "finishTime": 1425369370046,
                "id": "job_1425368798462_0001",
                "name": "word count",
                "queue": "default",
                "user": "root",
                "state": "SUCCEEDED",
                "mapsTotal": 1,
                "mapsCompleted": 1,
                "reducesTotal": 1,
                "reducesCompleted": 1
            }, {
                "submitTime": 1425535994184,
                "startTime": 1425535999112,
                "finishTime": 1425536011885,
                "id": "job_1425368798462_0002",
                "name": "word count",
                "queue": "default",
                "user": "root",
                "state": "SUCCEEDED",
                "mapsTotal": 1,
                "mapsCompleted": 1,
                "reducesTotal": 1,
                "reducesCompleted": 1
            }, {
                "submitTime": 1425536072141,
                "startTime": 1425536076072,
                "finishTime": 1425536086476,
                "id": "job_1425368798462_0003",
                "name": "word count",
                "queue": "default",
                "user": "root",
                "state": "SUCCEEDED",
                "mapsTotal": 1,
                "mapsCompleted": 1,
                "reducesTotal": 1,
                "reducesCompleted": 1
            }]

        }
    }

    registerController('jobListCtrl', JobListCtrl);
}