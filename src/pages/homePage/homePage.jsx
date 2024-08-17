import css from "./homePage.module.css";
import { Navigation } from "../../components/navigation/navigation";

const HomePage = () => {
  return (
    <>
      <div className={css.conteiner}>
        <Navigation />
      </div>
      <div>Welcome!</div>
    </>
  );
};

export default HomePage;
