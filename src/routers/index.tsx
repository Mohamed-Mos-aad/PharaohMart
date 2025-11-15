// ** Hooks && Tools
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// ** Middleware
import { ProtectedAuthRoutes, ProtectedDashboardRoutes } from "./ProtectedRoute";
// ** Main Pages
const MainLayout = lazy(()=> import('../layouts/MainLayout')) 
const Product = lazy(()=> import('../pages/Product')) 
const Home = lazy(()=> import('../pages/Home'))
const CategoryProducts = lazy(()=> import('../pages/CategoryProducts')) 
const SearchProducts = lazy(()=> import('../pages/SearchProducts')) 
const Cart = lazy(()=> import('../pages/main/Cart'))
const Favourite = lazy(()=> import('../pages/main/Favourite')) 
const Checkout = lazy(()=> import('../pages/main/Checkout')) 

// Auth Pages
const AuthLayout = lazy(()=> import('../layouts/AuthLayout')) 
const Welcome = lazy(()=> import('../pages/auth/Welcome')) 
const SignUp = lazy(()=> import('../pages/auth/SignUp')) 
const LogIn = lazy(()=> import('../pages/auth/LogIn'))
const Otp = lazy(()=> import('../pages/auth/Otp'))
const Success = lazy(()=> import('../pages/auth/Success')) 
// ** Dashboard Pages
const DashboardLayout = lazy(()=> import('../layouts/DashboardLayout')) 
const Dashboard = lazy(()=> import('../pages/dashboard/Dashboard')) 
const DashboardProducts = lazy(()=> import('../pages/dashboard/DashboardProducts')) 
const AddProduct = lazy(()=> import('../pages/dashboard/AddProduct')) 
const Orders = lazy(()=> import('../pages/dashboard/Orders')) 
const Inventory = lazy(()=> import('../pages/dashboard/Inventory')) 
const Payments = lazy(()=> import('../pages/dashboard/Payments')) 
const Setting = lazy(()=> import('../pages/dashboard/Setting')) 
const Help = lazy(()=> import('../pages/dashboard/Help'))
const ChatLayout = lazy(()=> import('../layouts/ChatLayout')) 
const Analytics = lazy(()=> import('../pages/dashboard/Analytics')) 




export const Routers = ()=>(
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="categories/:id" element={<CategoryProducts />} />
                <Route path="search/:id" element={<SearchProducts />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="favourite" element={<Favourite />} />
            </Route>
            <Route path="/u" element={<ProtectedAuthRoutes><AuthLayout /></ProtectedAuthRoutes>}>
                    <Route index element={<Welcome />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="login" element={<LogIn />} />
                    <Route path="otp" element={<Otp />} />
                    <Route path="success" element={<Success />} />
            </Route>
            <Route path="/dashboard" element={<ProtectedDashboardRoutes><DashboardLayout /></ProtectedDashboardRoutes>}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<DashboardProducts />} />
                <Route path="addProduct" element={<AddProduct />} />
                <Route path="orders" element={<Orders />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="payment" element={<Payments />} />
                <Route path="setting" element={<Setting />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="help" element={<Help />} />
            </Route>
            <Route path="messages" element={<ChatLayout />} />
        </Routes>
    </Suspense>

)