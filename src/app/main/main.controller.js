export class MainController {
  constructor($scope, db) {
    'ngInject';
    this.db = db;
    this.$scope = $scope;
    this.opened = false;
    this.filterValue = '';
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
          image: 'http://abali.ru/wp-content/uploads/2012/09/iphone5.png',
          category: 'iPhone'
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
          image: 'http://gooosha.ru/wp-content/uploads/2015/08/Apple-iPhone-6-2.png',
          category: 'iPhone'
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
          image: 'http://i1.storeland.net/1/5224/52234491/075a3e/6splus2-png.png',
          category: 'iPhone'
        },
        {
          name: 'Samsung Galaxy S7',
          id: 5,
          amount: 12,
          price: 800,
          shipping: 14.99,
          details: [
            '5.1-inch display',
            'Android 6.0',
            'Gorilla Glass',
            'Amazing Camera',
            'Autofocus'
          ],
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Samsung_Galaxy_S7_and_S7_Edge.png',
          category: 'Samsung'
        },
        {
          name: 'Sony Xperia XA',
          id: 6,
          amount: 32,
          price: 700,
          shipping: 10.99,
          details: [
            '5-inch display',
            'Android 6.0',
            'Gorilla Glass',
            'Amazing Camera',
            'Autofocus'
          ],
          image: 'http://www.spark.co.nz/content/dam/tnz/mobile/phones/Sony/sony-zoom/sony-xperia-xa-black-front-zoom.png',
          category: 'Sony'
        }
      ];
      this.db.setItem('items', this.items);
    }
    this.visibleItems = angular.copy(this.items);
  }

  isInCart(id) {
    if (this.$scope.$root.userCart.length > 0) {
      return this.$scope.$root.userCart.find(x => x == id) ? true : false;
    }
    return false;
  }

  sortPhones(category) {
    this.filterValue = category;
    this.visibleItems = [];
    angular.forEach(this.items, item => {
      if (item.category == category) {
        this.visibleItems.push(item);
      }
    });
  }

  resetFilter() {
    this.visibleItems = angular.copy(this.items);
    this.filterValue = '';
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
