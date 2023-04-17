//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
var monthsABC = months.sort();
console.log(monthsABC);

//Agregar un elemento al principio y al final del array (utilizar unshift y push).
var monthsUnShifted = months.unshift("finVacaciones");
var monthsPushed = months.push("inicioVacaciones");
var monthsDefinitive = months + monthsUnShifted + monthsPushed;
console.log(monthsDefinitive)

//Quitar un elemento del principio y del final del array (utilizar shift y pop).
var monthsShifted = months.shift();
var monthsPoped = months.pop();
console.log(months);

//Invertir el orden del array (utilizar reverse).
var monthsReversed= months.reverse();
console.log(monthsReversed);

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var monthsJoined = months.join("-");
console.log(monthsJoined);

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthsReduced = months.slice(4,11);
console.log(monthsReduced);