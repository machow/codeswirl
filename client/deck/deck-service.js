angular.module('app')
       .factory('DeckService', DeckService);

function DeckService($reactive) {
    // track focus card
    // update focus pos on change
    var service = {
        focus: {},
        deck: [],
        changeFocus: changeFocus,
        changeDeck: changeDeck,
        focusEmptyCard: focusEmptyCard,
        focusIfEmpty: focusIfEmpty
    };

    service.focusEmptyCard()
    return service;

    function changeFocus(card){
        console.log('focusing...');
        service.focus = card;
    }

    function changeDeck(deck){
        service.deck = deck;

        if (service.focus.isEmpty && service.deck[0]) 
            service.focus = service.deck[0];
    }

    function focusEmptyCard(){
        service.focus = { isEmpty: true};
    }

    function focusIfEmpty(card){
        var newFocus = card ? card : service.deck[0];
        if (service.focus.isEmpty && newFocus) service.focus = newFocus;
    }
}
