import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../service/apiService";

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    apiService.fetchMovieDetails(movieId).then((card) => {
      card.poster_path != null
        ? (card.poster_path =
            "https://www.themoviedb.org/t/p/w300" + card.poster_path)
        : (card.poster_path =
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png");
      setMovie(card);
    });
  }, [movieId]);
  console.log(movie);

  return (
    <article>
      <div className="MovieCard">
        {movie && (
          <>
            <img src={movie.poster_path} alt={movie.original_title} />
            <div>
              <p className="MovieTitle">{`${
                movie.original_title
              } (${movie.release_date.slice(0, 4)})`}</p>
              <span className="Score">
                User score : {movie.vote_average * 10}%
              </span>
              <p className="MovieTitle">Overview: {movie.overview}</p>
              <p className="MovieTitle">
                Genres: {movie.genres.map((genre) => genre.name + " ")}
              </p>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default MovieDetailsPage;
