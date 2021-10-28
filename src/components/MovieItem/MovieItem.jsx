import { Link } from "react-router-dom";

function MovieItems({ movies, linkUrl }) {
  return (
    <ul>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`${linkUrl}${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}

export default MovieItems;
