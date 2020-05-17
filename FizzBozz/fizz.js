var desde = parseInt(prompt('Ingrese valor desde:'));
var hasta = parseInt(prompt('Ingrese valor hasta:'));

for(var i=desde; i <= hasta; i++)
{
  if(i % 3 == 0)
  {
    document.write("Fizz");
  }
  if(i % 5 == 0)
  {
    document.write("Buzz");
  }
  if(i%3 != 0 && i%5 !=0)
  {
    document.write(i);
  }
  document.write("<br />");
}
