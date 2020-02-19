function mostrar()
{
	
	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero <0 || numero>10)//siempre poner la negativa de lo que busco-
	{
		numero= prompt("ingrese un número entre 0 y 10.");
		alert("numero invalido");
	}
	document.getElementById('Numero').value = numero;
}//FIN DE LA FUNCIÓN

/*		EXPLICACION DEL isNaN
	var numero = prompt("ingrese un número entre 0 y 10.");
	var numero = parseInt(numero)
	no sirve esa variable es de ejemplo del isNan--var valorDeVerdad = isNaN(numero)
	
	
	
	while(isNaN(numero) || numero <0 || numero>10)//siempre poner la negativa de lo que busco-
	{
		numero= prompt("ingrese un número VALIDO entre 0 y 10.");
		
		var numero = parseInt(numero)
	}
	document.getElementById('Numero').value = numero;
