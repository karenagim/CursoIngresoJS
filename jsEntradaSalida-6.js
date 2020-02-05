/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero 
	var segundoNumero
	var resultado

	primerNumero  = parseInt (document.getElementById('numeroUno'));
	segundoNumero = parseInt (document.getElementById('numeroDos'));

	resultado = primerNumero + segundoNumero

	alert( resultado )

}

