// ** Hooks && Tools
import { Route, Routes } from "react-router-dom";
// ** 
import MainLayout from "../layouts/MainLayout";
import Product from "../pages/Product";
import Home from "../pages/Home";




export const Routers = ()=>(
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
        </Route>
    </Routes>
)