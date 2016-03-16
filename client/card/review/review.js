// loads JsDiff

angular.module('app')
       .controller('CardReviewController', CardReviewController);

function CardReviewController($scope){
    var vm = this;

    if (!vm.card) vm.card = {};
    vm.showFront = true;
    vm.showBack = false;
    vm.show = vm.showFront ? vm.card.front : vm.card.back;
    vm.parts = [];
    vm.answer = "";
    vm.diffTool = 'diffWords';

    vm.toggle = (prop) => vm[prop] = !vm[prop]
    
    vm.diffBack = function(answer) { 
        if (vm.card.back) vm.parts = JsDiff[vm.diffTool](vm.card.back, answer);
    };

    vm.setDiffTool = function(toolname) {
        if (JsDiff[toolname]) {
            vm.diffTool = toolname;
            vm.diffBack(vm.answer);
        }
        else console.log(`no tool named ${toolname}`);

    };

    // TODO consider moving this into DeckService
    vm.nextCard = function(){
        var nextCard, match;
        
        if (!vm.deck.length) return vm.card = {};

        var lastCard = vm.deck.length - 1;
        for (let ii = 0; ii < lastCard; ii++)
            if (vm.deck[ii]._id == vm.card._id) {
                match = true;
                nextCard = vm.deck[ii+1];
            }
        if (!nextCard && !match) nextCard = vm.deck[0];
        else if (!match) nextCard = {};
        // last case: will not have card if only card is current one

        vm.card = nextCard;
    };

    vm.submit = function(next=true){
        vm.card.nextReview = moment().add(1, 'minutes').toDate();
        Cards.update(vm.card._id, { $set: { nextReview: vm.card.nextReview } });
        if (next) vm.nextCard();
    };

    vm.setCard = function(card) {
        vm.card = card;
    };

    $scope.$watch('vm.answer', vm.diffBack);
}
