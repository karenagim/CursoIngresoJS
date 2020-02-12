/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLampara ;//numero
 	var precioLampara	;
 	var precioTotal;
    var marcaLampara
    var porcentajeDescuento

 	cantidadLampara = parseInt(document.getElementById('Cantidad').value);
 	precioLampara	= parseInt(35)* cantidadLampara;
 	marcaLampara 	= document.getElementById('Marca').value
 	porcentajeDescuento= 0
	
	//descuento		=  parseInt(10/100
//A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.  	
 	if (cantidadLampara>5)
 	{
 		porcentajeDescuento= 50
 		alert(precioLampara - precioLampara*porcentajeDescuento/100)
 	}
//B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
//se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

	if( cantidadLampara == 5)
	{
		if( marcaLampara == "ArgentinaLuz")
		{
			porcentajeDescuento= 40
			alert(precioLampara - precioLampara*porcentajeDescuento/100);
		}
		
		else( marcaLampara != "ArgentinaLuz")
		{
			porcentajeDescuento= 30
			alert(precioLampara - precioLampara*porcentajeDescuento/100);
		}
	}
	if( cantidadLampara == 4)
	{
		if( marcaLampara == "ArgentinaLuz"||marcaLampara == "FelipeLamparas")
		{
			porcentajeDescuento= 25
			alert(precioLampara - precioLampara*porcentajeDescuento/100);
		}
		
		else( !( marcaLampara == "ArgentinaLuz"||marcaLampara == "FelipeLamparas"))
		{
			porcentajeDescuento= 20
			alert(precioLampara - precioLampara*porcentajeDescuento/100);
		}
	}
	if( cantidadLampara == 3)
	{
		if( marcaLampara == "ArgentinaLuz")
		{
			porcentajeDescuento= 15
			alert(precioLampara - precioLampara*porcentajeDescuento/100);
		}
		else
		{
			if( marcaLampara == "FelipeLamparas")
			{
				porcentajeDescuento= 10
				alert(precioLampara - precioLampara*porcentajeDescuento/100);
			}
			else
			{
				porcentajeDescuento=5
				alert(precioLampara - precioLampara*porcentajeDescuento/100);
			}
		}
	}
precioTotal = precioLampara - precioLampara*porcentajeDescuento/100
}
