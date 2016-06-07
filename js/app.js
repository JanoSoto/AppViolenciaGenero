angular.module("app", ["ngRoute", "ui.materialize"])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				controller: "",
				templateUrl: "home.html"
			})
			.when("/definiciones", {
				controller: "defController",
				templateUrl: "definiciones.html"
			})
			.when("/marco_legal", {
				controller: "",
				templateUrl: "marco_legal.html"
			})
			.when("/vias_denuncia", {
				controller: "",
				templateUrl: "vias_denuncia.html"
			})
	});