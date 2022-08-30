import React from "react";
import { Route, Routes } from "react-router-dom";

import ProductPage from "../pages/ProductPage";
import Cart from "../../src/components/User/Cart";
import Login from "../../src/components/User/Login";
import Signup from "../../src/components/User/Signup";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AllRoutes;