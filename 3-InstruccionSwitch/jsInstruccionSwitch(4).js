function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Enero":
		case "Diciembre":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":

			alert("tiene 31 dias");
		break;

		case "Febrero":
			alert("tiene 28 dias");
		break;

		default:
			alert("tiene 30 dias");
	}
	



}//FIN DE LA FUNCIÓN