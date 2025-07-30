// ** Style
import style from '../style/layouts/mainLayout.module.css'
// ** Components
import Footer from "../components/Footer";
import NavBar from "../components/navbar/NavBar";
// ** Hooks && Tools
import { Outlet } from "react-router";




export default function MainLayout() {
    return (
        <>
            <div className={style.main_content}>
                <NavBar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}