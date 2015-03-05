/// <reference path="../main.ts"/>
/// <reference path="./hadoopService.ts"/>

module common {
    export class JobService {
        private $q:ng.IQService;
        private hdpService:HadoopService;

        constructor(hadoopService:HadoopService, $q) {
            this.$q = $q;
            this.hdpService = hadoopService;
        }

        list():ng.IPromise<any> {
            return this.hdpService.request('/history/mapreduce/jobs');
        }

        getTasks(jobId:string):ng.IPromise<any> {
            return this.hdpService.request('/history/mapreduce/jobs/' + jobId + '/tasks');
        }
    }

    registerService('jobService', JobService);
}