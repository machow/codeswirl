angular.module('app')
       .directive('pbCard', pbCard);

function pbCard() {
    return {
        restrict: 'E',
        templateUrl: 'client/card/card.html',
        scope: {
            card: '='
        },
        controller: 'CardController',
        controllerAs: 'vm',
        bindToController: true,
    }
}
