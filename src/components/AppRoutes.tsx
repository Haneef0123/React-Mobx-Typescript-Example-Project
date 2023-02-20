import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllProducts from "./AllProducts";
import Checkout from "./Checkout";
import Login from "./Login";
import ProductView from "./ProductView";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products"/>} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:productId" element={<ProductView />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
