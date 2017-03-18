var header_data = {
					"Content-Type" : "application/x-www-form-urlencoded"
				};
var base_url = 'http://android.dev/android-rest-api/';

angular.module('starter.controllers', ['ionic'])

/*.controller('DashCtrl', function($scope,$timeout, $ionicLoading) {
	$ionicLoading.show({
	    content: 'Loading',
	    animation: 'fade-in',
	    showBackdrop: true,
	    maxWidth: 200,
	    showDelay: 0
	});
	$timeout(function () {
	    $ionicLoading.hide();
	}, 3000);
})*/

.controller('HomeCtrl', function($scope, $http){ 
	$scope.init = function(){
		$http({
			method : 'POST',
			url : base_url + 'api-artikel',
			headers : header_data
		}).then(function(result) {
			$scope.dataMenu = result.data;
		})

		$http({
			method : 'POST',
			url : base_url + 'api-slider',
			headers : header_data
		}).then(function(result) {
			$scope.cities = result.data;
		})
		.finally(function() {
       		// Stop the ion-refresher from spinning
       		$scope.$broadcast('scroll.refreshComplete');
     	});
	}
})

.controller('ChatsCtrl', function($scope, Chats) {
		$scope.chats = Chats.all();
		$scope.remove = function(chat) {
				Chats.remove(chat);
		};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
		$scope.chat = Chats.get($stateParams.chatId);
})

.controller('MenuCtrl', function ($scope, $http) {
	$scope.onload = function() {
		$http({
			method : 'POST',
			url : base_url + 'api-menu',
			headers : header_data
		}).then(function(result) {
			$scope.menu = result.data;
		}).finally(function() {
       		// Stop the ion-refresher from spinning
       		$scope.$broadcast('scroll.refreshComplete');
     	});
	}

	$scope.doRefresh = function() {
		
		/*.finally(function() {
       		// Stop the ion-refresher from spinning
       		$scope.$broadcast('scroll.refreshComplete');
     	});*/
	};
})
.controller('MenuDetailCtrl', function($scope, $http, $stateParams) {
		$http({
				method : 'POST',
				url : base_url + 'api-menu/detail/',
				headers : header_data,
				data : {
						'idmenu' : $stateParams.menuID
				}
		}).then(function(result) {
				var data  = result.data;

				for (var i = 0; i < data.length; i++) {
						if (data[i].id === parseInt($stateParams.menuID)) {
								$scope.menu = data[i];
								
								return $scope.menu;
						}
				}
		})
})
.controller('NewsCtrl', function ($scope, $http) {
		$http({
				method : 'POST',
				url : 'http://localhost/FOR-GITHUB/yiibasic/web/api/news/index',
				headers : header_data
		}).then(function(result) {
				$scope.news = result.data;
		});
});
