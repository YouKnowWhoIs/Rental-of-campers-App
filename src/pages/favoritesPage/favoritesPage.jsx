import css from "./favoritesPage.module.css";
import { Navigation } from "../../components/navigation/navigation";
import { useEffect, useState } from "react";
import { Campers } from "../../components/campers/campers";
import { HeartsBarLoader } from "../../components/loader/heartsBar/heartsBar";

const FavoritesPage = () => {
  const [isFavoriteList, setIsFavoriteList] = useState([]);

  useEffect(() => {
    const storageFavorites = localStorage.getItem("favorites");
    const data = storageFavorites ? JSON.parse(storageFavorites) : [];

    setIsFavoriteList(data);

    console.log(data);
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
          <div>
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
