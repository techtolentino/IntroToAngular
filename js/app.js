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

// Services
app.factory('AuthenticationService', function($location){
	return {
		login: function(credentials){
			if(credentials.username === 'randy') {
				$location.path('/home');
			}
		},
		logout: function(credentials){
			$location.path('/login');
		}
	};
});

app.controller('LoginController', function($scope, $location, AuthenticationService){
	$scope.credentials = { username: "", password: ""};

	$scope.login = function(){
		AuthenticationService.login($scope.credentials);
	};
});

app.controller('HomeController', function($scope, AuthenticationService){
	$scope.title = "Projects";
	$scope.message = "Hover over a project to view";

	$scope.logout = function(){
		AuthenticationService.logout();
	};

});

app.directive('showsMessageWhenHovered', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attributes){
			var originalMessage = scope.message;
			element.bind('mouseover', function(){
				scope.message = attributes.message;
				scope.$apply();
			});
			element.bind('mouseout', function(){
				scope.message = originalMessage;
				scope.$apply();
			});
		}
	};
});