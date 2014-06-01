var cartangApp = angular.module('cartangApp', []);

cartangApp.controller('ProductListCtrl', ['$scope', '$http', 
  function ProductListCtrl($scope, $http) {
    $http.get('data/products.json').success(function(data) {
      $scope.products = data;
    });

    $scope.orderProp = 'price';
}]);