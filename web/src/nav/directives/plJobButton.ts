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
            }
        }
    }

    registerDirective('plJobButton', plJobButtonDirective);
}