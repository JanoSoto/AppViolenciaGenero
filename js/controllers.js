angular.module("app")
	.controller("viasDenuncia", function ($scope, $location, $http){
		$scope.denuncia_show = 'nacional';
		$scope.download = function(){
			//$location.url('/download/archivo_prueba.docx');
			$http({method: 'GET', url: 'download/'}).
			  success(function(data, status, headers, config) {
			     var anchor = angular.element('<a/>');
			     anchor.attr({
			         href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
			         target: '_blank',
			         download: 'archivo_prueba.docx'
			     })[0].click();

			  }).
			  error(function(data, status, headers, config) {
			    // handle error
			  });
		}
	})
	.controller("defController", function ($scope) {	
		$scope.definiciones = [
			{
				concepto: "Género",
				def: "El género es una construcción social, histórica, política y cultural que instaura un orden social basado en un sistema de poder que condiciona a las personas a vivir de una manera específica de acuerdo a su sexo. Concepto acordado por el Punto Focal de Género y la Red en temáticas de Género Universidad de Santiago de Chile. 2015."

			},
			{
				concepto: "Violencia contra las mujeres",
				def: "“todo acto de violencia basado en la pertenencia al sexo femenino que tenga o pueda tener como resultado un daño o sufrimiento físico, sexual o psicológico para la mujer, así como las amenazas de tales actos, la coacción o la privación arbitraria de la libertad, tanto si se producen en la vida pública como en la vida privada”. Declaración sobre la Eliminación de la Violencia contra la Mujer. En Chile existe una alta prevalencia de Violencia contra las mujeres se habla de más de 33%, lo quiere decir que 1 de cada 3 mujeres ha sido víctima de alguna expresión de violencia por ser mujer."
			},
			{
				concepto: "Violencia de Género",
				def: "Esta violencia ocurre debido a desigualdades estructurales que ubican a las mujeres en el lugar de las subordinadas, aunque también bajo este término cabrían aquellas violencias que afectan a los hombres situados también en posiciones de subordinación por razones de género. Cepal."
			},
			{
				concepto: "Violencia Psicológica",
				def: "Cuando se intenta controlar mediante amenazas, humillaciones y presión emocional con el propósito de hacerla sentir insegura y sin control sobre su vida y decisiones."
			},
			{
				concepto: "Violencia Sexual",
				def: "Cuando se es obligada/o, mediante la fuerza física o amenazas psicológicas, a tener relaciones sexuales o a realizar actos sexuales que le resultan humillantes o degradantes."
			},
			{
				concepto: "Violencia Económica",
				def: "Cuando se intenta controlar a una persona a través de la entrega del dinero necesario para su manutención personal y/o de las hijas o hijos, o de otras personas que integran la familia. También constituye violencia económica cuando se apropian del dinero que ganó la mujer con su trabajo."
			},
			{
				concepto: "Misoginia",
				def: "Es una forma de sexismo que implica odio, repudio y desprecio por las mujeres. (Mujeres y Educación Social: teoría y praxis para la intervención socio-educativa. López Barajas-Zayas, E. (dir.), Bejarano Franco, M. & Salido López, J.V. (Coords.). (2012). Madrid: UNED)"
			},
			{
				concepto: "Acoso Sexual",
				def: "Cualquier comportamiento -verbal, no verbal o físico- no deseado, de índole sexual, que tenga por objeto violar la dignidad de una persona, en particular si crea un entorno intimidatorio, hostil, degradante, humillante u ofensivo."
			},
			{
				concepto: "Abuso sexual",
				def: "Aprovechamiento excesivo e inadecuado de carácter sexual de una persona sobre otra. Maltrato físico y/o verbal sobre una persona adulta o menor con el fin de obtener una satisfacción sexual. Se diferencia de la explotación sexual comercial en que no se efectúa ninguna transacción económica."
			},
			{
				concepto: "Acoso callejero",
				def: "Son prácticas de connotación sexual ejercidas por una persona desconocida, en espacios públicos como la calle, el transporte o espacios semi públicos (mall, universidad, plazas, etc.); que suelen generar malestar en la víctima. Estas acciones son unidireccionales, es decir, no son consentidas por la víctima y quien acosa no tiene interés en entablar una comunicación real con la persona agredida."
			},
			{
				concepto: "Feminicidio",
				def: "El acto de asesinar a una mujer, sólo por el hecho de su pertenencia al sexo femenino. Marcela Lagarde. El feminicidio comprende toda una progresión de actos violentos que van desde el maltrato emocional, psicológico, los golpes, los insultos, la tortura, la violación, la prostitución, el acoso sexual, el abuso infantil, el infanticidio de niñas, las mutilaciones genitales, la violencia doméstica y toda política que derive en la muerte de las mujeres, tolerada por el Estado. Julia Monárrez. En Chile de acuerdo al registro nacional:  2013 y 2014 hubo 40 femicidios cada año, en 2015 hubo 45."
			},
			{
				concepto: "Abuso emocional/verbal",
				def: "Cualquier comportamiento encaminado a controlar y subyugar a otro ser humano mediante el recurso al miedo y la humillación y valiéndose de ataques físicos o verbales. (Susan Forward)"
			},
			{
				concepto: "Lenguaje sexista",
				def: "Es aquél que nombra la realidad subsumiendo lo femenino en lo masculino e integrando a las mujeres en el mismo, imposibilitándoles de esa manera que nombren el mundo desde su género."
			}
		]		
	});