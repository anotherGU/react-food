import "./App.css";
import CategoriesList from "./components/Categories/CategoriesList";
import Fullscreen from "./components/Fullscreen/Fullscreen";
import Sushi from "./pages/Sushi/Sushi";
import Pizza from "./pages/Pizza/Pizza";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Snacks from "./pages/Snacks/Snacks";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Fullscreen />
              <CategoriesList />
            </>
          }
          exact
        />
        <Route
          path="/sushi"
          element={
            <>
              <Fullscreen />
              <Sushi />
            </>
          }
        />
        <Route
          path="/pizza"
          element={
            <>
              <Fullscreen />
              <Pizza />
            </>
          }
        />
        <Route
          path="/hamburgers"
          element={
            <>
              <Fullscreen />
              <Hamburgers />
            </>
          }
        />
        <Route
          path="/snacks"
          element={
            <>
              <Fullscreen />
              <Snacks />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
