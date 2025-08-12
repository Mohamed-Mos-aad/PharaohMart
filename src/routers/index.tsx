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
import DashboardProducts from "../pages/dashboard/DashboardProducts";
import AddProduct from "../pages/dashboard/AddProduct";
import Orders from "../pages/dashboard/Orders";
import Inventory from "../pages/dashboard/Inventory";
import Payments from "../pages/dashboard/Payments";
import Setting from "../pages/dashboard/Setting";
import Help from "../pages/dashboard/Help";



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
            <Route path="products" element={<DashboardProducts />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="orders" element={<Orders />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="payment" element={<Payments />} />
            <Route path="setting" element={<Setting />} />
            <Route path="help" element={<Help />} />
        </Route>
    </Routes>
)