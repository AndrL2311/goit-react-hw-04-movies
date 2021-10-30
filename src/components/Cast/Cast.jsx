import { useState, useEffect } from "react";

import apiService from "../../service/apiService";
import s from "./Cast.module.css";

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    apiService.fetchMovieCredits(movieId).then((card) => {
      setCast(card.cast);
    });
  }, [movieId]);

  // console.log(cast);

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
            <li className={s.item} key={actor.id}>
              <img className={s.image} src={actorImgUrl} alt={actor.name} />
              <div className={s.boxInfoActor}>
                <p className={s.nameActor}>{actor.name}</p>
                <span className={s.label}>Character:</span>
                <span className={s.value}>{actor.character}</span>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default Cast;
