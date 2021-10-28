import { useState, useEffect } from "react";
// import { Link, useRouteMatch } from "react-router-dom";
import apiService from "../../service/apiService";
function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    apiService.fetchMovieCredits(movieId).then((card) => {
      setCast(card.cast);
    });
  }, [movieId]);

  console.log(cast);

  return (
    <ul>
      {cast &&
        cast.map((actor) => {
          let actorImgUrl = "";
          if (actor.profile_path != null) {
            actorImgUrl =
              "https://www.themoviedb.org/t/p/w300" + actor.profile_path;
          } else {
            actorImgUrl =
              // "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png";
              "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
          }

          return (
            <li key={actor.id}>
              <img src={actorImgUrl} alt={actor.name} />
              <p>{actor.name}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Cast;
