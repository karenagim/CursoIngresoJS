function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado

	while(contador <5 )
	{
		numeroIngresado= prompt("ingresa el valor");
		numeroIngresado= parseInt(numeroIngresado);
		contador = contador+1
		acumulador= acumulador + numeroIngresado

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN