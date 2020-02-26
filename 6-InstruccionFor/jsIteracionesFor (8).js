function mostrar()
{
	var numeroIngresado;
	var i;
	var bandera;

	bandera=0
	numeroIngresado= prompt("ingrese un numero")
	numeroIngresado= parseInt(numeroIngresado);
//validar
	
	for(i=2; i<numeroIngresado ;i++)
	{
		console.log(i)
		if(numeroIngresado%i ==0)
		{
			bandera=1; //bandera++ -contador
		}
	}
	if(bandera==0)
	{
		alert("es primo el numero" + numeroIngresado)
	}

	//si quiero que vaya del 1-100 hacer otro for +if+if
	//FORMAS OPIMIZADAS
	for(i=2; i<numeroIngresado ;i++)
	{
		console.log(i)
		if(numeroIngresado%i ==0)
		{
			bandera=1; //bandera++ -contador
			break; //prueba al encontrar para.
		}
	}
	if(bandera==0)
	{
		alert("es primo el numero" + numeroIngresado)
	}



}//FIN DE LA FUNCIÓN