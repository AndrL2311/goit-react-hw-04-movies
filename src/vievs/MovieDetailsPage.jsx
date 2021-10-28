import { useState, useEffect } from "react";
import { NavLink, useParams, useRouteMatch, Route } from "react-router-dom";
import apiService from "../service/apiService";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

import s from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  // console.log(url);
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
  // console.log(movie);

  return (
    <article>
      <div className={s.movieCard}>
        {movie && (
          <>
            <img
              className={s.imageMovie}
              src={movie.poster_path}
              alt={movie.original_title}
            />
            <div className={s.boxInfoMovie}>
              <p className={s.titleMovie}>{`${
                movie.original_title
              } (${movie.release_date.slice(0, 4)})`}</p>
              <ul className={s.list}>
                <li className={s.item}>
                  <span className={s.label}>User score:</span>
                  <span className={s.value}>{movie.vote_average * 10}%</span>
                </li>
                <li className={s.item}>
                  <span className={s.label}>Overview:</span>
                  <span className={s.value}>{movie.overview}</span>
                </li>
                <li className={s.item}>
                  <span className={s.label}>Genres:</span>
                  <span className={s.value}>
                    {movie.genres.map((genre) => genre.name + " ")}
                  </span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <p className={s.titleAdditional}>Additional information</p>
      <ul className={s.listAdditional}>
        <li className={s.itemAdditional}>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <Route path={`${url}/cast`}>
        <Cast movieId={movieId} />
      </Route>
      <Route path={`${url}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </article>
  );
}

export default MovieDetailsPage;
