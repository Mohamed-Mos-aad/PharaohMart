// ** Style
import style from '../style/layouts/dashboardLayout.module.css'
// ** Hooks && Tools
import { Outlet } from "react-router";
import { useEffect, useState } from 'react';
// ** Components
import DashboardNavBar from "../components/navbar/DashboardNavBar";



export default function DashboardLayout() {
    // ** States
    const [goodScreen,setGoodScreen] = useState<boolean>(false);



    // ** UseEffect
    useEffect(()=>{
        const handleResize = () => {
            setGoodScreen(window.innerWidth > 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])


    
    return (
        <>
            <div className={style.dashboard_layout}>
                {
                    goodScreen ?
                    <>
                        <DashboardNavBar />
                        <Outlet />
                    </>
                    :
                    <div className={style.bad_screen}>
                        <h1>Open on Pc</h1>                        
                    </div>
                }
            </div>
        </>
    )
}
