var header_data = {
		"Content-Type" : "application/x-www-form-urlencoded"
	};

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();

	console.log($scope.chats);

	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $http) {
	$http({
		method : 'POST',
		url : 'http://localhost/FOR-GITHUB/yiibasic/web/api/news/detail',
		headers : header_data,
		data : {
			token : '2AV04YqpJvVgazlUEEV9LOBfsawxyp4OXTfsk4d9',
			id : "13"
		}
	}).then(function(data) {
		console.log(data);
	})
	$scope.settings = {
		enableFriends: true
	};
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
