var decision = prompt('¿Con qué quieres dibujar?\n1. Teclado\n2. Mouse');

if (decision == 1)
{
  var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  document.addEventListener("keyup", dibujarTeclado);
  var cuadrito = document.getElementById("area_de_dibujo");
  var papel = cuadrito.getContext("2d");
  var x = 100;
  var y = 100;
  dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
  document.write('Mueve las flechas del teclado para dibujar');
}

else if (decision == 2)
{
  area = document.getElementById('area_de_dibujo');
  papel = area.getContext('2d');
  var ancho = area.width;
  var alto = area.height;
  document.addEventListener("mousedown", puntoInicial);
  document.addEventListener("mouseup", puntoFinal);

  document.write('Pasos para dibujar con mouse:');
  document.write('1. Haz click y mantén en el punto donde quieres comenzar la línea\n')
  document.write('2. Arrastra el cursor hasta el punto final\n');
  document.write('3. Suelta el botón del mouse y se dibujará la línea');
  //Coordenadas de la línea
  var xinicial;
  var yinicial;
  var xfinal;
  var yfinal;

  function puntoInicial(evento)
  {
    xinicial = evento.pageX;
    yinicial = evento.pageY;
    console.log('Las coordenadas iniciales son: ' + xinicial + ' ,' + yinicial);
  }

  function puntoFinal(evento2)
  {
    xfinal = evento2.pageX;
    yfinal = evento2.pageY;
    console.log('Las coordenadas finales son: ' + xfinal + ' ,' + yfinal);
    dibujarLinea("blue", xinicial, yinicial, xfinal, yfinal, papel);
  }

}

//Funciones utilizadas

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorsito = "blue";
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorsito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorsito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorsito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorsito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
    default:
      console.log("¿Otro imperio?");
    break;
  }
}
