import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";

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
import DeleteProduct from "./pages/DeleteProduct";
import UpdateProduct from "./pages/UpdateProduct";
import ShoppingCart from "./pages/ShoppingCart";
import PaymentMethod from "./components/PaymentMethod";
import UpdateUser from "./pages/UpdateUser";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import { UserContextProvider } from "./context/User";

ReactDOM.render(
    <UserContextProvider>
        <Store>
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/catalog" exact element={<Catalog />} />
                        <Route path="/register" exact element={<Register />} />
                        <Route
                            path="/forgot-password"
                            exact
                            element={<ForgotPassword />}
                        />
                        <Route path="/use-terms" exact element={<UseTerms />} />
                        <Route
                            path="/product/:id"
                            exact
                            element={<ProductPage />}
                        />
                        <Route path="/user/:id" exact element={<UserPage />} />
                        <Route
                            path="/shopping-cart"
                            exact
                            element={<ShoppingCart />}
                        />
                        <Route
                            exact
                            path="/admin-panel/register-product"
                            element={<RegisterProducts />}
                        />
                        <Route
                            exact
                            path="/admin-panel/delete-product"
                            element={<DeleteProduct />}
                        />
                        <Route
                            exact
                            path="/admin-panel/update-product"
                            element={<UpdateProduct />}
                        />
                        <Route
                            path="/admin-panel/update-user"
                            exact
                            element={<UpdateUser />}
                        />
                        <Route
                            path="/user/payment-method"
                            exact
                            element={<PaymentMethod />}
                        />
                        <Route
                            path="/purchase-success"
                            exact
                            element={<PurchaseSuccess />}
                        />
                        <Route
                            exact
                            path="/checkout/purchase-success"
                            element={<PurchaseSuccess />}
                        />
                        <Route
                            path="*"
                            element={<p>There's nothing here: 404!</p>}
                        />
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </Store>
    </UserContextProvider>,
    document.getElementById("root")
);
