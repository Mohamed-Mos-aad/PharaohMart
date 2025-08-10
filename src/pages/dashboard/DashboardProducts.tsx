// ** Assets
import testImg from '../../assets/images/test/Product imgs/productImg1.png'
import searchIcon from '../../assets/icons/dashboard/products/searchIcon.svg'
import editeIcon from '../../assets/icons/dashboard/products/editeIcon.svg'
import pauseIcon from '../../assets/icons/dashboard/products/pauseIcon.svg'
import playIcon from '../../assets/icons/dashboard/products/playIcon.svg'
import deleteIcon from '../../assets/icons/dashboard/products/deleteIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/dashboardProducts.module.css'
// ** Components
import DropMenuElement from '../../components/form/DropMenuElement'
import DashboardHeader from '../../components/dashboard/DashboardHeader'



export default function DashboardProducts() {
    return (
        <>
            <div className="dashboard_container">
                <div className={style.dashboard_products}>
                    <DashboardHeader title='My Products' description="Manage your product listings efficiently."/>
                    <div className={style.search_element}>
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder='Search products by name'/>
                    </div>
                    <div className={style.filter_options}>
                        <DropMenuElement title='Category' selections={["Electronics", "Home & Living", "Outdoor", "Wearables", "Kitchen", "Home Security", "Health & Wellness", "Office & Stationery", "Fashion & Accessories", "Kids & Toys"]}/>
                        <DropMenuElement title='Stock Status' selections={["Live", "Paused", "Out of Stock"]}/>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <div className={style.product_img}>
                                    <img src={testImg} alt="test Img" />
                                </div>
                                </td>
                                <td>Product A</td>
                                <td>$30</td>
                                <td>120</td>
                                <td>Live</td>
                                <td>Home Appliances</td>
                                <td>
                                <div className={style.product_options}>
                                    <img src={editeIcon} alt="edit icon" />
                                    <img src={pauseIcon} alt="pause icon" />
                                    <img src={deleteIcon} alt="delete icon" />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className={style.product_img}>
                                    <img src={testImg} alt="test Img" />
                                </div>
                                </td>
                                <td>Product B</td>
                                <td>$45</td>
                                <td>80</td>
                                <td>Live</td>
                                <td>Electronics</td>
                                <td>
                                <div className={style.product_options}>
                                    <img src={editeIcon} alt="edit icon" />
                                    <img src={playIcon} alt="play icon" />
                                    <img src={deleteIcon} alt="delete icon" />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className={style.product_img}>
                                    <img src={testImg} alt="test Img" />
                                </div>
                                </td>
                                <td>Product C</td>
                                <td>$60</td>
                                <td>50</td>
                                <td>Live</td>
                                <td>Gadgets</td>
                                <td>
                                <div className={style.product_options}>
                                    <img src={editeIcon} alt="edit icon" />
                                    <img src={pauseIcon} alt="pause icon" />
                                    <img src={deleteIcon} alt="delete icon" />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className={style.product_img}>
                                    <img src={testImg} alt="test Img" />
                                </div>
                                </td>
                                <td>Product D</td>
                                <td>$75</td>
                                <td>150</td>
                                <td>Live</td>
                                <td>Fashion</td>
                                <td>
                                <div className={style.product_options}>
                                    <img src={editeIcon} alt="edit icon" />
                                    <img src={pauseIcon} alt="pause icon" />
                                    <img src={deleteIcon} alt="delete icon" />
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className={style.product_img}>
                                    <img src={testImg} alt="test Img" />
                                </div>
                                </td>
                                <td>Product E</td>
                                <td>$90</td>
                                <td>60</td>
                                <td>Live</td>
                                <td>Sports</td>
                                <td>
                                <div className={style.product_options}>
                                    <img src={editeIcon} alt="edit icon" />
                                    <img src={pauseIcon} alt="pause icon" />
                                    <img src={deleteIcon} alt="delete icon" />
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
