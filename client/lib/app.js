angular.module('app', ['angular-meteor', 'ngMaterial', 'vAccordion', 'accounts.ui'])

function onReady() {
    angular.bootstrap(document, ['app']);
}

angular.element(document).ready(onReady);
