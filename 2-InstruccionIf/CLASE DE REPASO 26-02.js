funcion mostrar()
{
	var contador;
	var contadorDePares
	var acumulador;
	var maximo;
	var minimo
	var numeroIngresado;
	var nombre;
	var sexo;
	var maximoSexo;
	var maximoNombre;

	//var bandera
	//inicializaciones
	contador = 0
	acumulador = 0
	contadorDePares=0

	//bandera =0 // lo importante no es el valor si no cambiarla en algun lado
	

	while(contador <10)
	{
		contador= contador+1;
		numeroIngresado= prompt("ingrese el" + contador + "numero")
		numeroIngresado = parseInt(numeroIngresado)
		while(isNan(numeroIngresado) || numeroIngresado <0 || numeroIngresado >10)//para validad un numero
		{
			numeroIngresado = prompt("error,ingrese el + contador + "numero")
			numeroIngresado = parseInt(numeroIngresado)
		}

		//TENGO TODOS LOS DATOS

		acumulador= acumulador + numeroIngresado;
		if(numeroIngresado %2==0)
		{
			contadorDePares = contadorDePares +1
		}
	
		sexo= prompt("ingrese el sexo")
		
		while(!isNan(sexo) || sexo!= "f" &&  sexo!="m")//para validad un numero
		{
			sexo = prompt("error,ingrese el sexo")
				
		}
		nombre= prompt("error,ingrese el nombre")
		//CON BANDERA

		/*if(bandera=="no es valor" )
		{
			bandera= "otro valor";
			maximo = numeroIngresado;
			minimo = numeroIngresado;
		}
		else
		{
			if(maximo<numeroIngresado)
			{
				maximo= numeroIngresado
			}
			if(minimo >numeroIngresado)
			{
				minimo= numeroIngresado;
			}
		}*/
		

		//VARIANTE SIN BANDERA							//solo se evaluarauna vez
			if(maximo<numeroIngresado || contador==1)
			{
				maximo= numeroIngresado
			}
			if(minimo >numeroIngresado || contador==1)
			{
				minimo= numeroIngresado;
			}


			if(maximo<numeroIngresado || contador==1)
			{
				maximo= numeroIngresado
				maximoSexo= sexo
				maximoNombre= nombre;
			}
			if(minimo >numeroIngresado || contador==1)
			{
				minimo= numeroIngresado;
			}

		}
		
	}
	
