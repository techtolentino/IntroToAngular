var app = angular.module('app', ['ngRoute']).config(function($routeProvider){
		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		});

		$routeProvider.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		});

		$routeProvider.otherwise( {redirectTo : '/login'});
	});

app.controller('LoginController', function($scope, $location){
	$scope.credentials = { username: "", password: ""};

	$scope.login = function() {
		if($scope.credentials.username === 'randy') {
			$location.path('/home');
		}
	};
});

app.controller('HomeController', function(){
	
});