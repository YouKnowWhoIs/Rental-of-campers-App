import { BsPeople } from "react-icons/bs";
import { AiOutlineMerge } from "react-icons/ai";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiDiscDuotone } from "react-icons/pi";
import { MdOutlineRadio } from "react-icons/md";
import { MdOutlineMicrowave } from "react-icons/md";
import css from "./modalFeatures.module.css";
import { BookForm } from "../form/bookForm";

export const ModuleFeatures = ({ camper }) => {
  return (
    <div>
      <div>
        <BookForm />
      </div>
      <div className={css.conteinerDetails}>
        <div className={css.detailsList}>
          <span className={css.details}>
            <BsPeople className={css.iconDetails} />
            {camper.adults} adults
          </span>
          <span className={css.details}>
            <AiOutlineMerge className={css.iconDetails} />
            {camper.transmission}
          </span>
          <span className={css.details}>
            <MdOutlineLocalGasStation className={css.iconDetails} />
            {camper.engine}
          </span>
          <span className={css.details}>
            <TbToolsKitchen2 className={css.iconDetails} />
            {camper.kitchen} kitchen
          </span>
          <span className={css.details}>
            <IoBedOutline className={css.iconDetails} />
            {camper.details.beds} beds
          </span>
          <span className={css.details}>
            <FaWind className={css.iconDetails} />
            AC
          </span>
          <span className={css.details}>
            <TbAirConditioning className={css.iconDetails} />
            {camper.details.airConditioner} air conditioner
          </span>
          <span className={css.details}>
            <PiDiscDuotone className={css.iconDetails} /> CD
          </span>
          <span className={css.details}>
            <MdOutlineRadio className={css.iconDetails} /> Radio
          </span>
          <span className={css.details}>
            <MdOutlineMicrowave className={css.iconDetails} />
            {camper.details.hob} hob
          </span>
        </div>
        <div className={css.vehicleDetails}>
          <span className={css.vehicleDetailsText}>Vehicle details</span>
        </div>
        <table className={css.table}>
          <thead>
            <tr>
              <td className={css.tableTdName}>Form</td>
              <td className={css.tableTdNumber}>{camper.form}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td className={css.tableTdName}>Length</td>
              <td className={css.tableTdNumber}>{camper.length}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td className={css.tableTdName}>Width</td>
              <td className={css.tableTdNumber}>{camper.width}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td className={css.tableTdName}>Height</td>
              <td className={css.tableTdNumber}>{camper.height}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td className={css.tableTdName}>Tank</td>
              <td className={css.tableTdNumber}>{camper.tank}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td className={css.tableTdName}>Consumption</td>
              <td className={css.tableTdNumber}>{camper.consumption}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
