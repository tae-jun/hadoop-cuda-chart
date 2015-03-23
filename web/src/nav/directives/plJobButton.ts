/// <reference path="../main.ts" />

module nav {
    export function plJobButtonDirective():ng.IDirective {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                nodeTasks: '=nodes'
            },
            templateUrl: 'tpl/plJobButton.tpl.html',
            replace: true,
            link: (scope, elem, attr) => {
            }
        }
    }

    registerDirective('plJobButton', plJobButtonDirective);
}