/*imagenes y coleccion son Arrays. El primero es uno con índices no numericos, por lo que solo se
puede recorrer usando 'in' con un ciclo for. El segundo es uno con índices numéricos, por lo que se puede
usar 'in' o 'of' en el bucle para recorrer sus índices o sus elementos respectivamente.
*/

var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var pakin of coleccion)
{
  pakin.mostrar();
}

/*Si se coloca 'in' en el ciclo, la variable iterativa toma el valor
del índice del elemento en la coleccion.
Si se coloca 'of', en cambio, esta toma como valor el elemento en sí.
NO ES COMO EN PYTHON.
*/

for(var x in coleccion[0])
{
  console.log(x);
}
