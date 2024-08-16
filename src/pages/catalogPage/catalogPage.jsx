import CampersList from "../../components/campersList/campersList.jsx";
import { Navigation } from "../../components/navigation/navigation.jsx";
import { Setting } from "../../components/settings/settings.jsx";
import css from "./catalogPage.module.css";

const HomePage = () => {
  return (
    <div className={css.conteiner}>
      <Navigation />
      <Setting />
      <CampersList />
    </div>
  );
};

export default HomePage;
