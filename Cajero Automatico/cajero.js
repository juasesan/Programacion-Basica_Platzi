class Billete
{
  constructor(v, c, n)
  {
      this.valor = v;
      this.cantidad = c;
      this.nombre = n;
      this.imagen = new Image();
      this.imagen.src = n;
  }
  mostrar()
  {
    var img = document.createElement('IMG');
    /*No es posible añadir dos veces la misma imagen al HTML usando solo appendChild, es necesario
    volver a crear un elemento imagen cada vez que se quiera colocar dos iguales.*/
    img.src = this.nombre;
    document.body.appendChild(img);
    var p = document.createElement("p");
    /*Esta función sirve para crear un elemento en el HTML, puede ser también
    un botón o una caja de texto con solo cambiar su argumento.*/

    document.body.appendChild(p);
  }
}

function entregarDinero()
{
  var t = document.getElementById('dinero');
  var dinero = parseInt(t.value);
  for(var bi of caja)
  {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles, bi.nombre))
      dinero -= (bi.valor * papeles);   //-= funciona similar a +=
  }

  if(dinero > 0)
  {
    resultado.innerHTML ='Soy un cajero malo, he sido malo y no puedo darte esa cantidad';
    return;
  }
  for(var e of entregado)
  {
    if(e.cantidad > 0)
    {
      var text = document.createElement('p');
      text.innerHTML = e.cantidad + ' billetes de $' + e.valor + '<br />';
      document.body.appendChild(text);

      //resultado.innerHTML += e.cantidad + ' billetes de $' + e.valor + '<br />';
      /*Una vez todo el texto está cargado en la variable, esta se muestra en el HTML, por eso es necesario
      concatenar lo valores de 'e' en cada repetición del bucle. De no hacer esto solo se mostrará
      el último billete*/

      atmCash = atmCash - (e.valor * e.cantidad);
      for(var i = 0; i < e.cantidad; i++)
      {
        e.mostrar();
      }
    }
  }

  alert('Quedan $' + atmCash + ' en el cajero');
  entregado = [];
}

var caja = [];
var entregado = [];
caja.push(new Billete(100, 5, 'cien.jpg'));
caja.push(new Billete(50, 20, 'cincuenta.jpg'));
caja.push(new Billete(20, 5, 'veinte.jpg'));
caja.push(new Billete(10, 10, 'diez.jpg'));
caja.push(new Billete(5, 5, 'cinco.jpg'));



var atmCash = 1000; //Variable que contiene el dinero en el cajero
var div = 0;
var papeles = 0;
var resultado = document.getElementById('resultado');

var b = document.getElementById('extraer');
b.addEventListener("click", entregarDinero);
