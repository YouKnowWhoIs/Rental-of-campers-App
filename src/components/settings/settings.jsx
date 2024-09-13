import { CiLocationOn } from "react-icons/ci";
import { FiTv } from "react-icons/fi";
import { LuShowerHead } from "react-icons/lu";
import { AiOutlineMerge } from "react-icons/ai";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { TbCamper } from "react-icons/tb";
import { RiCaravanLine } from "react-icons/ri";
import { FaCaravan } from "react-icons/fa";
import css from "./Settings.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filtersSlice";

export const Settings = () => {
  const dispatch = useDispatch();

  const initialValues = {
    location: "",
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
    type: "",
  };

  const handleSubmit = (values) => {
    dispatch(changeFilter(values));
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.settingConteiner}>
        <label className={css.textStyle}>
          Location
          <CiLocationOn className={css.iconLocation} />
          <Field
            className={css.locationInput}
            name="location"
            type="text"
            placeholder="City, Country"
          />
        </label>

        <div className={css.styleSpan}>
          <h2 className={css.textStyle}>Filter</h2>
          <h3 className={css.styleTextH}>Vehicle equipment</h3>
        </div>

        <div className={css.nameSquare}>
          <label className={css.filterStyle}>
            <Field
              type="checkbox"
              name="airConditioner"
              className={css.hiddenCheckbox}
            />
            <FaWind className={css.iconFilterStyle} />
            <span>AC</span>
          </label>

          <label className={css.filterStyle}>
            <Field
              type="checkbox"
              name="automatic"
              className={css.hiddenCheckbox}
            />
            <AiOutlineMerge className={css.iconFilterStyle} />
            <span>Automatic</span>
          </label>

          <label className={css.filterStyle}>
            <Field
              type="checkbox"
              name="kitchen"
              className={css.hiddenCheckbox}
            />
            <TbToolsKitchen2 className={css.iconFilterStyle} />
            <span>Kitchen</span>
          </label>

          <label className={css.filterStyle}>
            <Field type="checkbox" name="TV" className={css.hiddenCheckbox} />
            <FiTv className={css.iconFilterStyle} />
            <span>TV</span>
          </label>

          <label className={css.filterStyle}>
            <Field
              type="checkbox"
              name="shower"
              className={css.hiddenCheckbox}
            />
            <LuShowerHead className={css.iconFilterStyle} />
            <span>Shower</span>
          </label>
        </div>

        <div className={css.styleSpan}>
          <h3 className={css.styleTextH}>Vehicle type</h3>
        </div>

        <div className={css.nameSquare}>
          <label className={css.filterStyle}>
            <Field
              type="radio"
              name="type"
              value="panelTruck"
              className={css.hiddenRadio}
            />
            <TbCamper className={css.iconCamperStyle} />
            <span>Van</span>
          </label>

          <label className={css.filterStyle}>
            <Field
              type="radio"
              name="type"
              value="fullyIntegrated"
              className={css.hiddenRadio}
            />
            <FaCaravan className={css.iconCamperStyle} />
            <span>Fully Integrated</span>
          </label>

          <label className={css.filterStyle}>
            <Field
              type="radio"
              name="type"
              value="alcove"
              className={css.hiddenRadio}
            />
            <RiCaravanLine className={css.iconCamperStyle} />
            <span>Alcove</span>
          </label>
        </div>

        <button className={css.buttonStyle} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};
