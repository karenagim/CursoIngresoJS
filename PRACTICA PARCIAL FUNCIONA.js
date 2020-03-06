
function mostrar()
{
	var nota;
	var sexo;
	var contadorAlumnos;
	var acumuladorNotas;
	var promedio;
	var notaMasBaja;
	var notaMasAlta;
	var sexoNotaMasBaja;
	var sexoNotaMasAlta;
	var respuesta;

	acumuladorNotas=0
	contadorAlumnos=0	
	contadorAlumnosVaronesAprobados=0

		while(contadorAlumnos<5)
		{	
			contadorAlumnos=contadorAlumnos+1

			nota=prompt("ingresar una nota ");
			nota=parseInt(nota);		

			while (isNaN(nota)|| nota<0 || nota>10)
			{
				nota=prompt("ingresar una nota");
				nota=parseInt(nota);
				console.log( nota)
			}
			sexo=prompt("ingrese sexo");
			while(!isNaN(sexo) || sexo!="f" && sexo!="m")
			{
				sexo=prompt("ingrese sexo");
				console.log( sexo)
			}	
			if(contadorAlumnos ==1)
			{
				notaMasBaja = nota;
				notaMasAlta = nota;
				sexoNotaMasBaja= sexo;
				sexoNotaMasAlta= sexo;
			}
			else
			{
				if(nota <notaMasBaja)
				{
					notaMasAlta= notaMasBaja
					notaMasBaja = nota;
					sexoNotaMasBaja= sexo;
				}
				if(nota >notaMasAlta)
				{
					notaMasAlta= nota;
					sexoNotaMasAlta= sexo;
				}

			}

			//cantidad de varones nota igual mayor a 6

			if(sexo == "m" && nota >6)
			{
				contadorAlumnosVaronesAprobados=contadorAlumnosVaronesAprobados+1
			}
		
	}	

	acumuladorNotas=acumuladorNotas+nota
		console.log("la nota mas baja " + notaMasBaja);
		console.log("la nota mas alta " + notaMasAlta);
		console.log("sexo de la nota mas baja " +sexoNotaMasBaja);
		console.log("sexo de la nota mas alta " +sexoNotaMasAlta);
	//	console.log("nota del alumno "+ nota + " sexo "+ sexo );
 	promedio=acumuladorNotas/contadorAlumnos;
 	console.log("promedio total es  " + promedio);
 	console.log("varones aprobados" + contadorAlumnosVaronesAprobados)
 	
	} 

