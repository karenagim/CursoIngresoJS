function mostrar()
{
	var letra;
	var numero;
	var cantidadNumerosPares;
	var cantidadNumerosImpares;
	var cantidadNumerosCeros;
	var maximoNumero;
	var minimoNumero;
	var maximaLetra;
	var minimaLetra;

	var cantidadNumerosPositivos;
	var sumatoriaPositivos;
	var sumatoriaNegativos;

	var respuesta;

	respuesta = "si"
	cantidadNumerosPares=0;
	cantidadNumerosImpares=0;
	cantidadNumerosCeros =0
	cantidadNumerosPositivos=0
	sumatoriaPositivos=0
	sumatoriaNegativos=0

	//letra= prompt(" ingrese una letra");
	while(respuesta == "si")
	{

		numero= prompt("ingrese un numero entre -100 y 100");
		numero= parseInt(numero);
		while(isNaN(numero)||numero <-100 ||numero >100)
		{
			numero= prompt("ingrese un numero entre -100 y 100");
			numero= parseInt(numero);
		}
		letra= prompt("ingrese una letra");
		while(!isNaN(letra))
		{
			letra= prompt("ingrese una letra");
		}
		//a CANTIDAD DE NUMEROS PARES
		while(numero%2==0)
		{
			cantidadNumerosPares=cantidadNumerosPares+1;
		}

		//B la cantidad de numeros Impares
		while(numero%2==1)
		{
			cantidadNumerosImpares=cantidadNumerosImpares+1;
		}
		//C cantidad de ceros
		while(numero%5 ==0)
		{
			cantidadNumerosCeros =cantidadNumerosCeros+1;
		}
		//D PROMEDIO DE TODOS LOS NUMEROS POSITIVOS INGRESADOS
		while(numero>0)
		{
			cantidadNumerosPositivos= cantidadNumerosPositivos+ 1;
			sumatoriaPositivos= sumatoriaPositivos+nota;
		}
		//E PROMEDIO DE NUMEROS POSITIVOS
		while(numero<0)
		{
			cantidadNumerosNegativos= cantidadNumerosNegativos+ 1;
			sumatoriaNegativos= sumatoriaNegativos+nota;
		}
		contador = contador+1
		if(contador ==1)
		{
			maximoNumero= numero;
			minimoNumero= numero;
		}
		else
		{
			if(numero>maximoNumero)
			{
				maximoNumero= numero;
				maximaLetra= letra;
			}
			if(numero<minimoNumero)
			{
				minimoNumero= numero;
				minimaLetra= letra;
			}
		}

	}	respuesta= prompt("si desea continuar presione si");


	//E 
	promedioPositivos= sumatoriaPositivos/cantidadNumerosPositivos;
	promedioNegativos= sumatoriaNegativos/cantidadNumerosNegativos;
	console.log("cantidad Numeros Pares" + cantidadNumerosPares)
	console.log("el numero minimo es: "+ minimoNumero);
	console.log("el numero maximo es: "+ maximoNumero);//F
	console.log("sumatoria Negativos" +sumatoriaNegativos)
	}
	