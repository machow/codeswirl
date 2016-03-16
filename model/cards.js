Cards = new Mongo.Collection('cards');

if (Meteor.isServer) {
    Cards.remove({});
    var d = new Date(0);
    d.setSeconds(1);

    var test_cards = [
        {
            front: 'Git: list all untracked files',
            back:  'git ls-files --others --exclude-standard',
            alt: ['a', 'b', 'c'],
            src: 'stackoverflow.com',
            srcType: 'url',
            data: {
            },
            owner: 'michael',
            nextReview: moment().add(1, 'seconds').toDate(),
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
            nextReview: moment().add(1, 'seconds').toDate(),
        },
        {
            front: 'tmux attach session',
            back:  'tmux attach {X}',
            alt: ['a', 'b', 'c'],
            src: 'stackoverflow.com',
            srcType: 'url',
            data: {
            },
            owner: 'michael',
            nextReview: moment().add(3, 'seconds').toDate(),
        },
        {
            front: 'unzip fname.tar.gz',
            back:  'tar -xvf fname.tar.gz',
            alt: ['a', 'b', 'c'],
            src: 'stackoverflow.com',
            srcType: 'url',
            data: {
            },
            owner: 'michael',
            nextReview: moment().add(4, 'seconds').toDate(),
        },

    ]

    test_cards.forEach((v) => Cards.insert(v))
}
