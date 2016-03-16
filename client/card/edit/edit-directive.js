angular.module('app')
       .directive('pbCardEdit', pbCardEdit);

function pbCardEdit() {
    return {
        restrict: 'E',
        templateUrl: 'client/card/edit/edit.html',
        scope: {
            card: '='
        },
        controller: 'CardEditController',
        controllerAs: 'vm',
        bindToController: true,
    }
}

