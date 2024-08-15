import CampersList from "../../components/campersList/campersList";
import { Setting } from "../../components/settings/settings";
import css from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={css.conteiner}>
      <Setting />
      <CampersList />
      <p>hello</p>
      <button>Load more</button>
    </div>
  );
};

export default HomePage;
