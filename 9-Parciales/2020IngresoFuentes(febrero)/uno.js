
function mostrar()
{
	var tipoProductoPrevencion;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var maximoPrecioBarbijo;
	var maximoPrecioCantidadBarbijo;
	var maximoPrecioFabricanteBarbijo;
	var bandera;
	
	var contadorDeProducto;
	contadorDeProducto=0;
	bandera=0;
	 while(contadorDeProducto<3)
    {
		    tipoProductoPrevencion=prompt("ingrese producto barbijo , jabon o alcohol");
		    while(!isNaN(tipoProductoPrevencion)||tipoProductoPrevencion!="barbijo" && tipoProductoPrevencion!="jabon" && tipoProductoPrevencion!="alcohol" )
		    {
		      tipoProductoPrevencion=prompt("ingrese producto barbijo , jabon o alcohol");

		    }
		    precio=prompt("ingrese precio entre 100 y 300")
		    precio=parseInt(precio);
		    while(isNaN(precio)|| precio<100 || precio>300 )
		   	 {	     
		      precio=prompt("ingrese precio entre 100 y 300")
		      precio=parseInt(precio);
			 }
			cantidadDeUnidades=prompt("ingrese cantidadDeUnidades hasta 1000 productos ")
		    cantidadDeUnidades=parseInt(cantidadDeUnidades);
		    while(isNaN(cantidadDeUnidades)|| cantidadDeUnidades<1 || cantidadDeUnidades>1000)
		    {
		      cantidadDeUnidades=prompt("ingrese cantidadDeUnidades hasta 1000 productos ")
		      cantidadDeUnidades=parseInt(cantidadDeUnidades);
		    }
		    marca=prompt("ingrese su marca");
		    while(!isNaN(marca))
		 	{
		 	  marca=prompt("ingrese su marca");
		 	}
		 	fabricante=prompt("ingrese fabricante");
			while(!isNaN(fabricante))
		 	{
		 	  fabricante=prompt("ingrese fabricante");
		 	}
			if( tipoProductoPrevencion=="barbijo" &&bandera==0 || maximoPrecioBarbijo<precio)
			 {
			 	maximoPrecioBarbijo=precio
			 	maximoPrecioCantidadBarbijo=cantidadDeUnidades
			 	maximoPrecioFabricanteBarbijo=fabricante
			 	bandera++
			
			 }
			  	console.log("barbijo mas caro"+ maximoPrecioBarbijo);
	    	 	console.log("barbijo mas caro cantidad"+ maximoPrecioCantidadBarbijo);
	      		console.log("barbijo mas caro fabricante"+ maximoPrecioFabricanteBarbijo);
		
		contadorDeProducto=contadorDeProducto+1	

}
      
     
      
    }