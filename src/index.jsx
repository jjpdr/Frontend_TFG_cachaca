import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import UseTerms from './components/UseTerms';
import RegisterProducts from './components/RegisterProducts'; 
import ProductPage from './components/ProductPage';
import UserPage from './components/UserPage';
import AdminPanel from './components/AdminPanel';
import DeleteProduct from './components/DeleteProduct';
import FacebookLogin from './components/FacebookLogin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />}/>
            <Route path="/forgot-password" element={ <ForgotPassword />} />
            <Route path="/use-terms" element={ <UseTerms /> }/>
            <Route path="/admin-panel" element={ <AdminPanel />} />
            <Route path="/admin-panel/register-product" element={ <RegisterProducts /> } />
            <Route path="/product/:id" element={ < ProductPage />}/>
            <Route path="/user/:id" element={ <UserPage /> }/>
            <Route path="/admin-panel/delete-product" element={ <DeleteProduct /> } />
            <Route path="/test" element={ <FacebookLogin />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);