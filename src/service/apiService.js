const API_KEY = "718e78f3ef5fafb4dacfb741569fec57";
const BASE_URL = "https://api.themoviedb.org/3";
// https://api.themoviedb.org/3/trending/movie/day?api_key=718e78f3ef5fafb4dacfb741569fec57&page=1

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
// поиск кинофильма по ключевому слову на странице фильмов
// запрос полной информации о фильме для страницы кинофильма
// запрос информации о актёрском составе для страницы кинофильма
// запрос обзоров для страницы кинофильма
export default fetchTrending;

// export default class ApiService {
//   constructor() {
//     this.searchQuery = '';
//   }
//   // это fetch для запроса популярных фильмов  на главную страницу
//   fetchTrending(page) {
//     return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
//       .then(r => r.json())
//       .then(data => {
//         return data;
//       })
//       .catch(error => console.log(error));
//   }

//   //это fetch для запроса детальной инфо о фильме
//   fetchMovieDetails(movieId) {
//     return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
//       .then(r => r.json())
//       .then(data => {
//         return data;
//       })
//       .catch(error => console.log(error));
//   }

//   //это fetch для поиска фильмов по названию
//   fetchMovies(page) {
//     return fetch(
//       `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${this.searchQuery}`,
//     )
//       .then(r => r.json())
//       .then(data => {
//         return data;
//       })
//       .catch(error => console.log(error));
//   }
//   //это fetch для загрузки жанров
//   fetchGenre() {
//     return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
//       .then(r => r.json())
//       .then(data => {
//         return data.genres;
//       })
//       .catch(error => console.log(error));
//   }

//  //это fetch для поиска видео трейлеров для фильмов
// // https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

//   fetchVideo(movie_id) {
//     return fetch(`${BASE_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`)
//       .then(r => r.json())
//       .then(data => {
//        // console.log("data_id", data);
//         return data.results;
//       })
//       .catch(error => console.log(error));
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
