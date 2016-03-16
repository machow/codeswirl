angular.module('app')
       .directive('pbCard', pbCard);

function pbCard() {
    return {
        restrict: 'E',
        templateUrl: 'client/card/card.html',
        scope: {
            menuOpen: '=?',
            focus: '=',
            mode: '=',
            deck: '='
        },
        controller: CardController,
        controllerAs: 'vm',
        bindToController: true,
    }
}

function CardController($scope, $mdMedia) {
    var vm = this;

    $scope.$mdMedia = $mdMedia;

    vm.menuOpen = true; // angular.isDefined(vm.menuOpen) ? vm.menuOpen : false;
    vm.menuFAB = false;
    vm.mode = angular.isDefined(vm.mode) ? vm.mode : 'review';
    vm.toggleMenu = () => vm.menuOpen = !vm.menuOpen;
    vm.getMode = (mode) => mode === null ?  vm.mode : mode === vm.mode;
    vm.setMode = (mode) => vm.mode = mode;

    // TODO: eventually move to Constant or UI Service
    vm.menuButtons = [
        { name: 'create', icon: 'add_circle_outline' },
        { name: 'edit', icon: 'edit' },
        { name: 'review', icon: 'school' }
    ];
}
