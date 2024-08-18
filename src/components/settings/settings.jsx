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

export const Setting = () => {
  return (
    <div className={css.settingConteiner}>
      <div>
        <p className={css.textStyle}>Location</p>
        <CiLocationOn className={css.iconLocation} />
        <input
          className={css.locationInput}
          type="text"
          placeholder="Location"
        />
      </div>
      <div className={css.styleSpan}>
        <p className={css.textStyle}>Filter</p>
        <h3 className={css.styleTextH}>Vehicle equipment</h3>
      </div>
      <div className={css.nameSquere}>
        <button type="button" className={css.filterStyle}>
          <FaWind className={css.iconFilterStyle} />
          AC
        </button>
        <button type="button" className={css.filterStyle}>
          <AiOutlineMerge className={css.iconFilterStyle} />
          Automatic
        </button>
        <button type="button" className={css.filterStyle}>
          <TbToolsKitchen2 className={css.iconFilterStyle} />
          Kitchen
        </button>
        <button type="button" className={css.filterStyle}>
          <FiTv className={css.iconFilterStyle} />
          TV
        </button>
        <button type="button" className={css.filterStyle}>
          <LuShowerHead className={css.iconFilterStyle} />
          Shower/WC
        </button>
      </div>
      <div className={css.styleSpan}>
        <h3 className={css.styleTextH}>Vehicle type</h3>
      </div>
      <div className={css.nameSquere}>
        <button className={css.filterStyle} type="button">
          <TbCamper className={css.iconCamperStyle} />
          Van
        </button>
        <button className={css.filterStyle} type="button">
          <FaCaravan className={css.iconCamperStyle} />
          Fully Integrated
        </button>
        <button className={css.filterStyle} type="button">
          <RiCaravanLine className={css.iconCamperStyle} />
          Alcove
        </button>
      </div>
      <button className={css.buttonStyle} type="submit">
        Search
      </button>
    </div>
  );
};
