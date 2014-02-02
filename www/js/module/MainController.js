var mCon = angular.module('MainController', []);

mCon.controller ( 'MainAppCtrl', function ( $scope ) {
	//alert("Controller Alert");
	
	console.log($scope);
	
	$scope.status = "Nicht verbunden";
	
	$scope.onClick = function () {
		$scope.status = "verbunden";
	}
});