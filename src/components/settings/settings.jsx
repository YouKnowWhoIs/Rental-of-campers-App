import { CiLocationOn } from "react-icons/ci";
import { FiTv } from "react-icons/fi";
import { LuShowerHead } from "react-icons/lu";
import { AiOutlineMerge } from "react-icons/ai";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { TbCamper } from "react-icons/tb";
import { RiCaravanLine } from "react-icons/ri";
import { FaCaravan } from "react-icons/fa";
import css from "./settings.module.css";
import { useState } from "react";

export const Setting = () => {
  const [filters, setFilters] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  });
  const [selectedVehicleType, setSelectedVehicleType] = useState("");

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: !prevFilters[name],
    }));
  };

  const handleRadioChange = (event) => {
    setSelectedVehicleType(event.target.value);
  };

  return (
    <div className={css.settingConteiner}>
      <div>
        <p className={css.textStyle}>Location</p>
        <CiLocationOn className={css.iconLocation} />
        <input
          className={css.locationInput}
          type="text"
          placeholder="City, Country"
        />
      </div>
      <div className={css.styleSpan}>
        <p className={css.textStyle}>Filter</p>
        <h3 className={css.styleTextH}>Vehicle equipment</h3>
      </div>
      <div className={css.nameSquare}>
        <label
          className={`${css.filterStyle} ${filters.ac ? css.active : ""}`}
          onClick={() => handleCheckboxChange({ target: { name: "ac" } })}
        >
          <input
            type="checkbox"
            name="ac"
            checked={filters.ac}
            onChange={handleCheckboxChange}
            className={css.hiddenCheckbox}
          />
          <FaWind className={css.iconFilterStyle} />
          AC
        </label>
        <label
          className={`${css.filterStyle} ${
            filters.automatic ? css.active : ""
          }`}
          onClick={() =>
            handleCheckboxChange({ target: { name: "automatic" } })
          }
        >
          <input
            type="checkbox"
            name="automatic"
            checked={filters.automatic}
            onChange={handleCheckboxChange}
            className={css.hiddenCheckbox}
          />
          <AiOutlineMerge className={css.iconFilterStyle} />
          Automatic
        </label>
        <label
          className={`${css.filterStyle} ${filters.kitchen ? css.active : ""}`}
          onClick={() => handleCheckboxChange({ target: { name: "kitchen" } })}
        >
          <input
            type="checkbox"
            name="kitchen"
            checked={filters.kitchen}
            onChange={handleCheckboxChange}
            className={css.hiddenCheckbox}
          />
          <TbToolsKitchen2 className={css.iconFilterStyle} />
          Kitchen
        </label>
        <label
          className={`${css.filterStyle} ${filters.tv ? css.active : ""}`}
          onClick={() => handleCheckboxChange({ target: { name: "tv" } })}
        >
          <input
            type="checkbox"
            name="tv"
            checked={filters.tv}
            onChange={handleCheckboxChange}
            className={css.hiddenCheckbox}
          />
          <FiTv className={css.iconFilterStyle} />
          TV
        </label>
        <label
          className={`${css.filterStyle} ${filters.shower ? css.active : ""}`}
          onClick={() => handleCheckboxChange({ target: { name: "shower" } })}
        >
          <input
            type="checkbox"
            name="shower"
            checked={filters.shower}
            onChange={handleCheckboxChange}
            className={css.hiddenCheckbox}
          />
          <LuShowerHead className={css.iconFilterStyle} />
          Shower/WC
        </label>
      </div>

      <div className={css.styleSpan}>
        <h3 className={css.styleTextH}>Vehicle type</h3>
      </div>
      <div className={css.nameSquare}>
        <label
          className={`${css.filterStyle} ${
            selectedVehicleType === "van" ? css.active : ""
          }`}
          onClick={() => setSelectedVehicleType("van")}
        >
          <input
            type="radio"
            name="vehicleType"
            value="van"
            checked={selectedVehicleType === "van"}
            onChange={handleRadioChange}
            className={css.hiddenRadio}
          />
          <TbCamper className={css.iconCamperStyle} />
          Van
        </label>
        <label
          className={`${css.filterStyle} ${
            selectedVehicleType === "fully-integrated" ? css.active : ""
          }`}
          onClick={() => setSelectedVehicleType("fully-integrated")}
        >
          <input
            type="radio"
            name="vehicleType"
            value="fully-integrated"
            checked={selectedVehicleType === "fully-integrated"}
            onChange={handleRadioChange}
            className={css.hiddenRadio}
          />
          <FaCaravan className={css.iconCamperStyle} />
          Fully Integrated
        </label>
        <label
          className={`${css.filterStyle} ${
            selectedVehicleType === "alcove" ? css.active : ""
          }`}
          onClick={() => setSelectedVehicleType("alcove")}
        >
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            checked={selectedVehicleType === "alcove"}
            onChange={handleRadioChange}
            className={css.hiddenRadio}
          />
          <RiCaravanLine className={css.iconCamperStyle} />
          Alcove
        </label>
      </div>

      <button className={css.buttonStyle} type="button">
        Search
      </button>
    </div>
  );
};
