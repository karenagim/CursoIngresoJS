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


//MEJORA CON SWITCH
cantidadDeLamparas=document.getElementById('Cantidad').value;
	cantidadDeLamparas=parseInt(cantidadDeLamparas);
	marca=document.getElementById('Marca').value;
	precioBruto=cantidadDeLamparas*35;
	console.info("Bruto: ",precioBruto);
	descuento=0;
	switch(cantidadDeLamparas)
	{
		case 5:
				switch(marca)
				{
					case "ArgentinaLuz"
						descuento=40;
						break;
					default:
						descuento=30;
						break;
				}
					case 4:
							switch(marca)
							{
								case "ArgentinaLuz"
								case "FelipeLamparas"
									descuento=25;
									break;
								default:
									descuento=20;
									break;
							}
					case 3:
							switch(marca)
							{
								case "ArgentinaLuz"
									descuento=15;
									break;
								case "FelipeLamparas"
									descuento=10;
									break;
								default:
									descuento=5;
									break;	
							}
						case 1:
						case 2:
								descuento=0;
								break;
						default:
									descuento=50;
									break; 
	}


	






 	/*
	if(cantidadDeLamparas>5)
	{
		descuento=50;
	}
	else
	{
		if(cantidadDeLamparas==5)
		{
			if(marca=="ArgentinaLuz")
			{
				descuento=40;
			}
			else
			{
				descuento=30;
			}
		}
		else
		{
			if(cantidadDeLamparas==4)
			{
				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
				{
					descuento=25;
				}
				else
				{
					descuento=20;
				}
			}
			else
			{
				if(cantidadDeLamparas==3)
				{
					if(marca=="ArgentinaLuz")
					{
						descuento=15;
					}
					else
					{
						if(marca=="FelipeLamparas")
						{
							descuento=10;
						}
						else
						{
							descuento=5;
						}
					}//if(cantidadDeLamparas==3)
				}
			}//if(cantidadDeLamparas==4)
		}//if(cantidadDeLamparas==5)
	}//if(cantidadDeLamparas>5)
	
	*/
	
	precioConDescuento=precioBruto-precioBruto*descuento/100;
	console.info("Precio con descuento: ",precioConDescuento);
	document.getElementById('precioDescuento').value=precioConDescuento;
}						