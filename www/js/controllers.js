var header_data = {
		"Content-Type" : "application/x-www-form-urlencoded"
	};
var base_url = 'http://android.dev/android-rest-api/';

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
	$http({
		method : 'POST',
		url : base_url + 'api-menu',
		headers : header_data
	}).then(function(result) {
		$scope.menu = result.data;
	})
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
