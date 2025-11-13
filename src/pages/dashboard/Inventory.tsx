// ** Assets
import searchIcon from '../../assets/icons/dashboard/products/searchIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/inventory.module.css'
// ** Components
import DashboardHeader from "../../components/dashboard/DashboardHeader";
// ** Hooks && Tools
import { useEffect, useMemo, useState } from 'react';
// ** Interfaces
import type { IProduct } from '../../interfaces';
// ** Actions
import { getSellerProductsAction } from '../../api/data/productActions';



export default function Inventory() {
    // **  States
    const [productsData, setProductsData] = useState<IProduct[]>([]);
    const [displayedData, setDisplayedData] = useState<IProduct[]>(productsData);
    const [filter, setFilter] = useState<"lowStock" | "inStock" | "outOfStock" | "All">("All");
    const [searchValue, setSearchValue] = useState<string>('');
    const [numOfProductLowStock, setNumOfProductLowStock] = useState<IProduct[]>([]);
    
    
    
    // ** Handlers
    const getProductsHandler = async ()=>{
        const result = await getSellerProductsAction();
        setProductsData(result);
        setDisplayedData(result);
        const productsLowStock = productsData.filter(item => item.stockQuantity < item.lowStockAlert);
        setNumOfProductLowStock(productsLowStock);
    }
    const changeFilterHandler = (selectedFilter: "lowStock" | "inStock" | "outOfStock" | "All")=>{
        if(filter === selectedFilter)
        {
            setFilter("All");
        }
        else{
            setFilter(selectedFilter);
        }
    }
    const applyFiltersAndSearch = () => {
        const updatedData = productsData.filter(item => {
            const nameMatch = searchValue === '' || item.name.toLowerCase().includes(searchValue.toLowerCase());
            let stockMatch = true;
            if (filter === 'lowStock') {
                stockMatch = item.stockQuantity > 0 && item.stockQuantity < item.lowStockAlert;
            } else if (filter === 'inStock') {
                stockMatch = item.stockQuantity >= item.lowStockAlert;
            } else if (filter === 'outOfStock') {
                stockMatch = item.stockQuantity === 0;
            }
            
            return nameMatch && stockMatch
        });
        setDisplayedData(updatedData);
    };


    
    // ** Render
    const productsRender = useMemo(()=>
        displayedData.map(item => 
            <tr key={item.documentId}>
                <td>
                    <div className={style.product_img}>
                        <img src={item.mainImage.url} loading="lazy" alt={item.name}/>
                    </div>
                </td>
                <td>{item.name}</td>
                <td>{item.productSKU ? 'SKU' + item.productSKU : '_'}</td>
                <td>{item.stockQuantity}</td>
                <td>
                    <div>
                        {
                        item.stockQuantity === 0
                            ? 'Out of Stock'
                            : item.stockQuantity < item.lowStockAlert
                            ? 'Low Stock'
                            : 'In Stock'
                        }
                    </div>
                </td>
                <td>Restock | Edit</td>
            </tr>
    ),[displayedData])



    // ** UseEffect
    useEffect(()=>{
        getProductsHandler()
    },[])
    useEffect(()=>{
        applyFiltersAndSearch()
    },[filter,searchValue,productsData])



    return (
        <>
            <div className="dashboard_container">
                <div className={style.inventory}>
                    <DashboardHeader title='Inventory Management' description="Efficiently track and manage your product stock."/>
                    {
                        numOfProductLowStock.length > 0 &&
                        <section>
                            <div className={style.product_details}>
                                <h5>Low Stock Alert</h5>
                                <h6>{numOfProductLowStock.length} Products Low in Stock</h6>
                                <span>View and restock products with low inventory levels.</span>
                                <button onClick={() => changeFilterHandler('lowStock')}>View Low Stock</button>
                            </div>
                            <div className={style.product_image}>
                                <img src={numOfProductLowStock[0].mainImage.url} alt={numOfProductLowStock[0].mainImage.name} />
                            </div>
                        </section>
                    }
                    <div className={style.search_element}>
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder='Search products by name' onChange={(e)=>{setSearchValue(e.currentTarget.value)}}/>
                    </div>
                    <div className={style.inventory_filter}>
                        <button className={filter === "lowStock" ? style.active : ''} onClick={()=>{changeFilterHandler("lowStock")}}>Low Stock</button>
                        <button className={filter === "inStock" ? style.active : ''} onClick={()=>{changeFilterHandler("inStock")}}>In Stock</button>
                        <button className={filter === "outOfStock" ? style.active : ''} onClick={()=>{changeFilterHandler("outOfStock")}}>Out of Stock</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>Quantity in Stock</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsRender}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
