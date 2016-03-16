angular.module('app')
       .directive('pbDeck', pbDeck);

function pbDeck() {
    return {
        restrict: 'E',
        templateUrl: 'client/deck/deck.html',
        controller: 'DeckController',
        controllerAs: 'vm',
        bindToController: true,
        link: link
    }
}

function link(scope, ele, attr, cntrl) {
}
