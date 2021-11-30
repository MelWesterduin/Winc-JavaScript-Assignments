const API_KEY = 'bae906320b64c5f2ef38c9b6210ec1bd';

// stap 1
const getMovieGenres = async () => {
  let processedResponse;
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const response = await fetch(apiUrl, { method: 'GET' });
    processedResponse = await response.json();
  } catch (error) {
    console.log(error);
  }
  return processedResponse.genres;
};

const addGenres = async () => {
  let genres;
  await getMovieGenres().then((res) => (genres = res));

  const listOfGenres = document.getElementById('list-of-genres');
  listOfGenres.innerHTML = '';
  const header = document.createElement('h1');
  header.innerHTML = 'Movie Genres:';
  listOfGenres.appendChild(header);
  genres.map((genre) => {
    const item = document.createElement('li');
    item.innerHTML = `Genre: ${genre.name}, Genre id: ${genre.id}`;
    listOfGenres.appendChild(item);
  });
};
addGenres();

//stap 2:
const getFavoMovie = async () => {
  let movieResponse;
  const url = `https://api.themoviedb.org/3/find/tt0266697?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
  try {
    const response = await fetch(url, { method: 'GET' });
    movieResponse = await response.json();
  } catch (error) {
    console.log(error);
  }
  return movieResponse;
};

const addFavoMovie = async () => {
  let movies;
  await getFavoMovie().then((res) => (movies = res));

  const myFavoMovie = document.getElementById('Favo-movie');
  myFavoMovie.innerHTML = '';
  movies.movie_results.map((movie) => {
    const header = document.createElement('h1');
    header.innerHTML = `Mijn favoriete film is: ${movie.title}`;
    myFavoMovie.appendChild(header);
  });
};

addFavoMovie();

//stap 3:
const getTopRatedMovies = async () => {
  let topRatedResponse;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=bae906320b64c5f2ef38c9b6210ec1bd&language=en-US&page=1`;

  try {
    const response = await fetch(url, { method: 'GET' });
    topRatedResponse = await response.json();
    console.log(topRatedResponse);
  } catch (error) {
    console.log(error);
  }
  return topRatedResponse;
};

const addTopRatedMovies = async () => {
  let movies;
  await getTopRatedMovies().then((res) => (movies = res));
  const topRatedMovies = document.getElementById('top-rated-movies');
  topRatedMovies.innerHTML = '';
  const header = document.createElement('h2');
  header.innerHTML = 'Top rated films:';
  topRatedMovies.appendChild(header);
  movies.results.map((movie) => {
    const item = document.createElement('li');
    item.innerHTML = ` ${movie.title}`;
    topRatedMovies.appendChild(item);
  });
};

addTopRatedMovies();


//stap 4:
const getTopRatedActionMovies = async () => {
    let topActionResponse;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=action&with_watch_monetization_types=flatrate`

    try {
        const response = await fetch(url, {method: 'GET'});
        topActionResponse = await response.json();
    } catch (error) {
        console.log(error);
    }
    return topActionResponse;
};
const addTopActionMovies = async () => {
    let actionMovies;
    await getTopRatedActionMovies()
    .then(res => actionMovies = res);
    const topRatedActionMovies = document.getElementById('top-action-movies');
    topRatedActionMovies.innerHTML = '';
    const header = document.createElement('h2');
    header.innerHTML = 'Beste actie films:';
    topRatedActionMovies.appendChild(header);
    actionMovies.results.map((movie) => {
        const item = document.createElement('li');
        item.innerHTML = `${movie.title}`;
        topRatedActionMovies.appendChild(item);
    });
};
addTopActionMovies();

//stap 5:
const getMoviesFrom1975 = async () => {
  let oldMoviesResponse;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975&with_watch_monetization_types=flatrate`

  try {
    const response = await fetch(url, {method: 'GET'});
    oldMoviesResponse = await response.json();
    console.log(oldMoviesResponse);
  } catch (error) {
    console.log(error);
  }
  return oldMoviesResponse;
};

const addMovies = async () => {
  let oldMovies;
  await getMoviesFrom1975()
  .then(res => oldMovies = res);
  const movies1975 = document.getElementById('movies-from-1975');
  movies1975.innerHTML = '';
  const header = document.createElement('h2');
  header.innerHTML = 'Films uit 1975:';
  movies1975.appendChild(header);
  oldMovies.results.map((movie) => {
    const item = document.createElement('li');
    item.innerHTML = `${movie.title}`;
    movies1975.appendChild(item);
  });
};

addMovies();

145dedee0141811cb1f8241ba1052fd82685ab1a