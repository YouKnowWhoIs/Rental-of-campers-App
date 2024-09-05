import CampersList from "../../components/campersList/campersList.jsx";
import { Navigation } from "../../components/navigation/navigation.jsx";
import { Settings } from "../../components/settings/settings.jsx";
import css from "./catalogPage.module.css";

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
