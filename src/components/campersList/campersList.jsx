import { useSelector } from "react-redux";
import css from "./campersList.module.css";
import {
  selectCampers,
  selectFilteredCampers,
} from "../../redux/campers/campersSlice";
import { Campers } from "../campers/campers";
import { useState } from "react";
import { HeartsBarLoader } from "../loader/heartsBar/heartsBar";

const CampersList = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const filterCampers = useSelector(selectCampers);
  const test = useSelector(selectFilteredCampers);

  console.log(test);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (!filterCampers || filterCampers.length === 0) {
    return <HeartsBarLoader />;
  }

  return (
    <div>
      <ul className={css.listConteiner}>
        {filterCampers.length > 0 ? (
          filterCampers
            .slice(0, visibleCount)
            .map((camper) => <Campers key={camper._id} camper={camper} />)
        ) : (
          <HeartsBarLoader />
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
