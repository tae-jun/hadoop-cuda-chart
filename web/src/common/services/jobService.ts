/// <reference path="../main.ts"/>
/// <reference path="./hadoopService.ts"/>

module common {
    export class JobService {
        private $q:ng.IQService;
        private hdpService:HadoopService;

        private jobCache = {};

        constructor(hadoopService:HadoopService, $q) {
            this.$q = $q;
            this.hdpService = hadoopService;
        }

        list():ng.IPromise<any> {
            return this.hdpService.request('/history/mapreduce/jobs');
        }

        getTasks(jobId:string):ng.IPromise<any> {
            if (this.jobCache[jobId] != undefined)
                return this.$q.when(this.jobCache[jobId]);

            return this.hdpService.request('/history/mapreduce/jobs/' + jobId + '/tasks')
                .then((res)=> {
                    this.jobCache[jobId] = res;

                    return res;
                });
        }
    }

    registerService('jobService', JobService);
}