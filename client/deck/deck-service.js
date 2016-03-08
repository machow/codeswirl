angular.module('app')
       .factory('DeckService', DeckService);

function DeckService() {
    var service = {
        cards: [],
        indx: null,
        focus: null,
        getPrev: () => service.cards[service.indx - 1],
        getNext: () => service.cards[service.indx + 1],
        goPrev: () => go(service.indx-1),
        goNext: () => go(service.indx+1),
        queryCards: queryCards,
    };
    return service


    function go(indx) {
        if (service.cards[indx]) {
            service.indx = indx;
            service.focus = service.cards[indx];
            return service.focus
        }
        else return null
    }

    function queryCards() {
        service.cards = [
            {
                front: 'Git: list all untracked files',
                back:  'git ls-files --others --exclude-standard',
                alt: ['a', 'b', 'c'],
                src: 'stackoverflow.com',
                srcType: 'url',
                data: {
                },
                owner: 'michael',
                id: 1
            },
            {
                front: 'R: use lower triangle to make matrix M symmetric',
                back:  'M[upper.tri(M)] = t(M)[upper.tri(M)]',
                alt: ['a', 'b', 'c'],
                src: 'stackoverflow.com',
                srcType: 'url',
                data: {
                },
                owner: 'michael',
                id: 2
            }

        ];

        return go(0);
    }
}
