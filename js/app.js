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

app.controller('HomeController', function($scope){
	$scope.title = "Projects";
	$scope.message = "Hover over a project to view";
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