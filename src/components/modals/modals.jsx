import css from "./modals.module.css";
import { IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const Modals = ({ camper }) => {
  return (
    <section className={css.backdrop}>
      <div className={css.conteinerModal}>
        <h2 className={css.camperName}>{camper.name}</h2>
        <IoClose className={css.iconClose} />
      </div>

      <div className={css.conteinerDetails}>
        <span className={css.detailRating}>
          <FaStar className={css.iconStar} />
          {camper.rating}({camper.reviews.length} Reviews)
        </span>
        <span className={css.detailLocation}>
          <CiLocationOn className={css.iconLocation} />
          {camper.location}
        </span>
      </div>
    </section>
  );
};

export default Modals;
