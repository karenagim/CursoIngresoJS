
function mostrar()
{
	var planeta;

	planeta= prompt("ingrese un planeta en minuscula");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
		alert("aca hace mas calor");
		break;


		case "tierra":
		alert("aca vivimos");
		break;
		
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "pluton":
		case "neptuno": 
		alert("aca hace mas frio");
		break;

		default:
		alert("no es un planeta valido")
	}
}


