import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/campersSlice";
// import { Campers } from "../campers/campers";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  console.log(campers);

  return (
    <ul>
      {/* {selectCampers.map((campers) => (
        <Campers key={campers.id} campers={campers} />
      ))} */}
    </ul>
  );
};

export default CampersList;
