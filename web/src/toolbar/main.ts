module toolbar {
    var ngModuleName = 'toolbar';

    var modules = ['ngMaterial'];

    angular.module(ngModuleName, modules);

    export function registerController(controllerName: string, controllerClass: IClass) {
        angular.module(ngModuleName)
            .controller(controllerName, controllerClass);
    }

    export function registerService(serviceName: string, serviceClass: IClass) {
        angular.module(ngModuleName)
            .service(serviceName, serviceClass);
    }

    export function registerDirective(directiveName: string, directiveFunction: (...services) => ng.IDirective) {
        angular.module(ngModuleName)
            .directive(directiveName, directiveFunction);
    }

    export interface IClass {
        new (...param);
    }
}
