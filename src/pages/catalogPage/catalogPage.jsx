import CampersList from "../../components/CampersList/CampersList.jsx";
import { Navigation } from "../../components/Navigation/Navigation.jsx";
import { Settings } from "../../components/Settings/Settings.jsx";
import css from "./CatalogPage.module.css";

const HomePage = () => {
  return (
    <div className={css.conteiner}>
      <Navigation />
      <Settings />
      <CampersList />
    </div>
  );
};

export default HomePage;
