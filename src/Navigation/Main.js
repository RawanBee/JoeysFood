import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Recipe from "../Pages/Recipe";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
