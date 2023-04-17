//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var profession = "Programador";
var professionMayus = profession.toUpperCase();
console.log (professionMayus);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var professionTwo = "Investigador";
var professionThree = professionTwo.substring(0,5);
console.log(professionThree);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var favouriteFood = "papasfritas";
var favouriteFoodB = favouriteFood.substring(8,11);
console.log(favouriteFoodB);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var activity = "diagnosticar";
var activityB = activity.substring(0,1).toUpperCase();
var activityC = activity.substring(1,activity.length).toLowerCase();
var activityDefinite = activityB + activityC;
console.log(activityDefinite);

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var food = "spaghettis ";
var foodfast = food.indexOf(" ");
console.log(foodfast);

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var movie = "tiempos violentos";
var movieMayuscOne = movie.substring(0,1).toUpperCase();
var movieMayuscOneB = movieMayuscOne + movie.substring(1,movie.indexOf(" ")).toLowerCase()
var movieMayuscTwo = movie.substring(movie.indexOf(" ") + 1, movie.indexOf(" ") + 2).toUpperCase();
var movieMayuscTwoB = movieMayuscTwo + movie.substring(movie.indexOf(" ") + 2).toLowerCase()
var moviedefinitive = movieMayuscOneB + " " + movieMayuscTwoB;
console.log(moviedefinitive);






