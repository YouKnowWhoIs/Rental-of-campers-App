import { useSelector } from "react-redux";
import css from "./campersList.module.css";
import { selectCampers } from "../../redux/campers/campersSlice";
import { Campers } from "../campers/campers";
import { useState } from "react";

const CampersList = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const filterCampers = useSelector(selectCampers);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (!filterCampers || filterCampers.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul className={css.listConteiner}>
        {filterCampers && filterCampers.length > 0 ? (
          filterCampers
            .slice(0, visibleCount)
            .map((camper) => <Campers key={camper._id} camper={camper} />)
        ) : (
          <p>loading...</p>
        )}
      </ul>

      {visibleCount < filterCampers.length && (
        <div className={css.conteinerButtonLoadMore}>
          <button className={css.buttonLoadMore} onClick={handleShowMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default CampersList;
