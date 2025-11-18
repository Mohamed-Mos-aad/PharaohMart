// ** Style
import style from '../../style/pages/dashboard/dashboard.module.css'
// ** Components
import DashboardHeader from '../../components/dashboard/DashboardHeader'
// ** Hooks && Tools
import { useEffect, useMemo, useState } from 'react'
// ** Actions
import { getSellerProductsAction } from '../../api/data/productActions'
// ** Interfaces
import type { IProduct } from '../../interfaces'


export default function Dashboard() {
    // **  States
    const [productsData, setProductsData] = useState<IProduct[]>([]);
    const [displayedData, setDisplayedData] = useState<IProduct[]>(productsData);



    // ** Handlers
    const getProductsHandler = async ()=>{
        const result = await getSellerProductsAction();
        setProductsData(result);
        setDisplayedData(result);
    }



    // ** Render
    const productsRender = useMemo(()=>
        displayedData.map(item => 
            <tr key={item.documentId}>
            <td>
                <div className={style.product_img}>
                    <img src={item.mainImage?.url?? ''} alt={item.name} />
                </div>
            </td>
            <td>{item.name}</td>
            <td>0</td>
            <td>{item.stockQuantity}</td>
        </tr>
    ),[displayedData])



    // ** UseEffect
    useEffect(()=>{
        getProductsHandler()
    },[])



    return (
        <>
            <div className="dashboard_container">
                <div className={style.dashboard}>
                    <DashboardHeader title='Dashboard' description="Welcome back, Amelia! Here's an overview of your seller performance."/>
                    <div className={style.dashboard_cards}>
                        <div className={style.card}>
                            <h2>Total Sales (Today)</h2>
                            <h3>$2,500</h3>
                            <span>+15%</span>
                        </div>
                        <div className={style.card}>
                            <h2>Monthly Revenue</h2>
                            <h3>$12,500</h3>
                            <span>-5%</span>
                        </div>
                        <div className={style.card}>
                            <h2>Total Orders</h2>
                            <h3>350</h3>
                            <span>+10%</span>
                        </div>
                        <div className={style.card}>
                            <h2>Live Products</h2>
                            <h3>150</h3>
                            <span>+8%</span>
                        </div>
                    </div>
                    <h4>Top Selling Products</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Units Sold</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsRender}
                        </tbody>
                    </table>
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#98770</td>
                                <td>William Garcia</td>
                                <td>$95</td>
                                <td>
                                    <div>Delivered</div>
                                </td>
                            </tr>
                            <tr>
                                <td>#98771</td>
                                <td>Ava Lopez</td>
                                <td>$60</td>
                                <td>
                                    <div>Shipped</div>
                                </td>
                            </tr>
                            <tr>
                                <td>#98772</td>
                                <td>Benjamin Hernandez</td>
                                <td>$180</td>
                                <td>
                                    <div>Pending</div>
                                </td>
                            </tr>
                            <tr>
                                <td>#98773</td>
                                <td>Isabella King</td>
                                <td>$130</td>
                                <td>
                                    <div>Processing</div>
                                </td>
                            </tr>
                            <tr>
                                <td>#98774</td>
                                <td>Henry Scott</td>
                                <td>$110</td>
                                <td>
                                    <div>Cancelled</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}