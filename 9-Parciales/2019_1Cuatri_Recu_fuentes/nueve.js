function mostrar()
{
	var nombreEstudiante;
	var edadEstudiante;
	var sexoEstudiante;
	var notaFinalEstudiante;

	var cantidadDeVaronesAprobados;

	var estudiantesMenoresDeEdad;
	var estudiantesAdolescentes;
	var estudiantesMayoresDeEdad;
	
	
	var promedioDeNotasMenoresDeEdad;
	var promedioDeNotasMayoresDeEdad;
	var promedioDeNotasAdolescentes;

	var contadorDeNotasFinales =0;

	nombreEstudiante= prompt("Ingrese su Nombre");
	while(!isNaN(nombreEstudiante))
	{
		nombreEstudiante= prompt("Ingrese su Nombre");
	}

	edadEstudiante= prompt("Ingrese la edad")
	while(isNaN(edadEstudiante) && edadEstudiante>0 || edadEstudiante>100);
	{
		edadEstudiante= prompt("Ingrese la edad")
		edadEstudiante= parseInt(edadEstudiante);
	}

	while(!isNaN(sexoEstudiante) || sexoEstudiante!= "f"&& sexoEstudiante!= "m")
	{
		sexoEstudiante= prompt("ingrese el sexo f- femenino, m- masculino");
	}

	while(isNaN(notaFinalEstudiante)|| notaFinalEstudiante<0|| nombreEstudiante>10)
	{
		notaFinalEstudiante= prompt("Ingrese nota final");
		notaFinalEstudiante= parseInt(notaFinalEstudiante);
	}

	console.log(nombreEstudiante);
	console.log(edadEstudiante);
	console.log(sexoEstudiante);
	console.log(notaFinalEstudiante);

	// cantidad de varones aprobados

	while(sexoEstudiante== "m" && notaFinalEstudiante>6)
	{
		cantidadDeVaronesAprobados++
	}

	//promedio
	//promedioDeNotasMayoresDeEdad= notaFinalEstudiante/contadorDeNotasFinales;


	while(edadEstudiante>17)
	{

		notaFinalMayores= notaFinalMayores+ notaEstudiante;
		contadorDeNotasFinalesMayores; = contadorDeNotasFinalesMayores;+1;
		
		if(edadEstudiante>11 )//&& edadEstudiante<18 no va
		{
			notaFinalAdolescentes= notaFinalAdolescentes+ notaFinalEstudiante;
			contadorDeNotasFinalesMenores = contadorDeNotasFinalesMenores+1;
		}
		else
		{
			
			notaFinalMenores= notaFinalMenores+ notaEstudiante;
			contadorDeNotasFinalesAdolescentes = contadorDeNotasFinalesAdolescentes+1;
		}


		promedioDeNotasMenoresDeEdad=notaFinalMenores/contadorDeNotasFinalesMenores
		promedioDeNotasAdolescentes=notaFinalAdolescentes/contadorDeNotasFinalesAdolescentes
		promedioDeNotasMayores=notaFinalMayores/contadorDeNotasFinalesMayores;
	}


}
