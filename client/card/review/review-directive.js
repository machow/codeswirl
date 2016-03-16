angular.module('app')
       .directive('pbCardReview', pbCardReview);

function pbCardReview() {
    return {
        restrict: 'E',
        templateUrl: 'client/card/review/review.html',
        scope: {
            card: '=',
            deck: '='
        },
        controller: 'CardReviewController',
        controllerAs: 'vm',
        bindToController: true,
    }
}
