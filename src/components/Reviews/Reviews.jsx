import { useState, useEffect } from "react";
// import { Link, useRouteMatch } from "react-router-dom";
import apiService from "../../service/apiService";
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
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Reviews;
