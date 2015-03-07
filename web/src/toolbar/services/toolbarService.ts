module toolbar {
    export class ToolbarService {
        private $rootScope:ng.IRootScopeService;

        constructor($rootScope) {
            this.$rootScope = $rootScope;
        }

        setTitle(...titles:any[]) {
            if (typeof titles == 'string')
                titles = [titles];

            this.$rootScope.$broadcast('toolbarService:setTitle', titles);
        }
    }

    registerService('toolbarService', ToolbarService);
}