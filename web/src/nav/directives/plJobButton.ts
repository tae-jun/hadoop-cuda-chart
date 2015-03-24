/// <reference path="../main.ts" />

module nav {
    export function plJobButtonDirective():ng.IDirective {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                job: '='
            },
            templateUrl: 'tpl/plJobButton.tpl.html',
            replace: true,
            link: (scope, elem, attr) => {
                console.log(scope['job']);
                scope.$watch('job.nodeTasks', (newValue, oldValue)=> {
                    console.log('watch job.nodeTasks', newValue, oldValue);
                }, true);
            }
        }
    }

    registerDirective('plJobButton', plJobButtonDirective);
}