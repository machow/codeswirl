// modified from...
// https://docs.angularjs.org/api/ng/type/ngModel.NgModelController#custom-control-example

angular.module('app')
       .directive('pbContenteditable', pbContenteditable);

function pbContenteditable() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, ele, attr, ngModel){
            attr.$set('contenteditable', "");
            if (!ngModel) return;

            //ngModel.$render = function(){
            //    ele.html($sce.getTrustedHTML(ngModel.$viewValue || ''));
            //};

            ele.on('blur keydown change', function(){
                scope.$evalAsync(read);
            });
            read();

            function read(){
                var html = ele.html();
                
                ngModel.$setViewValue(html);
            }

        }
    }
}
