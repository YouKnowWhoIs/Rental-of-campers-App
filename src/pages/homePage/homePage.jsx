import css from "./homePage.module.css";
import { Navigation } from "../../components/navigation/navigation";
import { HomeWelkome } from "../../components/homeWelcome/homeWelkome";

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
