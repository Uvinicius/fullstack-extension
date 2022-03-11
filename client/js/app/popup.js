console.log('popup.js loaded');

let myAmazonHistory = angular.module("myamazonhistory", ['ui.router']);

myAmazonHistory.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '../views/home.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: '../views/login.html'
		})

		.state('signup', {
			url: '/signup',
			templateUrl: '../views/signup.html'
		})

	$urlRouterProvider.otherwise('login')
})


myAmazonHistory.controller("PopupCtrl", ['$scope', '$state', function ($scope, $state) {
	$scope.login = function (formData) {
		console.log(formData)
	}

	$scope.signup = function (formData) {

		console.log('Chamado a criação de usuário')
		// chrome.runtime.onMessage({ type: "login", data: FormData },
		// 	function (response) {
		// 		console.log(response)
		// 	}

		// )
	}
}])