// ** Style
import style from '../../style/pages/dashboard/analytics.module.css'
// ** Hooks && Tools
import { useState } from 'react';
// ** Components
import DashboardHeader from "../../components/dashboard/DashboardHeader";



export default function Analytics() {
    // ** States
    const [selectedDateFilter,setSelectedDateFilter] = useState<number>(1);



    // ** Handlers
    const changeDateFilterHandler = (selected:number)=>{
        setSelectedDateFilter(selected);
    }



    return (
        <>
            <div className="dashboard_container">
                <div className={style.analytics}>
                    <DashboardHeader title="Analytics" description="Monitor your performance on the e-commerce platform."/>
                    <section>
                        <div className={style.date_filter}>
                            <h2 className={selectedDateFilter === 0 ? style.selected : ''} onClick={()=>{changeDateFilterHandler(0)}}>Last 7 Days</h2>
                            <h2 className={selectedDateFilter === 1 ? style.selected : ''} onClick={()=>{changeDateFilterHandler(1)}}>Last 30 Days</h2>
                            <h2 className={selectedDateFilter === 2 ? style.selected : ''} onClick={()=>{changeDateFilterHandler(2)}}>This Month</h2>
                            <h2 className={selectedDateFilter === 3 ? style.selected : ''} onClick={()=>{changeDateFilterHandler(3)}}>Last Month</h2>
                            <div style={{left: `calc(${(25*selectedDateFilter)}% - ${(selectedDateFilter === 0 ? -4 : 0) || (selectedDateFilter === 3 ? 4 : 0)}px)`}}></div>
                        </div>
                        <div className={style.cards}>
                            <div className={style.card}>
                                <h4>Sales Overview</h4>
                                <h5>$25,000</h5>
                                <h6>Last 30 Days<span> +10%</span></h6>
                            </div>
                            <div className={style.card}>
                                <h4>Orders Trend</h4>
                                <h5>500</h5>
                                <h6>Last 30 Days<span> +5%</span></h6>
                            </div>
                            <div className={style.card}>
                                <h4>Conversion Rate</h4>
                                <h5>3.5%</h5>
                                <h6>Last 30 Days<span> +2%</span></h6>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1>Top Products Performance</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Units Sold</th>
                                    <th>Revenue Generated</th>
                                    <th>Stock Remaining</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cozy Knit Sweater</td>
                                    <td>150</td>
                                    <td>$7,500</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>Leather Ankle Boots</td>
                                    <td>100</td>
                                    <td>$5,000</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Classic Denim Jeans</td>
                                    <td>80</td>
                                    <td>$4,000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Cotton T-Shirt</td>
                                    <td>70</td>
                                    <td>$3,500</td>
                                    <td>150</td>
                                </tr>
                                <tr>
                                    <td>Running Shoes</td>
                                    <td>50</td>
                                    <td>$2,500</td>
                                    <td>75</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </>
    )
}