function mostrar()
{
	var notaAlumno;
	var sexoAlumno;
	var promedioNotasTotales;
	var contadorDeAlumnos;
	
	
	contadorDeAlumnos=parseInt(contadorDeAlumnos);
	contadorDeAlumnos = 0
	
	promedioNotasTotales= parseInt(promedioNotasTotales);
	promedioNotasTotales =0
			

		while(contadorDeAlumnos <5)
		{	
			
			notaAlumno = prompt("Ingrese notaAlumno entre 0 y 10");
			while (isNaN(notaAlumno) || notaAlumno < 0 || notaAlumno > 10)
			{
				notaAlumno = prompt("Ingrese la notaAlumno");
				notaAlumno= parseInt(notaAlumno);
			}
			console.log("La notaAlumno ingresada es: " + notaAlumno);

		/*	sexoAlumno = prompt("Ingrese f para femenino o m para masculino")
			while(!isNaN(sexoAlumno) || sexoAlumno!= "f" && sexoAlumno !="m")
			{
				sexoAlumno = prompt("Ingrese f para femenino o m para masculino")	
			}
			console.log("el sexo es " + sexoAlumno);
*/
			contadorDeAlumnos= contadorDeAlumnos+1
			
			promedioNotasTotales= notaAlumno;
		
		}

		//console.log("el promedio total es " + promedioNotasTotales/contadorDeAlumnos);
		console.log("cantidad de alumns " + contadorDeAlumnos);
		console.log("el promedio total es " +  promedioNotasTotales);
}
	