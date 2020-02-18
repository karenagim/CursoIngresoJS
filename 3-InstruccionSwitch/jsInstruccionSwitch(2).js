function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Diciembre":
		case "Enero":
		case "Febrero":
			alert("Ya pasamos el frio, ahora calor!!!.");
		break;

		case "Marzo":
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno.");
		break;

		default:
			alert("Abrigate que hace frio.");
	}
	break;	

//alert (mesDelAño);


}//FIN DE LA FUNCIÓN