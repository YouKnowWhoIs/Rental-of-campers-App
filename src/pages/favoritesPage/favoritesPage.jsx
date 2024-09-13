import css from "./FavoritesPage.module.css";
import { Navigation } from "../../components/Navigation/Navigation.jsx";
import { useEffect, useState } from "react";
import { Campers } from "../../components/Campers/Campers.jsx";
import { HeartsBarLoader } from "../../components/Loader/HeartsBar/HeartsBar.jsx";

const FavoritesPage = () => {
  const [isFavoriteList, setIsFavoriteList] = useState([]);

  useEffect(() => {
    const storageFavorites = localStorage.getItem("favorites");
    const data = storageFavorites ? JSON.parse(storageFavorites) : [];

    setIsFavoriteList(data);
  }, []);

  return (
    <>
      <div className={css.conteiner}>
        <div>
          <Navigation />
        </div>
        {isFavoriteList && isFavoriteList.length > 0 ? (
          isFavoriteList.map((camper) => (
            <Campers key={camper._id} camper={camper} />
          ))
        ) : (
          <div className={css.favoriteStyle}>
            <HeartsBarLoader />
            <span className={css.noFavoritesText}>
              No favorites yet. But you can fix it!
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;
