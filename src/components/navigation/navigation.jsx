import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.conteinerNavigation}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${css.navigationStyle} ${isActive ? css.active : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          `${css.navigationStyle} ${isActive ? css.active : ""}`
        }
      >
        Catalog
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `${css.navigationStyle} ${isActive ? css.active : ""}`
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
};
