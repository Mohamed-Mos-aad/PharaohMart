// ** Style
import style from '../style/layouts/authLayout.module.css'
// ** Components
import Footer from "../components/Footer";
import NavBar from "../components/navbar/NavBar";
// ** Hooks && Tools
import { Outlet } from "react-router";


export default function AuthLayout() {
    return (
        <>
            <div className={style.auth_layout}>
                <NavBar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
