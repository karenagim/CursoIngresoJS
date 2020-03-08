/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/



function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoDePersonas; //ejercicio2
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio; //4
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQr;
	var contadorTarjeta;
	var contadorEfete;
	var formaDePagoMasUtilizada;

	respuesta= "si"
	contador=0;	//e2
	acumulador=0; //e2

	contadorQr =0;
	contadorTarjeta=0;
	contadorEfete=0;

	while(respuesta=="si")
	{
		nombre= prompt("ingrese el nombre Del Huesped");
		do
		{
			nombre=prompt("ingrese el nombre Del Huesped");
		}while(! isNaN(nombre));

		cantidadDePersonas= prompt("ingrese la cantidad de Huespedes");
		while(isNaN(cantidadDePersonas)||cantidadDePersonas<1)
		{
			cantidadDePersonas= prompt("ingrese la cantidad de Huespedes");
		}
		/*VARIANTE con DO While - se ahorra una linea de codigo
		do
		{
			cantidadDePersonas= prompt("ingrese la cantidad de Huespedes");
		}
		while(isNaN(cantidadDePersonas)||cantidadDePersonas<1)
		
		*/
		cantidadDeDias= prompt("ingrese la cantidad de dias de Estadia");
		cantidadDeDias= parseInt(cantidadDeDias);
		while(isNaN(cantidadDeDias) || cantidadDeDias<1)
		{
			cantidadDeDias= prompt("ingrese la cantidad de dias de Estadia");
			cantidadDeDias= parseInt(cantidadDeDias);

		}
		/*		VARIANTE CON DO WHILE
		do
		{
			cantidadDeDias= prompt("ingrese la cantidad de dias de Estadia");
			cantidadDeDias= parseInt(cantidadDeDias);
		} while(isNaN(cantidadDeDias) || cantidadDeDias>1);
		
		*/
		formaDePago= prompt("ingrese la forma De Pago");
		while(!isNaN(formaDePago) || formaDePago != "qr" && formaDePago !="efectivo"&& formaDePago!="tarjeta")
		{
			formaDePago= prompt("ingrese formaDePago qr , efectivo, tarjeta");
		}
		//2 cantidad de personas que se quedaron mas dias
		//MAXIMO
		if(contador ==0) //primera vez que pasa 
		{
			maximoDePersonas= cantidadDePersonas;
			maximoDePersonasNombre= nombre;
		}
		else
		{
			if(maximoDePersonas< cantidadDePersonas)
			{
				maximoDePersonas= cantidadDePersonas;
				maximoDePersonasNombre= nombre;
			}
		}
		/* VERSION OPTIMIZADA
		if(contador ==0||maximoDePersonas< cantidadDePersonas ) //primera vez que pasa 
		{
			maximoDePersonas= cantidadDePersonas;
			maximoDePersonasNombre= nombre;
		}
		*/
		if(contador ==0|| maximoDeDias< cantidadDeDias ) //primera vez que pasa //MAXIMA CANTDAD DE DIAS
		{
			maximoDeDias= cantidadDeDias;
			maximoDePersonasCantidadDePersonas= cantidadDePersonas
		}

		//FORMA DE PAGO MAS UTILIZADA
		switch(formaDePago)//EN VEZ DE USAR IF ==
		{
				case "efectivo":
					contadorEfete++;
					break;
				case " tarjeta":
					contadorTarjeta++;
					break;
				default:
					contadorQr++;
					break;
		}
		acumulador= acumulador+cantidadDeDias;
		contador++
		respuesta= prompt("desea continuar");
	


	}//termina el WHILE

	if(contadorEfete> contadorTarjeta)
	{
		if(contadorEfete>contadorQr)
		{
			formaDePagoMasUtilizada= "efete";
		}//INCOMPLETO
	}

	//FORMA OPTIMIZADA
	if(contadorEfete ==contadorTarjeta && contadorEfete==contadorQr)
	{
		formaDePagoMasUtilizada= "ninguna todas se utilizaron";
	}
	else{
		if(contadorEfete> contadorTarjeta && contadorEfete>contadorQr)
		{
			formaDePagoMasUtilizada= "efete";
		}
			else
			{
				if(contadorQr> contadorTarjeta )
				{
					formaDePagoMasUtilizada= "QR";
				}
				else
				{
					formaDePagoMasUtilizada= "tarjeta";
				}
			}
		}
	
	promedio= acumulador/contador
	console.log(maximoDePersonasNombre);//verificacion 
	console.log(maximoDeDiasCantidadDePersonas);//verificacion Respuesta 7
	console.log(formaDePagoMasUtilizada);
	document.write("<br> nombre del huesped con mas invitados" + maximoDePersonasNombre);//para mostrarlos
	document.write("<br> la cantidad" + maximoDeDiasCantidadDePersonas);//para mostrarlos
	document.write("<br> forma de pago mas ultizada" + formaDePagoMasUtilizada);//para mostrarlos
	document.write("<br> promedio" +promedio);//para mostrarlos

}
