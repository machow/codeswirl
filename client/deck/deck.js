// uses moment

angular.module('app')
       .controller('DeckController', DeckController);

function DeckController($scope, $interval, $reactive, DeckService){
    var vm = this;
    $reactive(vm).attach($scope);

    vm.filter = {
        date: new Date(),
        group: "todo",
        tag: "todo"
    };
    vm.cards = [];
    vm.changeFocus = (card) => DeckService.changeFocus(card);
    vm.isFocused = (card) => card._id == DeckService.focus._id;

    //$interval(() => vm.filter.date = moment().add(1, 'months').toDate(), 5000) // MAKE A ANGULAR CONSTANT

    vm.helpers({
        cards: function() { 
            return Cards.find(
                { nextReview: {$lt: vm.getReactively('filter.date')}}, 
                { sort: {nextReview: 1}}
        )}
    });

    vm.subscribe('cards');

    $scope.$watch('vm.cards[0] && vm.cards[0]._id', function(newVal){
        DeckService.focusIfEmpty(vm.cards[0]);
    });

    DeckService.changeDeck(vm.cards);
}
