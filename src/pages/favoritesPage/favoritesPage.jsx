import css from "./favoritesPage.module.css";
import { Navigation } from "../../components/navigation/navigation";

const FavoritesPage = () => {
  return (
    <div className={css.conteiner}>
      <Navigation />
    </div>
  );
};

export default FavoritesPage;
