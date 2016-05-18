angular.module("app", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/definiciones", {
				controller: "defController",
				templateUrl: "definiciones.html"
			})
			.when("/", {
				controller: "",
				templateUrl: "home.html"
			})
	});