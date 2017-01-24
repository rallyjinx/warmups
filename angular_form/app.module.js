(function() {
  'use strict';

  angular.module('app', [])
    .component('warmup', {
      controller: function() { //can't use () => {} here???
        const vm = this;
        vm.$onInit = () => {
          vm.users = [];
        }

        vm.register = () => {
           vm.users.push(vm.user);
           delete vm.user;
        }
      }, //end controller
      templateUrl: "./warmup.html"
    }) //end component
    // .directive('matchField', () => {
    //   //components are just special directives
    //   //directives returns an object
    //   //element, attribute on element, [class, comment]
    //   return {
    //     require: 'ngModel',
    //     scope: {otherField: '=matchField'} // = two-way binding
    //     restrict: 'A', //directive only going to be used as an attribute on an element
    //     link: function(scope, element, attributes, ngModel){
    //       // console.log('here', scope, element, attributes, ngModel);
    //       //check validation
    //       ngModel.$validators.match = (modelValue) => { //modelValue = thing in this field
    //         return (modelValue === scope.otherField)
    //       }
    //       //watch value of other field
    //
    //       scope.$watch('otherField', () => { //watch is watching the viewValue
    //         ngModel.$validate()
    //       });
    //     }
    //   };
    // })
    // .directive('specialPassword', () => {
    //   return {
    //     require: 'ngModel',
    //     restrict: 'A',
    //     link: (scope, element, attributes, ngModel) => {
    //       ngModel.$validators.special = (fieldValue) => {
    //         if (fieldValue === undefined) {
    //           return false;
    //         }
    //         return !!(fieldValue.match(/\d/) && fieldValue.match(/[!#%@]/)
    //         // !! -> actually true or actually false
    //       }
    //     }
    //   }
    // })
})();
