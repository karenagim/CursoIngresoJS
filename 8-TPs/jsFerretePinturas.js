
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var celsius, fahrenheit;
    
    fahrenheit = parseFloat(document.getElementById("Temperatura").value);
    celcius = (fahrenheit - 32) * 5/9;

    alert(fahrenheit.toFixed(2) + " fahrenheit son " + celcius.toFixed(2) + " grados centigrados");
}

function CentigradosFahrenheit () 
{
    var celsius, fahrenheit;
    
    celsius = parseFloat(document.getElementById("Temperatura").value);
    fahrenheit = (celsius * 9/5) + 32;

    alert(celsius.toFixed(2) + " celsius son " + fahrenheit.toFixed(2) + " grados fahrenheit");
	
}