/*2. FERRETE CONSTRUCCION

	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno
 rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno
	var anchoTerreno
	var resultadoCantidadAlambre

	largoTerreno = document.getElementById('Largo').value;
	anchoTerreno = document.getElementById('Ancho').value;
	resultadoCantidadAlambre= ((largoTerreno *2) + (anchoTerreno*2))*3 ;

	alert( resultadoCantidadAlambre);
}

function Circulo () 
{
	var radioTerreno;
	var resultadoCantidadAlambreCirculo;

	radioTerreno = document.getElementById('Radio').value;

	resultadoCantidadAlambreCirculo = ( Math.PI * radioTerreno) *3;			// Math.PI es el valor de PI completo
	resultadoCantidadAlambreCirculo = resultadoCantidadAlambreCirculo.toFixed(2) // uso toFixed() para achicar la cantidad de decimales y la reduzco a 2.

	alert(resultadoCantidadAlambreCirculo);

}


/*C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas 
se necesitan de cada uno para las medidas que nos ingresen.
*/

function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var areaTerreno;
	var cantidadCal;
	var cantidadCemento;
	
	largoTerreno = document.getElementById('Largo').value;
	anchoTerreno = document.getElementById('Ancho').value;
	areaTerreno  = largoTerreno * anchoTerreno
	cantidadCal  = areaTerreno*3
	cantidadCemento = areaTerreno*2

	//Maneras de mostrar el msj -sin prompt
	alert(" Se necesita:" + cantidadCal + " bolsas de cal " + cantidadCemento + " bolsas de cemento ")
	console.log(" Se necesita:" + cantidadCal + " bolsas de cal " + cantidadCemento + " bolsas de cemento ")

}