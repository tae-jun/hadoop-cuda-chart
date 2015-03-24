/// <reference path="../main.ts" />

module nav {
    export function plJobButtonDirective($routeParams):ng.IDirective {
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
                    console.log('routeParams', $routeParams);
                });
            }
        }
    }

    registerDirective('plJobButton', plJobButtonDirective);
}