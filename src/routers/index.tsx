// ** Hooks && Tools
import { Route, Routes } from "react-router-dom";
// ** Main Pages
import MainLayout from "../layouts/MainLayout";
import Product from "../pages/Product";
import Home from "../pages/Home";
import CategoryProducts from "../pages/CategoryProducts";
import Cart from "../pages/main/Cart";
import Favourite from "../pages/main/Favourite";
import Checkout from "../pages/main/Checkout";
// Auth Pages
import AuthLayout from "../layouts/AuthLayout";
import Welcome from "../pages/auth/Welcome";
import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import Otp from "../pages/auth/Otp";
import Success from "../pages/auth/Success";
// ** Dashboard Pages
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";



export const Routers = ()=>(
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="categories/:id" element={<CategoryProducts />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="favourite" element={<Favourite />} />
        </Route>
        <Route path="/u" element={<AuthLayout />}>
            <Route index element={<Welcome />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="Login" element={<LogIn />} />
            <Route path="otp" element={<Otp />} />
            <Route path="success" element={<Success />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
        </Route>
    </Routes>
)