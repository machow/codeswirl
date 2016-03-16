angular.module('app', ['angular-meteor', 'ngMaterial', 'vAccordion', 'accounts.ui'])
       .run(function($rootScope, DeckService){ $rootScope.DeckService = DeckService});

function onReady() {
    angular.bootstrap(document, ['app']);
}

angular.element(document).ready(onReady);
