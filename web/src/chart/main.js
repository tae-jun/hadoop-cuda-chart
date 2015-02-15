var chart;
(function (chart) {
    var ngModuleName = 'chart';
    var modules = [];
    angular.module(ngModuleName, modules);
    function registerController(controllerName, controllerClass) {
        angular.module(ngModuleName).controller(controllerName, controllerClass);
    }
    chart.registerController = registerController;
    function registerService(serviceName, serviceClass) {
        angular.module(ngModuleName).service(serviceName, serviceClass);
    }
    chart.registerService = registerService;
    function registerDirective(directiveName, directiveFunction) {
        angular.module(ngModuleName).directive(directiveName, directiveFunction);
    }
    chart.registerDirective = registerDirective;
})(chart || (chart = {}));
