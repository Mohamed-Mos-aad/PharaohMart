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
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';



export default function DashboardNavBar() {
    // ** Defaults
    const location = useLocation();



    // ** States
    const [activePage,setActivePage] = useState<string>('');



    // ** Handlers
    const selectPageHandler = (page:string)=>{
        setActivePage(page);
    }



    // ** UseEffect
    useEffect(()=>{
        const parts = location.pathname.split('/');
        const page = parts[2];
        if(!page)
        {
            setActivePage('');
        }
        else
        {
            setActivePage(page);
        }
    },[location])
    


    return (
        <>
            <div className={style.dashboard_navBar}>
                <ul>
                    <li className={activePage === '' ? style.active : ''} onClick={()=>{selectPageHandler('')}}>
                        <Link to={'/dashboard'}>
                            <img src={dashboardIcon} alt="dashboard icon" />
                            dashboard
                        </Link>
                    </li>
                    <li className={activePage === 'products' ? style.active : ''} onClick={()=>{selectPageHandler('products')}}>
                        <Link to={'/dashboard/products'}>
                            <img src={productsIcon} alt="products icon" />
                            products
                        </Link>
                    </li>
                    <li className={activePage === 'addProduct' ? style.active : ''} onClick={()=>{selectPageHandler('addProduct')}}>
                        <Link to={'/dashboard/addProduct'}>
                            <img src={addProductIcon} alt="addProduct icon" />
                            addProduct
                        </Link>
                    </li>
                    <li className={activePage === 'orders' ? style.active : ''} onClick={()=>{selectPageHandler('orders')}}>
                        <Link to={'/dashboard/orders'}>
                            <img src={ordersIcon} alt="orders icon" />
                            orders
                        </Link>
                    </li>
                    <li className={activePage === 'Inventory' ? style.active : ''} onClick={()=>{selectPageHandler('Inventory')}}>
                        <Link to={'/dashboard/Inventory'}>
                            <img src={productsIcon} alt="products icon" />
                            Inventory
                        </Link>
                    </li>
                    <li className={activePage === 'messages' ? style.active : ''} onClick={()=>{selectPageHandler('messages')}}>
                        <Link to={'/dashboard/messages'}>
                            <img src={messagesIcon} alt="messages icon" />
                            messages
                        </Link>
                    </li>
                    <li className={activePage === 'payment' ? style.active : ''} onClick={()=>{selectPageHandler('payment')}}>
                        <Link to={'/dashboard/payment'}>
                            <img src={paymentIcon} alt="payment icon" />
                            payment
                        </Link>
                    </li>
                    <li className={activePage === 'setting' ? style.active : ''} onClick={()=>{selectPageHandler('setting')}}>
                        <Link to={'/dashboard/setting'}>
                            <img src={settingIcon} alt="setting icon" />
                            setting
                        </Link>
                    </li>
                    <li className={activePage === 'analytics' ? style.active : ''} onClick={()=>{selectPageHandler('analytics')}}>
                        <Link to={'/dashboard/analytics'}>
                            <img src={analyticsIcon} alt="analytics icon" />
                            analytics
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className={activePage === 'help' ? style.active : ''} onClick={()=>{selectPageHandler('help')}}>
                        <Link to={'/dashboard/Help'}>
                            <img src={helpIcon} alt="Help icon" />
                            Help
                        </Link>
                    </li>
                    <li>
                        <img src={logoutIcon} alt="Logout icon" />
                        Logout
                    </li>
                </ul>
            </div>
        </>
    )
}