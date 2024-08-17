import { useEffect, useState } from "react";
import { BsPeople } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMerge } from "react-icons/ai";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import css from "./campers.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import Modals from "../modals/modals";

export const Campers = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const formattePrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
  }).format(camper.price);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  if (isModalOpen) {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleBackdropClick);
  } else {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("click", handleBackdropClick);
  }

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const camperData = {
      _id: camper._id,
      name: camper.name,
      adults: camper.adults,
      children: camper.children,
      consumption: camper.consumption,
      description: camper.description,
      details: camper.details,
      engine: camper.engine,
      form: camper.form,
      gallery: camper.gallery,
      height: camper.height,
      length: camper.length,
      location: camper.location,
      price: camper.price,
      rating: camper.rating,
      reviews: camper.reviews,
      tank: camper.tank,
      transmission: camper.transmission,
      width: camper.width,
    };

    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav._id !== camper._id)
      : [...favorites, camperData];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const storageFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = storageFavorites.some((fav) => fav._id === camper._id);
    setIsFavorite(isFav);
  }, [camper]);

  return (
    <div>
      <li className={css.list}>
        <img
          src={camper.gallery[0]}
          alt={camper.name}
          className={css.imgList}
        />

        <div>
          <h1 className={css.hStyle}>{camper.name}</h1>
          <h2 className={css.priceStyle}>
            {formattePrice}
            <button className={css.buttonLike} onClick={handleFavorite}>
              {isFavorite ? (
                <FaHeart className={css.iconActivLike} />
              ) : (
                <FaRegHeart className={css.iconDisableLike} />
              )}
            </button>
          </h2>
        </div>

        <div className={css.conteinerDetails1}>
          <span className={css.detailRating}>
            <FaStar className={css.iconStar} />
            {camper.rating}({camper.reviews.length} Reviews)
          </span>
          <span className={css.detailLocation}>
            <CiLocationOn className={css.iconLocation} />
            {camper.location}
          </span>
          <p className={css.detailImg}>
            The pictures shown here are example vehicles of the respective.
          </p>
        </div>

        <div className={css.contrinerDetails2}>
          <span className={css.details}>
            <BsPeople className={css.iconDetails} />
            <span className={css.detailsAdults}> {camper.adults} adults</span>
          </span>
          <span className={css.details}>
            <AiOutlineMerge className={css.iconDetails} />
            {camper.transmission}
          </span>
          <span className={css.details}>
            <MdOutlineLocalGasStation className={css.iconDetails} />
            {camper.engine}
          </span>
          <span className={css.details}>
            <TbToolsKitchen2 className={css.iconDetails} />
            {camper.kitchen} kitchen
          </span>
          <span className={css.details}>
            <IoBedOutline className={css.iconDetails} />
            {camper.details.beds} beds
          </span>
          <span className={css.details}>
            <FaWind className={css.iconDetails} />
            AC
          </span>
        </div>

        <div className={css.conteinerButtonDetails}>
          <button onClick={handleOpenModal} className={css.buttonDetails}>
            Show more
          </button>
        </div>
      </li>

      {isModalOpen && (
        <Modals
          camper={camper}
          formattePrice={formattePrice}
          handleCloseModal={handleCloseModal}
          handleBackdropClick={handleBackdropClick}
        />
      )}
    </div>
  );
};
