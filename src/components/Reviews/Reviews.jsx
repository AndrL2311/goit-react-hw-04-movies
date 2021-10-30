import { useState, useEffect } from "react";

import apiService from "../../service/apiService";
import s from "./Reviews.module.css";

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // console.log("movieId",movieId);
    apiService.fetchMovieReviews(movieId).then((card) => {
      setReviews(card.results);
    });
  }, [movieId]);

  // console.log("reviews >",reviews);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <li className={s.item} key={review.id}>
              <span className={s.label}>Author:</span>
              <span className={s.value}>{review.author}</span>
              <p className={s.content}>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p className={s.message}>We don't have reviews for this movie.</p>
      )}
    </ul>
  );
}

export default Reviews;
