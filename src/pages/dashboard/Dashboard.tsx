// ** Assets
import testImg from '../../assets/images/test/Product imgs/productImg1.png'
// ** Style
import style from '../../style/pages/dashboard/dashboard.module.css'



export default function Dashboard() {
    return (
        <>
            <div className="dashboard_container">
                <div className={style.dashboard}>
                    <div className={style.dashboard_header}>
                        <h1>Dashboard</h1>
                        <p>Welcome back, Amelia! Here's an overview of your seller performance.</p>
                    </div>
                    <div className={style.dashboard_cards}>
                        <div className={style.card}>
                            <h3>Total Sales (Today)</h3>
                            <h4>$2,500</h4>
                            <span>+15%</span>
                        </div>
                        <div className={style.card}>
                            <h3>Monthly Revenue</h3>
                            <h4>$12,500</h4>
                            <span>-5%</span>
                        </div>
                        <div className={style.card}>
                            <h3>Total Orders</h3>
                            <h4>350</h4>
                            <span>+10%</span>
                        </div>
                        <div className={style.card}>
                            <h3>Live Products</h3>
                            <h4>150</h4>
                            <span>+8%</span>
                        </div>
                    </div>
                    <h2>Top Selling Products</h2>
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
                            <tr>
                                <td>
                                    <div className={style.product_img}>
                                        <img src={testImg} alt="test Img" />
                                    </div>
                                </td>
                                <td>Product U</td>
                                <td>70</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={style.product_img}>
                                        <img src={testImg} alt="test Img" />
                                    </div>
                                </td>
                                <td>Product T</td>
                                <td>160</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={style.product_img}>
                                        <img src={testImg} alt="test Img" />
                                    </div>
                                </td>
                                <td>Product S</td>
                                <td>110</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={style.product_img}>
                                        <img src={testImg} alt="test Img" />
                                    </div>
                                </td>
                                <td>Product R</td>
                                <td>130</td>
                                <td>65</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={style.product_img}>
                                        <img src={testImg} alt="test Img" />
                                    </div>
                                </td>
                                <td>Product Q</td>
                                <td>140</td>
                                <td>75</td>
                            </tr>
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