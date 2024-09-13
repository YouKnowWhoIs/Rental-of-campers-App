import { useDispatch, useSelector } from "react-redux";
import css from "./CampersList.module.css";
import {
  selectError,
  selectFilteredCampers,
  selectLastPages,
  selectPage,
} from "../../redux/campers/selectors.js";
import { Campers } from "../Campers/Campers.jsx";
import { useEffect, useState } from "react";
import { HeartsBarLoader } from "../Loader/HeartsBar/HeartsBar.jsx";
import { changeFilter } from "../../redux/filter/filtersSlice.js";
import { getStartCampers } from "../../redux/campers/operations.js";
import { incrementPage } from "../../redux/campers/campersSlice.js";

const CampersList = () => {
  const lastPage = useSelector(selectLastPages);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(<HeartsBarLoader />);

  const error = useSelector(selectError);
  const filterCampers = useSelector(selectFilteredCampers);
  const page = useSelector(selectPage);
  const visibleCount = filterCampers.length > 0;

  useEffect(() => {
    if (page === 1) {
      dispatch(getStartCampers());
      dispatch(
        changeFilter({
          location: "",
          airConditioner: false,
          automatic: false,
          kitchen: false,
          TV: false,
          shower: false,
          type: "",
        })
      );
    }
  }, [dispatch, page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Sorry, nothing found!");
    }, 3000);

    return () => clearTimeout(timer);
  });

  const initialValues = {
    location: "",
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
    type: "",
  };

  const handleShowMore = () => {
    dispatch(changeFilter(initialValues));
    dispatch(incrementPage());
  };

  return (
    <>
      <ul className={css.listConteiner}>
        {error && (
          <span className={css.messageText}>Something went wrong!</span>
        )}
        {visibleCount ? (
          filterCampers.map((camper) => (
            <Campers key={camper._id} camper={camper} />
          ))
        ) : (
          <span className={css.messageText}>{message}</span>
        )}
      </ul>

      {visibleCount && !lastPage && (
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
