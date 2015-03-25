/// <reference path="../main" />

module chart {
    export class ChartService {
        private http:ng.IHttpService;

        private series:any[];

        constructor($http) {
            this.http = $http;
            this.series = [];
        }

        public setChart(tasks:any[]):void {
            this.series = [];
            tasks.forEach((task, index)=> {
                var record = {
                    name: task.id,
                    data: [{
                        x: index,
                        low: task.startTime,
                        high: task.finishTime,
                        eTime: task.elapsedTime,
                        node: task.nodeHttpAddress || task.attempt.nodeHttpAddress
                    }]
                };

                this.series.push(record);
            });

            this.series.sort((a, b)=> {
                if (a.data[0].node < b.data[0].node)
                    return -1;
                if (a.data[0].node > b.data[0].node)
                    return 1;

                return 0;
            });

            this.series.forEach((value, i) => {
                value.data.forEach((val:any)=> {
                    val.x = i;
                });
            });

            var options = $.extend(chartOptions, {series: this.series});
            setTimeout(()=> {
                $('#chartContainer').highcharts(options);
            });
        }

        /**
         * SORT BY
         * - name
         * - start
         * - end
         */
        sort(by?:string) {
            if (by == 'start')
                this.series.sort((a, b) => {
                    return a.data[0].low - b.data[0].low;
                });
            else if (by == 'end')
                this.series.sort((a, b) => {
                    return a.data[a.data.length - 1].high - b.data[b.data.length - 1].high;
                });
            else
                this.series.sort((a, b) => {
                    return a.index - b.index;
                });

            this.series.forEach((value, i) => {
                value.data.forEach((val:any)=> {
                    val.x = i;
                });
            });

            this.setChart(this.series);
        }

        splitMapper(value:boolean) {
            /**
             * TODO:
             * Splitable mapper
             */
        }
    }

    registerService('chartService', ChartService);
}
