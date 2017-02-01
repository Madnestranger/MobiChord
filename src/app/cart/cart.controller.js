export class CartController {
  constructor($scope, db) {
    'ngInject';
    this.db = db;
    this.$scope = $scope;
    this.cartIds = db.getItem('cart');
    this.cartItems = db.getItem('items');
    this.items = [];
    angular.forEach(this.cartIds, id => {
      this.items.push(this.cartItems.find(x => x.id == id));
    });
  }

  submitOrder() {
    this.order = false;
    this.thanks = true;
    this.$scope.$root.userCart = [];
    this.items = [];
    this.db.setItem('cart', this.$scope.$root.userCart);
  }

  removeFromCart(id, index) {
    this.items.splice(index, 1);
    this.$scope.$root.userCart.splice(this.$scope.$root.userCart.indexOf(id), 1);
    this.db.setItem('cart', this.$scope.$root.userCart);
  }
}
