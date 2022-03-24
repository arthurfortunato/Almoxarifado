import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Products } from "../pages/CreateProduct";
import { ProductsList } from "../pages/ListProducts";
import EditProducts from "../pages/EditProducts";
import { Login } from "../pages/Login";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useAuth } from "../hooks/useAuth";

export const Router = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user?.id ? <Sidebar /> : ""}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/updatedproduct" element={<ProductsList />} />
        <Route path="/updated/:id" element={<EditProducts />} />
      </Routes>
    </BrowserRouter>
  );
};
