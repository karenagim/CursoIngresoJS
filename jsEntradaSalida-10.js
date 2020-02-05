/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*
	var valorImporte ;
	var resultadoSueldoConDescuento ;

	valorImporte = parseInt(document.getElementById('importe').value) ;
	resultadoSueldoConDescuento= valorImporte - (valorImporte*25/100);

	console.log (resultadoSueldoConDescuento);*/

	var valorImporte ;
	var resultadoSueldoConDescuento ;


	valorImporte = parseInt(document.getElementById('importe').value) ;
	resultadoSueldoConDescuento= valorImporte - (valorImporte*25/100);

	prompt(" Tu importe es: " + valorImporte," Tu importe con Descuento " +resultadoSueldoConDescuento);

}

//Medidr dos datos por prompt y mostrar los valores del importe

