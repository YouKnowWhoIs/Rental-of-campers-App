import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getAllCampers } from "../redux/campers/operations.js";

const HomePage = lazy(() => import("../pages/homePage/homePage.jsx"));
const FavoritesPage = lazy(() =>
  import("../pages/favoritesPage/favoritesPage.jsx")
);
const CatalogPage = lazy(() => import("../pages/catalogPage/catalogPage.jsx"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
