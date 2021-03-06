import { useState, useEffect } from "react";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

import Searchbar from "../Searchbar/Searchbar";
import apiService from "../service/apiService";
import MovieItems from "../components/MovieItem/MovieItem";

function MoviesPage() {
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
    history.push({ ...location, search: `query=${imageName}` });
  };
  // console.log(url);
  // console.log("movies", movies);
  // console.log(queryName);

  return (
    <div>
      <Searchbar onSubmit={formSubmitHandler} />
      {movies && <MovieItems movies={movies} linkUrl={`${url}/`} />}
    </div>
  );
}

export default MoviesPage;
