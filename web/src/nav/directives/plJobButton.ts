/// <reference path="../main.ts" />

module nav {
    export function plJobButtonDirective($route):ng.IDirective {
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

                scope.$on('$locationChangeSuccess', (event, newState, oldState)=> {
                    console.log('newState', newState);
                    console.log('oldState', oldState);
                    console.log('route current params', $route.current.params);
                });
            }
        }
    }

    registerDirective('plJobButton', plJobButtonDirective);
}