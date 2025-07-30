// ** Components
import Footer from "../components/Footer";
import NavBar from "../components/navbar/NavBar";
// ** Pages
import Home from './../pages/Home';




export default function MainLayout() {
    return (
        <>
            <NavBar />
            <Home />
            <Footer />
        </>
    )
}