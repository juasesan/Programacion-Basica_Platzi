var d = document.getElementById("area");
var rectangulo = document.getElementById("rectangulito");
var triangulo = document.getElementById("triangulito");
var rombo = document.getElementById("rombito");

var lienzo = d.getContext("2d");

rectangulo.addEventListener("click", dibujoRectangulo); //Añade un escuchador de eventos, en este caso el click
triangulo.addEventListener("click", dibujoTriangulo);
rombo.addEventListener("click", dibujoRombo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoRectangulo()
{
  dibujarLinea("blue", 0, 0, 0, 300);
  dibujarLinea("blue", 0, 300, 300, 300);
  dibujarLinea("blue", 300, 300, 300, 0);
  dibujarLinea("blue", 300, 0, 0, 0);

}

function dibujoTriangulo()
{
  dibujarLinea("blue", 0, 300, 300, 300);
  dibujarLinea("blue", 150, 0, 300, 300);
  dibujarLinea("blue", 150, 0, 0, 300);

}

function dibujoRombo()
{
  dibujarLinea("blue", 150, 0, 0, 150);
  dibujarLinea("blue", 0, 150, 150, 300);
  dibujarLinea("blue", 150, 300, 300, 150);
  dibujarLinea("blue", 300, 150, 150, 0);

}
