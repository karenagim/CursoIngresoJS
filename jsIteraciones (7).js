function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado= prompt("ingresa el valor");
		numeroIngresado= parseInt(numeroIngresado);
		contador = contador+1;
		acumulador= acumulador + numeroIngresado;
		respuesta = prompt("si para continuar de lo contrario sale");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN
