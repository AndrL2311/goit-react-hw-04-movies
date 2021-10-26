import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import apiService from "../service/apiService";
function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  // console.log(url);

  useEffect(() => {
    apiService.fetchTrending(1).then(setMovies);
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
