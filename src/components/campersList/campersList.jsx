import { useDispatch, useSelector } from "react-redux";
import css from "./campersList.module.css";
import {
  selectFilteredCampers,
  selectPages,
} from "../../redux/campers/selectors.js";
import { Campers } from "../campers/campers";
import { useEffect } from "react";
import { HeartsBarLoader } from "../loader/heartsBar/heartsBar";
import { changeFilter } from "../../redux/filter/filtersSlice.js";
import { getStartCampers } from "../../redux/campers/operations.js";
import { incrementPage } from "../../redux/campers/campersSlice.js";

const CampersList = () => {
  const dispatch = useDispatch();

  const filterCampers = useSelector(selectFilteredCampers);
  const page = useSelector(selectPages);
  const visibleCount = filterCampers.length > 0;

  useEffect(() => {
    if (page === 1) {
      dispatch(getStartCampers());
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
    }
  }, [dispatch, page]);

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
    dispatch(incrementPage());
    dispatch(changeFilter(initialValues));
  };

  return (
    <>
      <ul className={css.listConteiner}>
        {filterCampers.length > 0 ? (
          filterCampers.map((camper) => (
            <Campers key={camper._id} camper={camper} />
          ))
        ) : (
          <HeartsBarLoader />
        )}
      </ul>

      {visibleCount && (
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
