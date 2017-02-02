/* global malarkey:false, moment:false */
import '../../bower_components/bootstrap/dist/js/bootstrap.min';
import '../../bower_components/angular-ui-mask/dist/mask.min';

import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { CartController } from './cart/cart.controller';
import { LocalStorageService } from './services/localeStorageService';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('testTaskMobiChord', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'ui.mask'])
  .config(routerConfig)
  .service('db', LocalStorageService)
  .controller('MainController', MainController)
  .controller('CartController', CartController)
  .directive('acmeNavbar', NavbarDirective);
