// ** Assets
import searchIcon from '../../assets/icons/dashboard/products/searchIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/orders.module.css'
// ** Components
import DashboardHeader from "../../components/dashboard/DashboardHeader";



export default function Orders() {
    return (
        <>
            <div className="dashboard_container">
                <div className={style.orders}>
                    <DashboardHeader title='Orders' description="Manage and track your customer orders efficiently."/>
                    <div className={style.search_element}>
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder='Search by Order ID or Customer Name'/>
                    </div>
                    <div className={style.orders_filter}>
                        <button>Pending</button>
                        <button>Shipped</button>
                        <button>Delivered</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Items</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                <td>Emma Wilson</td>
                                <td>4 items</td>
                                <td>$98.00</td>
                                <td>
                                    <div>
                                        Pending
                                    </div>
                                </td>
                                <td>2024-08-03</td>
                            </tr>
                            <tr>
                                <td>#12346</td>
                                <td>Lucas Martinez</td>
                                <td>5 items</td>
                                <td>$120.00</td>
                                <td>
                                    <div>
                                        Shipped
                                    </div>
                                </td>
                                <td>2024-08-01</td>
                            </tr>
                            <tr>
                                <td>#12347</td>
                                <td>Grace Thomas</td>
                                <td>3 items</td>
                                <td>$75.50</td>
                                <td>
                                    <div>
                                        Delivered
                                    </div>
                                </td>
                                <td>2024-07-28</td>
                            </tr>
                            <tr>
                                <td>#12348</td>
                                <td>James Lee</td>
                                <td>2 items</td>
                                <td>$40.00</td>
                                <td>
                                    <div>
                                        Pending
                                    </div>
                                </td>
                                <td>2024-08-05</td>
                            </tr>
                            <tr>
                                <td>#12349</td>
                                <td>Ava White</td>
                                <td>1 item</td>
                                <td>$20.00</td>
                                <td>
                                    <div>
                                        Delivered
                                    </div>
                                </td>
                                <td>2024-07-22</td>
                            </tr>
                            <tr>
                                <td>#12350</td>
                                <td>Elijah Garcia</td>
                                <td>6 items</td>
                                <td>$150.00</td>
                                <td>
                                    <div>
                                        Shipped
                                    </div>
                                </td>
                                <td>2024-07-30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}