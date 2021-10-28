import { useState, useEffect } from "react";
// import { Link, useRouteMatch } from "react-router-dom";
import apiService from "../../service/apiService";
import s from "./Reviews.module.css";

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    apiService.fetchMovieReviews(movieId).then((card) => {
      setReviews(card.results);
    });
  }, [movieId]);

  console.log(reviews);

  return (
    <ul>
      {reviews &&
        reviews.map((review) => {
          return (
            <li className={s.item} key={review.id}>
              <span className={s.label}>Author:</span>
              <span className={s.value}>{review.author}</span>
              <p className={s.content}>{review.content}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Reviews;
