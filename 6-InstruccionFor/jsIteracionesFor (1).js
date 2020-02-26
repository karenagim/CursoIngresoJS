function mostrar()
{
	//var contador =0 -- validacion para el resto del ejemplo.
	var contador;
/*
	while(contador <10)
	{
		console.log(contador) //del 0 al 9
		contador = contador +1; // contador ++;tambien se puede
		console.log(contador) //del 1 al 10
	}*/

	//DO WHILE

	/*do
	{
		console.log(contador) //del 0 al 9
		contador = contador +1; // contador ++;tambien se puede
		console.log(contador) //del 1 al 10
	}while(contador >10); // <10muestra 0 -1 -0 -1

	//AL WHIlE LO TRANSFORMAMOS EN FOR

	while(contador <10)
	{
		console.log(contador) //del 0 al 9
		contador++; // contador ++;tambien se puede
		console.log(contador) //del 1 al 10
	}*/
	
		//FOR CORRECTO
	for(contador=0;contador <10;contador++)
	{
		console.log("for:" + contador);
	}

	//FOR DESARMADO
	contador=0
	for(;;)
	{
		console.log("for:" + contador);
		contador++;
		if(contador==10)
			{
				break;
			}
	}

	var i;
	for(i=0;i <10;i++)
	{
		console.log("for:" + i);
	}
}