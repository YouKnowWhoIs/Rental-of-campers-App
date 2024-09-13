import css from "./Modals.module.css";
import { IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { ModuleFeatures } from "../modalFeatures/modalFeatures.jsx";
import { ModalReviews } from "../ModalReviews/ModalReviews.jsx";

const Modals = ({
  camper,
  formattePrice,
  handleCloseModal,
  handleBackdropClick,
}) => {
  const [activeSection, setActiveSection] = useState("features");

  const handleVisibleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <section className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.conteinerModal}>
        <h2 className={css.camperName}>{camper.name}</h2>
        <button className={css.buttonIconClose} onClick={handleCloseModal}>
          <IoClose className={css.iconClose} />
        </button>
        <div className={css.detailDetails}>
          <span className={css.detailRating}>
            <FaStar className={css.iconStar} />
            {camper.rating}({camper.reviews.length} Reviews)
          </span>
          <span className={css.detailLocation}>
            <CiLocationOn className={css.iconLocation} />
            {camper.location}
          </span>
        </div>
        <div>
          <h2 className={css.priceStyle}>{formattePrice}</h2>
        </div>
        <div className={css.conteinerGalleryList}>
          <img className={css.galleryList} src={camper.gallery[0]} />
          <img className={css.galleryList} src={camper.gallery[1]} />
          <img className={css.galleryList} src={camper.gallery[2]} />
        </div>
        <div>
          <span>{camper.description}</span>
        </div>
        <div className={css.conteinerAdditionalDetails}>
          <a
            onClick={() => handleVisibleSection("features")}
            className={`${css.additionalDetails} ${
              activeSection === "features" ? css.active : ""
            }`}
          >
            Features
          </a>
          <a
            onClick={() => handleVisibleSection("reviews")}
            className={`${css.additionalDetails} ${
              activeSection === "reviews" ? css.active : ""
            }`}
          >
            Reviews
          </a>
        </div>
        {activeSection === "features" && <ModuleFeatures camper={camper} />}
        {activeSection === "reviews" && <ModalReviews camper={camper} />}
      </div>
    </section>
  );
};

export default Modals;
