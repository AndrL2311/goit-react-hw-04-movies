const API_KEY = "718e78f3ef5fafb4dacfb741569fec57";
const BASE_URL = "https://api.themoviedb.org/3";

// список самых популярных фильмов на сегодня для создания коллекции на главной странице
function fetchTrending(page) {
  // console.log('page', page);
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  return fetch(url)
    .then((res) => {
      // console.log(res);
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(new Error("Something went wrong "));
    })
    .then((res) => {
      if (res.results.length === 0) {
        return Promise.reject(
          new Error(
            "No movie with this name were found. Please enter a different name. "
          )
        ).catch((error) => console.log(error));
      }
      // console.log(res.results.length);
      return res.results;
    });
}

// запрос полной информации о фильме для страницы кинофильма
function fetchMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((r) => r.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

// запрос информации о актёрском составе для страницы кинофильма
function fetchMovieCredits(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  )
    .then((r) => r.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}
// запрос обзоров для страницы кинофильма
function fetchMovieReviews(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  )
    .then((r) => r.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}
// поиск кинофильма по ключевому слову на странице фильмов
function fetchSearchMovie(page, searchQuery) {
  // console.log('page', page);
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchQuery}`;
  return fetch(url)
    .then((res) => {
      // console.log(res);
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(new Error("Something went wrong "));
    })
    .then((res) => {
      if (res.results.length === 0) {
        return Promise.reject(
          new Error(
            "No movie with this name were found. Please enter a different name. "
          )
        ).catch((error) => console.log(error));
      }
      // console.log(res.results.length);
      return res.results;
    });
}

const apiService = {
  fetchTrending,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchSearchMovie,
};
export default apiService;
