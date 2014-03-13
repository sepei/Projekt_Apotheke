var mCon = angular.module('MainController', []);

mCon.controller ( 'MainAppCtrl', function ( $scope , $http ) {
	//alert("Controller Alert");
	
	console.log($scope);
	
	$scope.status = "Nicht verbunden";
	
	$scope.doIT = function (a) {
		//alert(a);
		toggleO('a'+a)
	};
	
	$scope.onClick = function () {
		$scope.status = "verbunden";
        $scope.setOverlay = true;
		
		$http({
  			method: 'JSONP',
  			url: 'http://23.249.160.7:8080/Serveranwendung/index.jsp?anz=' + $("#search").val() + '&callback=JSON_CALLBACK'
			}).success(function(data, status, headers, config) {
				$scope.medi = data;
			}).error(function(data, status, headers, config) {
			});
		
	}
});