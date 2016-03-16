// loads JsDiff

angular.module('app')
       .controller('CardEditController', CardEditController);

function CardEditController($scope){
    var vm = this;

    if (!vm.card) vm.card = {};


    vm.submit = function(next=true){
        let copy = angular.copy(vm.card);

        // Add review date
        if (!copy.nextReview) {
            console.log('adding next review');
            copy.nextReview = new Date();
        }
        // remove _id
        delete copy._id;
        // Add owner and username
        copy.owner = Meteor.userId();
        copy.username = Meteor.user().profile.name;
        console.log(Meteor.user());

        Cards.upsert({_id: vm.card._id}, {$set: copy});
    };

}

