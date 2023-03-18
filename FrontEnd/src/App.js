import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";
import PizzaList from "./components/PizzaList";
import CategoryForm from "./components/CategoryForm";
import MainLayout from "./pages/MainLayout";
import PizzaForm from "./components/PizzaForm";
import IngredientForm from "./components/IngredientForm";
import Pizze4Category from "./components/Pizze4Category";
import ChiSiamo from "./pages/ChiSiamo";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="chisiamo" element={<ChiSiamo />} />
        <Route path="/menu/:categoryId" element={<Pizze4Category />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/:categoryId" element={<PizzaList />} />
        <Route path="/new-category" element={<CategoryForm />} />
        <Route
          path="/edit-category/:categoryId"
          element={<CategoryForm edit />}
        />
        <Route path="/new-ingredient" element={<IngredientForm />} />
        <Route
          path="/edit-ingredient/:ingredientId"
          element={<IngredientForm edit />}
        />
        <Route path="/new-pizza/:categoryId" element={<PizzaForm />} />
        <Route
          path="/:categoryId/:categoryId/edit-pizza/:pizzaId"
          element={<PizzaForm edit />}
        />
      </Route>
    </Routes>
  );
};

export default App;
