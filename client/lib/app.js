angular.module('app', ['angular-meteor'])
       .run(function($rootScope, DeckService) { DeckService.queryCards(); $rootScope.DeckService = DeckService});


function onReady() {
    angular.bootstrap(document, ['app']);
}

angular.element(document).ready(onReady);
