// loads JsDiff

angular.module('app')
       .controller('CardController', CardController);

function CardController($scope){
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
        vm.parts = JsDiff.diffWords(vm.card.back, answer);
    };

    vm.setDiffTool = function(toolname) {
        if (JsDiff[toolname]) {
            vm.diffTool = toolname;
            vm.diffBack(vm.answer);
        }
        else console.log(`no tool named ${toolname}`);

    };


    $scope.$watch('vm.answer', vm.diffBack)
}
