function mostrar()
{
	var alturaJugador;
	var sexoJugador;

	alturaJugador= prompt("Ingrese la altura del Jugador, hasta 250cm");
	alturaJugador= parseInt(alturaJugador)

	sexoJugador = prompt(" Ingrese el sexo del jugador f o m");
	
	while(isNaN(alturaJugador) && alturaJugador>0 || alturaJugador>250)
	{
		alturaJugador= prompt("Ingrese la altura del Jugador, hasta 250cm");
		alturaJugador= parseInt(alturaJugador);
	}
	while(!isNaN(sexoJugador) || sexoJugador !="f" && sexoJugador!="m")
	{
		sexoJugador= prompt("Ingrese el sexo del jugador f o m");
		sexoJugador= parseInt(sexoJugador);
	}


}
