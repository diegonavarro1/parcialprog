/**Debemos realizar la carga de una compra de 5(cinco) productos de desinfección 
	<br>de cada una debo obtener los siguientes datos: <br>
	el nombre del producto
	el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"), 
	<br>el precio (validar entre 100 y 300),
	<br>la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
	<br>
	el tipo de inflamable("ignífugo", "combustible", "explosivo" )
	y la Marca. 
	<br>Se debe Informar al usuario lo siguiente:<br>

	a) El promedio de cantidad por tipo de producto<br>
	b) El tipo de inflamable con más cantidad de unidades en total de la compra <br>
	c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total <br>
	d) la marca y tipo del más caro de los productos<br> */
function mostrar()
{
var tipoproducto;
var precioproducto;
var cantidaddeunidad;
var tipodeinflamable;
var marcaproducto;
var cantidaddeunidadesdeiac;
var i=0;
var tipoproductomascaro;

var contadorcantidaddeunidad =0;
var contadortipodeinflamable =0;
var promediocantidad;
var contadorignifugo=0;
var contadorcombustible=0;
var contadorexplosivo=0;
var contadoriac=0;




for( i=0;  i<5;  i++)
{
do{
	tipoproducto = prompt("Ingrese tipo de producto(alcohol-iac-quat");
    }
	while(tipoproducto != "iac" && tipoproducto != "alcohol" && tipoproducto != "quat");

do{
	precioproducto = prompt("ingrese precio entre 100 y 300");
	}
	while(isNaN(precioproducto)==true);

do{
	cantidaddeunidad = prompt("ingrese cantidad de unidad mayor a 0");
	}
	while(isNaN(cantidaddeunidad)==true || cantidaddeunidad<1 || cantidaddeunidad >1000);

do{
	tipodeinflamable = prompt("ingrese tipo de inflamablen ignifugo-combustible-explosivo");
	}
	while(tipodeinflamable != "ignifugo" && tipodeinflamable != "combustible" && tipodeinflamable != "explosivo");

do{
	marcaproducto = prompt("ingrese la marca del producto");
	}
	while(isNaN(marcaproducto)==false);


	/**a) El promedio de cantidad por tipo de producto<br> */
	if(cantidaddeunidad=0)
	{
		contadorcantidaddeunidad++
	 	 contadorcantidaddeunidad=cantidaddeunidad;
	
	}

	if(tipodeinflamable=0)
		{
			contadortipodeinflamable++

			contadortipodeinflamable=tipodeinflamable;
		}
	/**b) El tipo de inflamable con más cantidad de unidades en total de la compra <br> */
	switch (tipodeinflamable)
	 {
		case "ignifugo":

		contadorignifugo++

		case "combustible":

		contadorcombustible++

		case "explosivo":

		contadorexplosivo++
				
			break;
		 }
			/**c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total <br> */
	if(tipoproducto == "iac")
		{
		tipoproducto == "iac" >= 200;

		contadoriac++
		}
 /**d) la marca y tipo del más caro de los productos<br> */
		if (tipoproducto>tipoproductomascaro)
		{
			tipoproductomascaro=tipoproducto;
			marcaproducto=tipoproductomascaro;
			tipodeinflamable=tipoproductomascaro;
		}
	}
	promediocantidad = contadorcantidaddeunidad/contadortipodeinflamable;
	cantidaddeunidadesdeiac = contadoriac;
	document.write(tipoproductomascaro);
	document.write(promediocantidad);
	document.write(cantidaddeunidadesdeiac);
	document.write(marcaproducto);
	document.write(tipodeinflamable);
}

