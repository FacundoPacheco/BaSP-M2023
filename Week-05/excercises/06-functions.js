//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a,b) {
    return a + b;
}
var resultado = suma(5,7);
console.log(resultado);

//Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      alert("Uno de los parámetros no es un número");
      return NaN;
    }
    return a + b;
  }
  let resultado1 = suma(5, 7);
  console.log(resultado1);
  let resultado2 = suma(5, "7");
  console.log(resultado2);

//Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(number) {
    return Number.isInteger(number);
  }
  console.log(validateInteger(1))
  console.log(validateInteger(1.5))
  console.log(validateInteger("hola"))

//Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).
