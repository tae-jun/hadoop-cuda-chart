/// <reference path="../main.ts"/>

module common {
    export class HadoopService {
        private $http:ng.IHttpService;
        private $q:ng.IQService;

        constructor($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }

        /**
         * Request to Hadoop History Server REST API
         *
         * @param url ex) /history/info
         */
        request(url:string):ng.IPromise<any> {
            var deferred = this.$q.defer();

            this.$http.get(url)
                .success((res:any)=> {
                    if (res.err)
                        return deferred.reject(res.msg);
                    deferred.resolve(res.data);
                })
                .error((err)=> {
                    deferred.reject('hadoopService: HTTP GET failure');
                });

            return deferred.promise;
        }
    }

    registerService('hadoopService', HadoopService);
}