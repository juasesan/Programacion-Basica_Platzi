area = document.getElementById('area_de_dibujo');
papel = area.getContext('2d');
var ancho = area.width;
var alto = area.height;
document.addEventListener("mousedown", puntoInicial);
document.addEventListener("mouseup", puntoFinal);

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
