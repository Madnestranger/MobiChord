export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: 'app/cart/cart.html',
      controller: 'CartController',
      controllerAs: 'cart'
    });

  $urlRouterProvider.otherwise('/');
}
