import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Products } from "../pages/CreateProduct";
import { ProductsList } from "../pages/ListProducts";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
};
