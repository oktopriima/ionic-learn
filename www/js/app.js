// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})

	.state('tab.home', {
		url: '/home',
		views: {
			'tab-home': {
				templateUrl: 'templates/tab-home.html',
				controller: 'HomeCtrl'
			}
		}
	})

	.state('tab.chats', {
			url: '/chats',
			views: {
				'tab-chats': {
					templateUrl: 'templates/tab-chats.html',
					controller: 'ChatsCtrl'
				}
			}
		})
		.state('tab.chat-detail', {
			url: '/chats/:chatId',
			views: {
				'tab-chats': {
					templateUrl: 'templates/chat-detail.html',
					controller: 'ChatDetailCtrl'
				}
			}
		})

	.state('tab.news', {
		url: '/news',
		views: {
			'tab-news': {
				templateUrl: 'templates/tab-news.html',
				controller: 'NewsCtrl'
			}
		}
	})
	.state('tab.menu', {
		url: '/menu',
		views: {
			'tab-menu': {
				templateUrl: 'templates/tab-menu.html',
				controller: 'MenuCtrl'
			}
		}
	})
	.state('tab.menu-detail', {
			url: '/menu/:menuID',
			views: {
				'tab-menu': {
					templateUrl: 'templates/menu-detail.html',
					controller: 'MenuDetailCtrl'
				}
			}
		});
	$urlRouterProvider.otherwise('/tab/home');
});
