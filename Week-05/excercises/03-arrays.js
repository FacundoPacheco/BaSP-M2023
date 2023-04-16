var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[4]);
console.log(months[10]);

var monthsABC = months.sort();
console.log(monthsABC);

var monthsUnShifted = months.unshift("finVacaciones");
var monthsPushed = months.push("inicioVacaciones");
var monthsDefinitive = months + monthsUnShifted + monthsPushed;
console.log(monthsDefinitive)

var monthsShifted = months.shift();
var monthsPoped = months.pop();
console.log(months);

var monthsReversed= months.reverse();
console.log(monthsReversed);

var monthsJoined = months.join("-");
console.log(monthsJoined);

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthsReduced = months.slice(4,11);
console.log(monthsReduced);
