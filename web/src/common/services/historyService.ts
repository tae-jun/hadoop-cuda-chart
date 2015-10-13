/// <reference path="../main.ts"/>
/// <reference path="./hadoopService.ts"/>

namespace parlab.common {
    export class HistoryService {
        private hdpService:HadoopService;

        constructor(hadoopService:HadoopService) {
            this.hdpService = hadoopService;
        }

        get():ng.IPromise<any> {
            return this.hdpService.request('/history/info');
        }
    }

    registerService('historyService', HistoryService);
}