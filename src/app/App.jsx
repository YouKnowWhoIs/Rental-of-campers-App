import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { fetchCampers } from "../redux/campers/operations.js";
import { ProgressBarLoader } from "../components/Loader/ProgressBar/ProgressBar.jsx";
import { selectPage } from "../redux/campers/selectors.js";
import { changeFilter } from "../redux/filter/filtersSlice.js";

const HomePage = lazy(() => import("../pages/homePage/homePage.jsx"));
const FavoritesPage = lazy(() =>
  import("../pages/favoritesPage/favoritesPage.jsx")
);
const CatalogPage = lazy(() => import("../pages/catalogPage/catalogPage.jsx"));

function App() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCampers(page));
      dispatch(
        changeFilter({
          location: "",
          airConditioner: false,
          automatic: false,
          kitchen: false,
          TV: false,
          shower: false,
          type: "",
        })
      );
    }
  }, [dispatch, page]);

  return (
    <Suspense fallback={<ProgressBarLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
