import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import apiService from "../service/apiService";

function MoviesPage() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    if (movieName === "") {
      return;
    }
    apiService.fetchSearchMovie(1, movieName).then(setMovies);
  }, [movieName]);

  const formSubmitHandler = (imageName) => {
    setMovieName(imageName);
  };
  console.log(url);
  console.log(movies);
  return (
    <div>
      <Searchbar onSubmit={formSubmitHandler} />
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
