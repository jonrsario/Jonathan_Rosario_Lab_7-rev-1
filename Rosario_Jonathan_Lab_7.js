//alert("JavaScript works!");

var myMovie = function(title, year, studio, director) {

	this.title = title;
	this.year = year;
	this.studio = studio;
	this.director = director;
	{

	};

};

for (var movie in jsonData.myFilm) {

	if (movie === 0) {

		var myFirstMovie = new myMovie(jsonData.myFilm[movie].title, jsonData.myFilm[movie].year, jsonData.myFilm[movie].studio, jsonData.myFilm[movie].director);

	} else if (movie === 1) {

		var mySecondMovie = new myMovie(jsonData.myFilm[movie].title, jsonData.myFilm[movie].year, jsonData.myFilm[movie].studio, jsonData.myFilm[movie].director);

	}
	;

};

console.log("My favorite movie is " + myMovie());

