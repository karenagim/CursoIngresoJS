function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador = contador +1
		numeroIngresado= prompt("ingresa el valor");
		numeroIngresado= parseInt(numeroIngresado);
		
		if(contador ==1)
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado >maximo)
			{
				maximo = numeroIngresado;
			}
			if(numeroIngresado <minimo)
			{
				minimo= numeroIngresado;
			}
		}


		respuesta = prompt("Ingrese No para salir");
		document.getElementById('maximo').value= maximo;
		document.getElementById('minimo').value=minimo;
	
	}




}//FIN DE LA FUNCIÓN