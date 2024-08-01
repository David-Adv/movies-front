import React, { useState } from "react";
import "./movie.css";
export const Rating = () => {
  const [rating, setRating] = useState(2);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  return (
    <div className="rating">
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star"
        value="1"
        checked={rating === 1}
        onChange={handleRatingChange}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star"
        value="2"
        checked={rating === 2}
        onChange={handleRatingChange}
        defaultChecked
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star"
        value="3"
        checked={rating === 3}
        onChange={handleRatingChange}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star"
        value="4"
        checked={rating === 4}
        onChange={handleRatingChange}
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star"
        value="5"
        checked={rating === 5}
        onChange={handleRatingChange}
      />
      <p>Calificación seleccionada: {rating} estrella(s)</p>
    </div>
  );
};
