import { useDispatch, useSelector } from "react-redux";
import css from "./campersList.module.css";
import {
  // selectCampers,
  selectFilteredCampers,
} from "../../redux/campers/selectors.js";
import { Campers } from "../campers/campers";
import { useEffect, useState } from "react";
import { HeartsBarLoader } from "../loader/heartsBar/heartsBar";
import { changeFilter } from "../../redux/filter/filtersSlice.js";

const CampersList = () => {
  const dispatch = useDispatch();

  const [visibleCount, setVisibleCount] = useState(4);
  const filterCampers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(
      changeFilter({
        location: "",
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        shower: false,
        vehicleType: "",
      })
    );
  }, [dispatch]);

  const initialValues = {
    location: "",
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
    vehicleType: "",
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
    dispatch(changeFilter(initialValues));
  };

  if (!filterCampers || filterCampers.length === 0) {
    return <HeartsBarLoader />;
  }

  return (
    <>
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
    </>
  );
};

export default CampersList;
