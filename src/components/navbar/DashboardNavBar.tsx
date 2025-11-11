// ** Assets
import dashboardIcon from '../../assets/icons/dashboard/dashboardIcon.svg'
import productsIcon from '../../assets/icons/dashboard/productsIcon.svg'
import addProductIcon from '../../assets/icons/dashboard/addProductIcon.svg'
import ordersIcon from '../../assets/icons/dashboard/ordersIcon.svg'
import messagesIcon from '../../assets/icons/dashboard/messagesIcon.svg'
import paymentIcon from '../../assets/icons/dashboard/paymentIcon.svg'
import settingIcon from '../../assets/icons/dashboard/settingIcon.svg'
import analyticsIcon from '../../assets/icons/dashboard/analyticsIcon.svg'
import helpIcon from '../../assets/icons/dashboard/helpIcon.svg'
import logoutIcon from '../../assets/icons/dashboard/logoutIcon.svg'
// ** Style 
import style from '../../style/components/navbar/dashboardNavBar.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'



export default function DashboardNavBar() {
    // ** Defaults
    const location = useLocation();
    const navigate = useNavigate();



    // ** States
    const [activePage,setActivePage] = useState<string>('dashboard');



    // ** Handlers
    const selectPageHandler = (page:string)=>{
        if (page !== 'dashboard'){
            setActivePage(page);
            navigate(`/dashboard/${page}`);
        }
        else {
            setActivePage('dashboard');
            navigate(`/dashboard`)
        }
    }
    const openChatHandler = ()=>{
        navigate(`/messages`)
    }
    const logOutHandler = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        navigate("/u/login");
    }

    

    // ** UseEffect
    useEffect(()=>{
        const parts = location.pathname.split('/');
        const page = parts[2];
        if (page) {
            setActivePage(page);
        } else {
            setActivePage('dashboard');
        }
    },[location])
    


    return (
        <>
            <div className={style.dashboard_navBar}>
                <ul>
                    <li className={activePage === 'dashboard' ? style.active : ''} onClick={()=>{selectPageHandler('dashboard')}}>
                        <img src={dashboardIcon} alt="dashboard icon" />
                        dashboard
                    </li>
                    <li className={activePage === 'products' ? style.active : ''} onClick={()=>{selectPageHandler('products')}}>
                        <img src={productsIcon} alt="products icon" />
                        products
                    </li>
                    <li className={activePage === 'addProduct' ? style.active : ''} onClick={()=>{selectPageHandler('addProduct')}}>
                        <img src={addProductIcon} alt="addProduct icon" />
                        addProduct
                    </li>
                    <li className={activePage === 'orders' ? style.active : ''} onClick={()=>{selectPageHandler('orders')}}>
                        <img src={ordersIcon} alt="orders icon" />
                        orders
                    </li>
                    <li className={activePage === 'Inventory' ? style.active : ''} onClick={()=>{selectPageHandler('Inventory')}}>
                        <img src={productsIcon} alt="products icon" />
                        Inventory
                    </li>
                    <li onClick={openChatHandler}>
                        <img src={messagesIcon} alt="messages icon" />
                        messages
                    </li>
                    <li className={activePage === 'payment' ? style.active : ''} onClick={()=>{selectPageHandler('payment')}}>
                        <img src={paymentIcon} alt="payment icon" />
                        payment
                    </li>
                    <li className={activePage === 'setting' ? style.active : ''} onClick={()=>{selectPageHandler('setting')}}>
                        <img src={settingIcon} alt="setting icon" />
                        setting
                    </li>
                    <li className={activePage === 'analytics' ? style.active : ''} onClick={()=>{selectPageHandler('analytics')}}>
                        <img src={analyticsIcon} alt="analytics icon" />
                        analytics
                    </li>
                </ul>
                <ul>
                    <li className={activePage === 'help' ? style.active : ''} onClick={()=>{selectPageHandler('help')}}>
                        <img src={helpIcon} alt="Help icon" />
                        Help
                    </li>
                    <li onClick={logOutHandler}>
                        <img src={logoutIcon} alt="Logout icon" />
                        Logout
                    </li>
                </ul>
            </div>
        </>
    )
}