import { FaStar } from "react-icons/fa";
import css from "./modalReviews.module.css";
import { BookForm } from "../form/bookForm";

export const ModalReviews = ({ camper }) => {
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={css.star}
          color={i <= rating ? "gold" : "gray"}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div>
        <BookForm />
      </div>
      <div className={css.conteinerReviews}>
        <div>
          <span className={css.imgStyle}>
            {camper.reviews[0].reviewer_name[0]}
          </span>
          <div className={css.nameStyle}>{camper.reviews[0].reviewer_name}</div>
          <div className={css.starRating}>
            {renderStarRating(camper.reviews[0].reviewer_rating)}
          </div>
          <p className={css.commentStyle}>{camper.reviews[0].comment}</p>
        </div>
        <div>
          <span className={css.imgStyle}>
            {camper.reviews[1].reviewer_name[1]}
          </span>
          <div className={css.nameStyle}>{camper.reviews[1].reviewer_name}</div>
          <div className={css.starRating}>
            {renderStarRating(camper.reviews[1].reviewer_rating)}
          </div>
          <p className={css.commentStyle}>{camper.reviews[1].comment}</p>
        </div>
      </div>
    </>
  );
};
