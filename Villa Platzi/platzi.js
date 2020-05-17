var vp = document.getElementById('VillaPlatzi');
var papel = vp.getContext('2d');
document.addEventListener('keyup', moverLobo);

/*Se definen los objetos literales (similares a las colecciones en Python) para cada imagen. En estos se guardan
atributos de interés, como su url y el estado de carga, definidos por el usuario.
*/

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var lobo = {
  url: "lobo.png",
  cargaOK: false
}

/*Aquí se definen los objetos que representan cada imagen. Estos objetos son una instancia
de la clase Image (también llamada definición de un objeto), por esta razón comienza con letra mayúscula.
Al escribir "new Image", se quiere decir "nuevo objeto de la clase Image" en otras palabras.
*/

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo); //El evento 'load' ocurre cuando la imagen ha sido cargada por completo luego de invocarse.

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener('load', cargarLobo);

//Variables que determinan la cantidad de cada animal que aparecerá en el fondo

var cantidadVacas = aleatorio(0, 10);
console.log('Vacas: ' + cantidadVacas);
var cantidadCerdos = aleatorio(0, 15);
console.log('Cerdos: ' + cantidadCerdos);
var cantidadPollos = aleatorio(0, 20);
console.log('Pollos: ' + cantidadPollos);

//Arreglos donde se guardarán las posiciones de las imágenes

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

//Funciones de carga de cada imagen

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarLobo()
{
  lobo.cargaOK = true;
  dibujar();
}

//Coordenadas del lobo
var xLobo = 0;
var yLobo = 436;

//Funcion que dibuja la imágenes una vez están cargadas

function dibujar()
{
  if (fondo.cargaOK && vaca.cargaOK && cerdo.cargaOK && pollo.cargaOK && lobo.cargaOK)    //Si todas las imágenes han cargado, se dibujan en el orden deseado
  {
    papel.drawImage(fondo.imagen, 0, 0); //Se dibuja primero el fondo en las coordenadas (0, 0).

    // Se define el ciclo que dibuja las imagenes en posiciones aleatorias hasta una cantidad definida.
    for(var v = 0; v < cantidadVacas; v++)
    {
      var x = aleatorio(0, 5); //Esta operación se realiza para que las imágenes se ubiquen en espacios de 80 pixeles
      var y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      xVaca[v] = x;
      yVaca[v] = y;
      papel.drawImage(vaca.imagen, x, y);
    }

    for(var c = 0; c < cantidadCerdos; c++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      xCerdo[c] = x;
      yCerdo[c] = y;
      papel.drawImage(cerdo.imagen, x, y);
    }

    for(var p = 0; p < cantidadPollos; p++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      xPollo[p] = x;
      yPollo[p] = y;
      papel.drawImage(pollo.imagen, x, y);
    }

    papel.drawImage(lobo.imagen, xLobo, yLobo);
  }
}

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

function moverLobo(tecla)
{
  papel.drawImage(fondo.imagen, 0, 0);

  for(var v = 0; v < cantidadVacas; v++)
  {
    papel.drawImage(vaca.imagen, xVaca[v], yVaca[v]);
  }

  for(var c = 0; c < cantidadCerdos; c++)
  {
    papel.drawImage(cerdo.imagen, xCerdo[c], yCerdo[c]);
  }

  for(var p = 0; p < cantidadPollos; p++)
  {
    papel.drawImage(pollo.imagen, xPollo[p], yPollo[p]);
  }

  switch(tecla.keyCode)
  {
    case teclas.UP:
      yLobo = yLobo - 64;
      papel.drawImage(lobo.imagen, xLobo, yLobo);
    break;

    case teclas.DOWN:
      yLobo = yLobo + 64;
      papel.drawImage(lobo.imagen, xLobo, yLobo);
    break;

    case teclas.LEFT:
      xLobo = xLobo - 64;
      papel.drawImage(lobo.imagen, xLobo, yLobo);
    break;

    case teclas.RIGHT:
      xLobo = xLobo + 64;
      papel.drawImage(lobo.imagen, xLobo, yLobo);
    break;
  }
}


//Función que devuelve un número entero aleatorio entre un valor mínimo y uno máximo

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
