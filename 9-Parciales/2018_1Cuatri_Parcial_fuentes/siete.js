function mostrar()
{
	var nota;
	

//a
	notaAlumno = prompt("Ingrese notaAlumno entre 0 y 10");
	sexo = prompt("Ingrese f para femenino o m para masculino")
	contadorDeAlumnos = 0
	notaAlumnoPromedios =0
	
	while(contadorDeAlumnos<5)
	{
		
		while(isNaN(notaAlumno) || notaAlumno<0 || notaAlumno>10 ) //entre 0 y 10
		{
			notaAlumno = prompt("ERROR UN VALOR VALIDO-Ingrese notaAlumno entre 0 y 10");
		
		}
		while(!isNaN(sexo) && sexo != "f" && sexo !="m")
		{
			sexo = prompt("ERROR -Ingrese f para femenino o m para masculino")
			
		}

		notaAlumnoPromedios = notaAlumnoPromedios + notaAlumno
		
		if(contadorDeAlumnos ==5)
		{
			notaAlumnoPromedios = notaAlumnoPromedios + notaAlumno
		}
	contadorDeAlumnos= contadorDeAlumnos+1;
	
	}
	
}
