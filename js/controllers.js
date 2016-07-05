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
				concepto: "Abuso Emocional / Verbal",
				def: "Cualquier comportamiento encaminado a controlar y subyugar a otro ser humano mediante el recurso al miedo y la humillación y valiéndose de ataques físicos o verbales. (Susan Forward)"
			},
			{
				concepto: "Abuso Sexual",
				def: "Aprovechamiento excesivo e inadecuado de carácter sexual de una persona sobre otra. Maltrato físico y/o verbal sobre una persona adulta o menor con el fin de obtener una satisfacción sexual. Se diferencia de la explotación sexual comercial en que no se efectúa ninguna transacción económica."
			},
			{
				concepto: "Acción Positiva o Discriminación Positiva",
				def: "Implantación de medidas temporales que, con el fin de establecer la igualdad de oportunidades, permiten mentalizar a las personas y corregir aquellas situaciones que son el resultado  de usos o de sistemas sociales discriminatorios. (Raquel Osborne)"
			},
			{
				concepto: "Acoso Sexual",
				def: "Cualquier comportamiento -verbal, no verbal o físico- no deseado, de índole sexual, que tenga por objeto violar la dignidad de una persona, en particular si crea un entorno intimidatorio, hostil, degradante, humillante u ofensivo. <br>La definición común de “acoso sexual” quedará incluida en una directiva comunitaria sobre la igualdad de trato entre hombres y mujeres en el acceso al empleo. (Parlamento Europeo)"
			},
			{
				concepto: "Estereotipos Sexuales",
				def: "Construcción cultural que supone una visión determinada sobre cada uno de los sexos, asignándoles de forma desigual y discriminadora distintos papeles, actitudes y características. Los estereotipos crean arquetipos, a través de imágenes que cumplen el papel de proponer modelos rígidos, en los que hay que encajar para ser socialmente aceptados. En definitiva, los estereotipos sexuales fijan un modelo de ser hombre y un modelo de ser mujer validados socialmente y que, a partir de esa visión tópica construida, establecen un sistema desigual de relaciones entre ambos sexos y de cada uno de ellos con el mundo.  (VVAA-CPR de Gijón, Materiales para la observación y el análisis del sexismo en el ámbito escolar, 2002)"
			},
			{
				concepto: "Lenguaje Sexista",
				def: "Es aquél que nombra la realidad subsumiendo lo femenino en lo masculino e integrando a las mujeres en el mismo, imposibilitándoles de esa manera que  nombren el mundo desde su género."
			},
			{
				concepto: "Roles Establecidos en Función del Sexo",
				def: "Pautas de acción y comportamiento asignadas a mujeres y a hombres,  respectivamente, e inculcadas y perpetuadas según los criterios vigentes en la sociedad patriarcal. (Ángeles Álvarez, Guía para mujeres maltratadas)"
			},
			{
				concepto: "Violencia de Género",
				def: "Término acuñado en la “Conferencia Mundial sobre la mujer” en Pekín (1995) y que se define como “todo acto de violencia sexista que tiene como resultado posible o real un daño de naturaleza física, sexual, psicológica, incluyendo las amenazas, la coerción o la privación arbitraria de libertad para las mujeres, ya se produzca en la vida pública o en la privada”. Está considerado como el crimen encubierto más frecuente del mundo. (Asamblea General de Naciones Unidas)"
			},
			{
				concepto: "Violencia contra las mujeres",
				def: "Las mujeres, sólo por el hecho de ser mujeres, viven diversas formas de violencia de parte de sus parejas o de su entorno que van desde el control hasta la agresión física. Esto se justifica porque en muchas culturas, incluida la chilena, todavía se cree que los hombres tienen derecho a controlar la libertad y la vida de las mujeres. <br>La violencia afecta a mujeres de cualquier edad, condición económica y social y de cualquier religión. Puede ocurrir al interior de la pareja, en el trabajo, en los lugares de estudio y en los espacios públicos."
			},
			{
				concepto: "Femicidio o Feminicidio",
				def: "Es el homicidio cometido contra la mujer que es o ha sido cónyuge o conviviente del autor del crimen. En Chile es castigado con condenas que pueden ir de quince años y un día de cárcel hasta el presidio perpetuo calificado."
			},
			{
				concepto: "Violencia psicológica",
				def: "Cuando se intenta controlar a una mujer mediante amenazas, humillaciones y presión emocional con el propósito de hacerla sentir insegura y sin control sobre su vida y decisiones."
			},
			{
				concepto: "Violencia sexual",
				def: "Cuando una mujer es obligada, mediante la fuerza física o amenazas sicológicas, a tener  relaciones sexuales o a realizar actos sexuales que le resultan humillantes o degradantes."
			},
			{
				concepto: "Violencia económica",
				def: "Cuando se intenta controlar a la mujer a través de la entrega del dinero necesario para su manutención personal y/o de las hijas o hijos, o de otras personas que integran la familia. También constituye violencia económica cuando se apropian del dinero que ganó la mujer con su trabajo."
			},
			{
				concepto: "Acoso sexual",
				def: "Cuando a una mujer se le exigen favores sexuales a cambio de su permanencia en el trabajo o su condiciona su ascenso o cualquier mejoría laboral. También ocurre en los lugares de estudio, cuando se condicionan notas o pasar de curso a cambio de acceder a las peticiones de un profesor o director. En este tema buscaría definiciones que incluyan formas más sutiles de acoso, en que se destaque que la situación de desigualdad de poder pone a la mujer en situación de riesgo o de percepción de que no puede decir que no; si encuentro algo lo mando (María Inés). La misma ley es más amplia en su definición."
			},
			{
				concepto: "Hostigamiento y/o agresión en los espacios públicos",
				def: "Casi todas las mujeres, de distintas edades y condición social, han sido molestadas y/o agredidas en la calle, en el transporte público e incluso en su trabajo. Con el pretexto de un 'piropo'  o que la mujer sería atractiva se les dicen groserías, o se justifican 'agarrones' y manoseos."
			}
		]
	});