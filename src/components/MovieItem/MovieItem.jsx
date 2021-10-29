import { Link, useLocation } from "react-router-dom";

function MovieItems({ movies, linkUrl }) {
  const location = useLocation();
  return (
    <ul>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `${linkUrl}${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default MovieItems;
