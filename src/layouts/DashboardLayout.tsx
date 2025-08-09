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
        if(window.innerWidth > 768)
        {
            setGoodScreen(true)
        }
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
                        <h1>Open on Tablet & Pc</h1>                        
                    </div>
                }
            </div>
        </>
    )
}
