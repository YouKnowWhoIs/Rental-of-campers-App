import { useSelector } from "react-redux";
import css from "./campersList.module.css";
import { selectCampers } from "../../redux/campers/campersSlice";
import { Campers } from "../campers/campers";

const CampersList = () => {
  const filterCampers = useSelector(selectCampers);
  // console.log(JSON.stringify(campers, null, 2));

  return (
    <ul className={css.listConteiner}>
      {filterCampers && filterCampers.length > 0 ? (
        filterCampers.map((camper) => (
          <Campers key={camper._id} camper={camper} />
        ))
      ) : (
        <p>loading...</p>
      )}
    </ul>
  );
};

export default CampersList;
