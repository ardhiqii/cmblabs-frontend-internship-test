import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Category/Detail/Detail";
import CategoryPage from "./pages/Category/CategoryPage";
import Meal from "./pages/Meal/Meal";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/:categoryName" element={<Detail />} />
        <Route path="/meal/:idMeal" element={<Meal />} />
      </Routes>
    </>
  );
}

export default App;
