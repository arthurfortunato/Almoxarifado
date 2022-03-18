import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Products } from "../pages/CreateProduct";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};
