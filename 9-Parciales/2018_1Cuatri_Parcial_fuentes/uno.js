function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var valorDeVerdadAncho = isNaN(ancho);
	var valorDeVerdadLargo = isNaN(largo);

	ancho= prompt("ingrese el ancho");
	ancho= parseInt(ancho);

	largo= prompt("ingrese el largo");
	largo= parseInt(largo);

	perimetro = (ancho* 2) + (largo* 2)
	alert(perimetro);

}
