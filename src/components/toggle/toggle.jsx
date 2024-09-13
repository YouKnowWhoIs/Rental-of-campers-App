import css from "./Toggle.module.css";

export const Toggle = ({ value, onChange }) => {
  return (
    <label className={css.switch}>
      <input
        className={css.toggler}
        type="checkbox"
        onChange={onChange}
        checked={value}
      />
      <span className={css.check} />
    </label>
  );
};
