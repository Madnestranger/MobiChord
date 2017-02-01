export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ($scope, db) {
    'ngInject';
    this.$scope = $scope;
    $scope.$root.userCart = db.getItem('cart');
    if (!$scope.$root.userCart) {
      $scope.$root.userCart = [];
    }
  }
}
