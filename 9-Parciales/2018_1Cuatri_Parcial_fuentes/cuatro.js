function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno= prompt("Ingrese primer valor");
	numeroDos= prompt("Ingrese segundo valor");


	if(numeroUno == numeroDos)
	{
		//NUMERO UNO -- IGUALES--- A NUMERO DOS
		resultado= numeroUno + numeroDos;
		alert(resultado);
	}
	else{
		if(numeroUno> numeroDos)
		{
			//NUMERO UNO -- MAYOR--- A NUMERO DOS
			resultado= parseInt(numeroUno) - parseInt(numeroDos);
			alert(resultado);
		}
		else
		{			//NUMERO UNO--- MENOR --A NUMERO DOS
			resultado=  parseInt(numeroUno) + parseInt(numeroDos);
			if(resultado>10)
			{
				alert("la suma es:"+ resultado +" y supero el 10")
			}
		}
	}
}
