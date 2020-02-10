/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultadoSuma;

	primerPrecio  = parseInt(document.getElementById('PrecioUno').value);
	segundoPrecio = parseInt(document.getElementById('PrecioDos').value);
	tercerPrecio  = parseInt(document.getElementById('PrecioTres').value);

	resultadoSuma = primerPrecio + segundoPrecio + tercerPrecio

	console.log (resultadoSuma);
	alert(resultadoSuma);
}

function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultadoSuma;

	primerPrecio  = parseInt(document.getElementById('PrecioUno').value);
	segundoPrecio = parseInt(document.getElementById('PrecioDos').value);
	tercerPrecio  = parseInt(document.getElementById('PrecioTres').value);

	resultadoPromedio = (primerPrecio + segundoPrecio + tercerPrecio)/3
	console.log (resultadoPromedio);
	alert(resultadoPromedio);

}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumatoriaPrecios;

	primerPrecio  = parseInt(document.getElementById('PrecioUno').value);
	segundoPrecio = parseInt(document.getElementById('PrecioDos').value);
	tercerPrecio  = parseInt(document.getElementById('PrecioTres').value);

	sumatoriaPrecios = primerPrecio + segundoPrecio + tercerPrecio;
	alert (sumatoriaPrecios + (sumatoriaPrecios*21/100) )


}