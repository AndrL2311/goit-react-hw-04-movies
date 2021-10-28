import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import apiService from "../service/apiService";
import MovieItems from "../components/MovieItem/MovieItem";

import s from "./HomePage.module.css";

function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  // console.log(url);

  useEffect(() => {
    apiService.fetchTrending(1).then(setMovies);
  }, []);
  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      <MovieItems movies={movies} linkUrl={`${url}movies/`} />
    </div>
  );
}

export default HomePage;
