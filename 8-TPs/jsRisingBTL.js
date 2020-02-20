/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;

	edad= prompt("ingrese una edad valida entre 18y90")
	sexo=prompt("F o M para indicar el sexo");
	estadoCivil= prompt("indique su estado Civil")
	//estadoCivil=prompt("indique su estado Civil")



	while( isNaN(edad)|| edad <17 || edad>100)
	{
		edad= prompt("ingrese una edad valida entre 18y90")
	
	}
		document.getElementById('Edad').value = edad;

	
	while( sexo != " f " && sexo != " m ")
	{
		sexo=prompt("f o m para indicar el sexo")
	}
		document.getElementById('Sexo').value = sexo;
	
	while( estadoCivil != "casado" ||estadoCivil != "soltero" ||estadoCivil != "divorciado")
	{
		estadoCivil=prompt("indique su estado Civil")
	}
 	
 	document.getElementById('EstadoCivil').value = estadoCivil;

}
