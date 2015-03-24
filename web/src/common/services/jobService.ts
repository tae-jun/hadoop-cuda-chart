/// <reference path="../main.ts"/>
/// <reference path="./hadoopService.ts"/>

module common {
    export class JobService {
        private $q:ng.IQService;
        private hdpService:HadoopService;

        private currentJob;

        constructor(hadoopService:HadoopService, $q) {
            this.$q = $q;
            this.hdpService = hadoopService;
        }

        list():ng.IPromise<any> {
            return this.hdpService.request('/history/mapreduce/jobs');
        }

        getTasks(jobId:string):ng.IPromise<any> {
            return this.hdpService.request('/history/mapreduce/jobs/' + jobId + '/tasks')
                .then((res)=> {
                    this.currentJob = res;

                    console.log('current job', this.currentJob);

                    return res;
                });
        }

        getCurrentJob() {
            return this.currentJob;
        }
    }

    registerService('jobService', JobService);
}