/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var valorImporte ;
	var resultadoSueldoConDescuento ;

	valorImporte = parseInt(document.getElementById('importe').value) ;
	resultadoSueldoConDescuento= valorImporte - (valorImporte*25/100);

	console.log (resultadoSueldoConDescuento);
}

