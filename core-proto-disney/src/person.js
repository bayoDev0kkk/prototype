/**
 * Человек.
 * @param {string} name
 */
function Person(name) {
  this.name = name;
  this.watchedMovies = [];
}

Person.prototype.watchMovie = function (movie) {
  if (!this.watchedMovies.includes(movie.title)) {
    this.watchedMovies.push(movie.title);
    movie.play();
  } else {
    console.log(`${this.name} уже смотрел(а) ${movie.title}`);
  }
};

module.exports = { Person };
