import css from "./HomePage.module.css";
import { Navigation } from "../../components/Navigation/Navigation.jsx";
import { HomeWelkome } from "../../components/HomeWelcome/HomeWelkome.jsx";

const HomePage = () => {
  return (
    <>
      <div className={css.conteiner}>
        <Navigation />
      </div>
      <HomeWelkome />
    </>
  );
};

export default HomePage;
