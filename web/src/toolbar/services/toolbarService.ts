module toolbar {
    export class ToolbarService {
        private $rootScope:ng.IRootScopeService;

        constructor($rootScope) {
            this.$rootScope = $rootScope;
        }

        setTitle(title:string) {
            this.$rootScope.$broadcast('toolbarService:setTitle', title);
        }
    }

    registerService('toolbarService', ToolbarService);
}