// ** Assets
import searchIcon from '../../assets/icons/dashboard/products/searchIcon.svg'
import testImg from '../../assets/images/test/Product imgs/productImg1.png'
// ** Style
import style from '../../style/pages/dashboard/inventory.module.css'
// ** Components
import DashboardHeader from "../../components/dashboard/DashboardHeader";



export default function Inventory() {
    return (
        <>
            <div className="dashboard_container">
                <div className={style.inventory}>
                    <DashboardHeader title='Inventory Management' description="Efficiently track and manage your product stock."/>
                    <section>
                        <div className={style.product_details}>
                            <h5>Low Stock Alert</h5>
                            <h6>3 Products Low in Stock</h6>
                            <span>View and restock products with low inventory levels.</span>
                            <button>View Low Stock</button>
                        </div>
                        <div className={style.product_image}>
                            <img src={testImg} alt="testImg " />
                        </div>
                    </section>
                    <div className={style.search_element}>
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder='Search  by product title or SKU'/>
                    </div>
                    <div className={style.inventory_filter}>
                        <button>Low Stock</button>
                        <button>In Stock</button>
                        <button>Out of Stock</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>Quantity in Stock</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cozy Knit Sweater</td>
                                <td>SKU12345</td>
                                <td>150</td>
                                <td>
                                    <div>
                                        In Stock
                                    </div>
                                </td>
                                <td>Restock | Edit</td>
                            </tr>
                            <tr>
                                <td>Leather Ankle Boots</td>
                                <td>SKU67890</td>
                                <td>20</td>
                                <td>
                                    <div>
                                        Low Stock
                                    </div>
                                </td>
                                <td>Restock | Edit</td>
                            </tr>
                            <tr>
                                <td>Classic Denim Jeans</td>
                                <td>SKU11223</td>
                                <td>0</td>
                                <td>
                                    <div>
                                        Out of Stock
                                    </div>
                                </td>
                                <td>Restock | Edit</td>
                            </tr>
                            <tr>
                                <td>Cotton T-Shirt</td>
                                <td>SKU44556</td>
                                <td>80</td>
                                <td>
                                    <div>
                                        In Stock
                                    </div>
                                </td>
                                <td>Restock | Edit</td>
                            </tr>
                            <tr>
                                <td>Running Shoes</td>
                                <td>SKU77889</td>
                                <td>5</td>
                                <td>
                                    <div>
                                        Low Stock
                                    </div>
                                </td>
                                <td>Restock | Edit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
