import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Store from "./context/Store";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import UseTerms from "./pages/UseTerms";
import RegisterProducts from "./pages/RegisterProducts";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/UserPage";
import AdminPanel from "./components/AdminPanel";
import DeleteProduct from "./pages/DeleteProduct";
import ShoppingCart from "./pages/ShoppingCart";

ReactDOM.render(
  <Store>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/use-terms" element={<UseTerms />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route
            path="/admin-panel/register-product"
            element={<RegisterProducts />}
          />
          <Route
            path="/admin-panel/delete-product"
            element={<DeleteProduct />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Store>,
  document.getElementById("root")
);
