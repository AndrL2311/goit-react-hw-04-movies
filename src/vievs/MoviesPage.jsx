import { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import apiService from "../service/apiService";

function MoviesPage() {
  // const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const queryName = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (queryName === null) {
      return;
    }
    apiService.fetchSearchMovie(1, queryName).then(setMovies);
  }, [queryName]);

  const formSubmitHandler = (imageName) => {
    // setMovieName(imageName);
    history.push({ ...location, search: `query=${imageName}` });
  };
  console.log(url);
  console.log(movies);
  console.log(queryName);

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
