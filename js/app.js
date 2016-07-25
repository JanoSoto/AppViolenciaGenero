angular.module("app", ["ngRoute", "ui.materialize"])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				controller: "",
				templateUrl: "html/home.html"
			})
			.when("/definiciones", {
				controller: "defController",
				templateUrl: "html/definiciones.html"
			})
			.when("/marco_legal", {
				controller: "",
				templateUrl: "html/marco_legal.html"
			})
			.when("/vias_denuncia", {
				controller: "viasDenuncia",
				templateUrl: "html/vias_denuncia.html"
			})
			.when("/vias_denuncia/:param", {
				controller: "viasDenuncia",
				templateUrl: "html/vias_denuncia.html"
			})
			.when("/quienes_somos", {
				controller: "",
				templateUrl: "html/quienes_somos.html"
			})
			.when("/rsu", {
				controller: "",
				templateUrl: "html/rsu.html"
			})
	});