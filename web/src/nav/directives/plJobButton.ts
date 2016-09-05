/// <reference path="../main.ts" />
/// <reference path="../../common/services/jobService.ts" />

namespace parlab.nav {
    export function plJobButtonDirective($route, jobService:common.JobService):ng.IDirective {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                job: '='
            },
            templateUrl: 'tpl/plJobButton.tpl.html',
            replace: true,
            link: (scope, elem, attr) => {
                scope.$on('$locationChangeSuccess', (event, newState, oldState)=> {
                    var jobId = $route.current.params['jobId'];

                    if (jobId != scope['job']['id'])
                        return scope['job']['nodeTasks'] = undefined;

                    console.log('newState', newState);
                    console.log('oldState', oldState);

                    jobService.getTasks(jobId)
                        .then((res)=> {
                            console.log('job button directive job service get tasks', res);
                            scope['job']['nodeTasks'] = res['nodeTasks'];
                        })
                });
            }
        }
    }

    registerDirective('plJobButton', plJobButtonDirective);
}