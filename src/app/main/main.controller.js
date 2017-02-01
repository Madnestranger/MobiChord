export class MainController {
  constructor($scope, db) {
    'ngInject';
    this.db = db;
    this.$scope = $scope;
    this.items = this.db.getItem('items');
    if (!this.items) {
      this.items = [
        {
          name: 'iPhone 5',
          id: 2,
          amount: 5,
          price: 500,
          shipping: 11.99,
          details: [
            '4-inch display',
            'A7 chip',
            'Gorilla Glass',
            'Amazing Camera',
            'Autofocus'
          ],
          image: 'http://abali.ru/wp-content/uploads/2012/09/iphone5.png'
        },
        {
          name: 'iPhone 6s',
          id: 3,
          amount: 7,
          price: 600,
          shipping: 15.99,
          details: [
            '4.7-inch display',
            'A9 chip',
            'Gorilla Glass',
            'Amazing Camera',
            'Autofocus'
          ],
          image: 'http://gooosha.ru/wp-content/uploads/2015/08/Apple-iPhone-6-2.png'
        },
        {
          name: 'iPhone 6s Plus',
          id: 4,
          amount: 2,
          price: 1000,
          shipping: 20.99,
          details: [
            '5.5-inch display',
            'A10 chip',
            'Gorilla Glass',
            'Amazing Camera',
            'Autofocus'
          ],
          image: 'http://i1.storeland.net/1/5224/52234491/075a3e/6splus2-png.png'
        }
      ];
      this.db.setItem('items', this.items);
    }
  }

  isInCart(id) {
    if (this.$scope.$root.userCart.length > 0) {
      return this.$scope.$root.userCart.find(x => x == id) ? true : false;
    }
    return false;
  }

  removeFromCart(id) {
    this.$scope.$root.userCart.splice(this.$scope.$root.userCart.indexOf(id), 1);
    this.db.setItem('cart', this.$scope.$root.userCart);
  }

  addToCart(id) {
    if (!this.$scope.$root.myCart) {
      this.$scope.$root.myCart = [];
    }
    this.$scope.$root.myCart.push(id);
    var userCart = this.db.getItem('cart');
    if (!userCart) {
      this.db.setItem('cart', [id]);
    } else {
      userCart.push(id);
      this.db.setItem('cart', userCart);
      this.$scope.$root.userCart.push(id);
    }
  }

}
