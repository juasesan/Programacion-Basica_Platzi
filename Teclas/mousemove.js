area = document.getElementById('area_de_dibujo');
papel = area.getContext('2d');
document.addEventListener("mousedown", puntoInicial);
document.addEventListener("mousdown", dibujoPorMovimiento);
var xinicial;
var yinicial;

function puntoInicial(evento)
{
  xinicial = evento.pageX;
  yinicial = evento.pageY;
  console.log('Las coordenadas iniciales son: ' + xinicial + ' ,' + yinicial);
}

function dibujoPorMovimiento(evento3)
{
  console.log(evento3);
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
