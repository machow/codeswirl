angular.module('app')
       .directive('pbResponseMark', pbResponseMark);

function pbResponseMark() {
    return {
        restrict: 'A',
        scope: {
            parts: '='
        },
        link: link    
    }

    function link(scope, ele, attr, ngModel){

        scope.$watch('parts', renderMarks);

        function renderMarks(parts) {
            ele.empty()

            parts.forEach(function(v){
                var span = document.createElement('span');

                var cls;
                if (v.added)        cls = 'part-add';
                else if (v.removed) cls = 'part-del';
                else                cls = 'part-ok';
                
                span.classList.add(cls);
                span.innerHTML = v.value
                ele.append(span);
            });
                
            //console.log(parts);
        }
    }

}



