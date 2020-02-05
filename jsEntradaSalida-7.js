/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero; 
	var segundoNumero;
	var resultadoDeLaSuma;

	primerNumero  = parseInt(document.getElementById('numeroUno').value);
	segundoNumero = parseInt(document.getElementById('numeroDos').value);

	resultado = primerNumero + segundoNumero ;
	console.log (resultado);

}

function restar()
{
	var primerNumero; 
	var segundoNumero;
	var resultadoDeLaResta;

	primerNumero  = parseInt (document.getElementById('numeroUno').value);
	segundoNumero = parseInt (document.getElementById('numeroDos').value);

	resultadoDeLaResta = primerNumero - segundoNumero ;
	console.log (resultadoDeLaResta);
}

function multiplicar()
{ 
	var primerNumero; 
	var segundoNumero;
	var resultadoDeLaMultiplicacion;

	primerNumero  = parseInt (document.getElementById('numeroUno').value);
	segundoNumero = parseInt (document.getElementById('numeroDos').value);

	resultadoDeLaMultiplicacion = primerNumero * segundoNumero ;
	console.log (resultadoDeLaMultiplicacion),
}

function dividir()
{
	var primerNumero; 
	var segundoNumero;
	var resultadoDeLaDivision; 

	primerNumero  = parseInt (document.getElementById('numeroUno').value);
	segundoNumero = parseInt (document.getElementById('numeroDos').value);

	resultadoDeLaDivision = primerNumero / segundoNumero ;
	console.log (resultadoDeLaDivision)
}

