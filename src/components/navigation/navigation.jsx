import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { Toggle } from "../toggle/toggle";
import { ThemeContext, themes } from "../themeContext/TheamContext.js";

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
      <span>
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer>
      </span>
    </nav>
  );
};
