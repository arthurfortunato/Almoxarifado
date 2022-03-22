import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Products } from "../pages/CreateProduct";
import { ProductsList } from "../pages/ListProducts";
import EditProducts  from "../pages/EditProducts";
import { Login } from "../pages/Login";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/updatedproducts" element={<ProductsList />} />
        <Route path="/updated/:id" element={<EditProducts />} />
      </Routes>
    </BrowserRouter>
  );
};
