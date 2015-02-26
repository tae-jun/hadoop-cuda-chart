/// <reference path="../main" />

module chart {
    export class ChartService {
        private http:ng.IHttpService;

        private series:any[];

        constructor($http) {
            this.http = $http;
        }

        init() {
            this.getData((err, sereis)=> {
                if (err)return console.error(err);

                this.setChart(sereis);
            });
        }

        private getData(callback:(err:Error, series:any[]) => void) {
            this.http.get('/hdlog')
                .success((res:any) => {
                    if (res.err)
                        return callback(res.err, null);

                    var mappers = res.data.mappers;
                    var series = [];

                    mappers.forEach((mapper:any, index) => {
                        var record = {
                            name: 'Mapper ' + index,
                            data: [],
                            index: index
                        };

                        mapper.logs.forEach((log:any)=> {
                            record.data.push({
                                x: index,
                                low: log.start,
                                high: log.end
                            });
                        });

                        series.push(record);
                    });

                    this.series = series;
                    callback(res.err, series);
                })
                .error((err) => {
                    callback(new Error('http error'), err);
                })
        }

        private setChart(series:any[]):void {
            var options = $.extend(chartOptions, {series: series});
            $('#chartContainer').highcharts(options);
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
                value.data.forEach((val)=> {
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
