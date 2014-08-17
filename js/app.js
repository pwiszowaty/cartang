var cartangApp = angular.module('cartangApp', [
  'ngRoute',
  'cartangControllers'
]);

cartangApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/product-list.html',
        controller: 'ProductListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'partials/product-details.html',
        controller: 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);