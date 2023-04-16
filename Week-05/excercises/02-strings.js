var profession = "Programador";
var professionMayus = profession.toUpperCase();
console.log (professionMayus);

var professionTwo = "Investigador";
var professionThree = professionTwo.substring(0,5);
console.log(professionThree);

var favouriteFood = "papasfritas";
var favouriteFoodB = favouriteFood.substring(8,11);
console.log(favouriteFoodB);

var activity = "diagnosticar";
var activityB = activity.substring(0,1).toUpperCase();
var activityC = activity.substring(1,activity.length).toLowerCase();
var activityDefinite = activityB + activityC;
console.log(activityDefinite);

var food = "spaghettis ";
var foodfast = food.indexOf(" ");
console.log(foodfast);

var movie = "tiempos violentos";
var movieMayuscOne = movie.substring(0,1).toUpperCase();
var movieMayuscOneB = movieMayuscOne + movie.substring(1,movie.indexOf(" ")).toLowerCase()
var movieMayuscTwo = movie.substring(movie.indexOf(" ") + 1, movie.indexOf(" ") + 2).toUpperCase();
var movieMayuscTwoB = movieMayuscTwo + movie.substring(movie.indexOf(" ") + 2).toLowerCase()
var moviedefinitive = movieMayuscOneB + " " + movieMayuscTwoB;
console.log(moviedefinitive);






