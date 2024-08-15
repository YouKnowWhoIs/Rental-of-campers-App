import css from "./campers.module.css";

export const Campers = ({ camper }) => {
  return (
    <div>
      <li className={css.list}>
        <img src={camper.gallery} alt={camper.name} className={css.imgList} />

        <div>
          <h1 className={css.hStyle}>{camper.name}</h1>
          <h2 className={css.priceStyle}>{camper.price}.00</h2>
        </div>

        <div className={css.conteinerDetails1}>
          <span className={css.detailRating}>
            {camper.rating}({camper.reviews.length} Reviews)
          </span>
          <span className={css.detailLocation}>{camper.location}</span>
          <p className={css.detailImg}>
            The pictures shown here are example vehicles of the respective.
          </p>
        </div>

        <div className={css.contrinerDetails2}>
          <span className={css.details}>{camper.adults} adults</span>
          <span className={css.details}>{camper.transmission}</span>
          <span className={css.details}>{camper.engine}</span>
          <span className={css.details}>{camper.kitchen} kitchen</span>
          <span className={css.details}>{camper.details.beds} beds</span>
          <span className={css.details}>AC</span>
        </div>

        <div className={css.conteinerButtonDetails}>
          <button className={css.buttonDetails}>Show more</button>
        </div>
      </li>
    </div>
  );
};
