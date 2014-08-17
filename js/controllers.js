var cartangControllers = angular.module('cartangControllers', []);

cartangControllers.controller('ProductListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/products.json').success(function(data) {
      $scope.products = data;
    });

    $scope.orderProp = 'price';
  }]);

cartangControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.productId = $routeParams.productId;
  }]);