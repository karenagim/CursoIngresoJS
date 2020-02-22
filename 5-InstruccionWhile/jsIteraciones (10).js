/*function mostrar()
{
	//Siempre Iniciarlizarlas en 0
	var contador=0;
	//declarar contadores y variables 
	var respuesta="si";
	var numeroIngresado; //no hace falta inicializar porque es una variable "destructiva"
	var acumulador;

	contador=0;
	acumulador=0;
	respuesta = "si"
	//while(respuesta!="no")
	//while(contador <5) ·Defino la logica
	while(respuesta =="si")
	{		
		contador = contador +1; //·3 cambio la variable de la logica
		numeroIngresado = prompt("ingrese el" + contador + "numero:");
		numeroIngresado= parseInt(numeroIngresado);


		//while(numeroIngresado>0 && numeroIngresado<9) MAL
		//while(!(numeroIngresado>0 && numeroIngresado<9)) CASI
		while(numeroIngresado <0 || numeroIngresado>9)//MUY BIEN
		{
			numeroIngresado = prompt("ERROR,reingrese el" + contador + "numero:");
			numeroIngresado= parseInt(numeroIngresado);
		}

		acumulador = acumulador + numeroIngresado
		respuesta = prompt("si para seguir");
	}
	console.log("contador:" +contador);
	console.log("acumulador:" + acumulador);
}

*/
function mostrar()
{
	//Siempre Iniciarlizarlas en 0
	var contador=0;
	//declarar contadores y variables 
	var respuesta="si";
	var notaAlumno; //no hace falta inicializar porque es una variable "destructiva"
	var acumulador;
	var sexoAlumno;
	var nombreAlumno;
	var promedioDeNotas;
	var mejorNota;
	var peorNota;
	var bandera;
	var contadorDeMujeres =0
	bandera = "no paso por aca";//se compara con el valor

	contador=0;
	acumulador=0;
	respuesta = "si"
	sexoAlumno=prompt("ingrese f o m")

	//while(respuesta!="no")
	//while(contador <5) ·Defino la logica
	while(respuesta =="si")
	{		
		contador = contador +1; //·3 cambio la variable de la logica
	 	edadAlumno = prompt("ingrese el" + contador + "numero:");
	 	edadAlumno= parseInt (edadAlumno);


		//while edadAlumno>0 && edadAlumno<9) MAL
		//while(! edadAlumno>0 && edadAlumno<9)) CASI
		while (edadAlumno <0 || edadAlumno>9)//MUY BIEN
		{
		 	edadAlumno = prompt("ERROR,reingrese el" + contador + "numero:");
		 	edadAlumno= parseInt (edadAlumno);
		}

		while(notaAlumno <0 || notaAlumno>9)//MUY BIEN
		{
			notaAlumno = prompt("ERROR,reingrese el" + contador + "numero:");
			notaAlumno= parseInt(notaAlumno);
		}

		

		
		//while(sexoAlumno == "f" || sexoAlumno=="m") MAL
		//while(!(sexoAlumno == "f" || sexoAlumno=="m") MAL
		//while(!(sexoAlumno == "f" && sexoAlumno=="m") Mhorrible
		while(sexoAlumno != "f" && sexoAlumno !="m") BIEN
		{
			sexoAlumno = prompt("ingrese f o m")
		}
	//termino el ingreso DE DATOS

	if(sexoAlumno=="f")
	{
		contadorDeMujeres= contadorDeMujeres+1
		//SI QUISIERA AGREGAR LA MEJOR NOTA DE LAS MUJERES
		//COPIO LO DE ABAJO
	}
	else

		//PARA DETECTAR LA MEJOR NOTA
	{
		//creo bandera
//		if(contador ==1) // A CONTINUACION ESTRUCTURA PARA MAXIMO Y MINIMO
		if(mejorNotaHombres==-1) //si nunca entra no es afectado
		{
		//si se que es la primera vez uso if(contador==1)no es necesario bandera
		//bandera  = "si paso";
			mejorNotaHombres = notaAlumno;
		}
		else
		{
			if(notaAlumno >mejorNotaHombres)
			{
				mejorNota = notaAlumno;
				mejorNotaAlumno= nombre
			}
		
		}
	}


	//NO ES NECESARIO UTILIZARLA
	



	if(contador ==1) // A CONTINUACION ESTRUCTURA PARA MAXIMO Y MINIMO
	//if(bandera =="no paso por aca")
	{
		//si se que es la primera vez uso if(contador==1)no es necesario bandera
		//bandera  = "si paso";
		mejorNota = notaAlumno;
		peorNota  = notaAlumno;
		edadPrimerAlumno = edad;
		//PRIMEROS INGRESOS ARRIBA
	}
	else
	{
		if(notaAlumno >mejorNota)
		{
			mejorNota = notaAlumno;
			mejorNotaAlumno= nombre
		}
		if(notaAlumno <peorNota)
		{
			peorNota= notaAlumno
		}
	}
		acumulador = acumulador + notaAlumno
		respuesta = prompt("si para seguir");
	}
	//solo se hace una vez que se finalizan los datos
	promedioDeNotas = acumulador/contador

	console.log("contador:" +contador);
	console.log("acumulador:" + acumulador);
}
