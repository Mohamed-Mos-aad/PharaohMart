// ** Assets
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
// ** Hooks && Tools
import { useEffect, useMemo, useState } from 'react'
// ** Actions
import { getSellerProductsAction, updateProductAction } from '../../api/data/productActions'
import { getCategoriesAction } from '../../api/data/categoriesActions'
// ** Interfaces
import type { ICategory, IProduct } from '../../interfaces'
// ** Constants
import { PRODUCT_STATUS } from '../../constant'



export default function DashboardProducts() {
    // **  States
    const [productsData, setProductsData] = useState<IProduct[]>([]);
    const [displayedData, setDisplayedData] = useState<IProduct[]>(productsData);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [filter, setFilter] = useState<{category: 'All' | string, statu: 'All' | boolean}>({category: 'All', statu: 'All'})
    const [searchValue, setSearchValue] = useState<string>('')



    // ** Handlers
    const getProductsHandler = async ()=>{
        const result = await getSellerProductsAction();
        setProductsData(result);
        setDisplayedData(result);
    }
    const applyFiltersAndSearch = () => {
        const updatedData = productsData.filter(item => {
            const nameMatch = searchValue === '' || item.name.toLowerCase().includes(searchValue.toLowerCase());
            const categoryMatch = filter.category === 'All' || item.categories.some(c => c.title === filter.category);
            const statusMatch = filter.statu === 'All' || item.isPublished === filter.statu;
            
            return nameMatch && categoryMatch && statusMatch;
        });
        setDisplayedData(updatedData);
    };
    const changeProductStateHandler = async (product:IProduct)=>{
        try {
            const updatedData = { isPublished: !product.isPublished };
            await updateProductAction(product.documentId, updatedData);
            
            const updatedProductsData = productsData.map(p => 
                p.documentId === product.documentId 
                    ? { ...p, isPublished: !p.isPublished } 
                    : p
            );
            setProductsData(updatedProductsData);
            setDisplayedData(updatedProductsData);
        } catch (error) {
            console.error('Failed to update:', error);
        }
    }



    // ** Render
    const productsRender = useMemo(()=>
        displayedData.map(item => 
        <tr key={item.documentId}>
            <td>
            <div className={style.product_img}>
                <img src={`http://localhost:1337${item.mainImage.url}`} loading="lazy" alt={item.name}/>
            </div>
            </td>
            <td>{item.name}</td>
            <td>${item.salePrice}</td>
            <td>{item.stockQuantity}</td>
            <td>{item.isPublished ? 'Live' : 'unLive'}</td>
            <td>{item.categories[0].title}</td>
            <td>
            <div className={style.product_options}>
                <img src={editeIcon} alt="edit icon" />
                <img src={item.isPublished ? pauseIcon : playIcon} alt={item.isPublished ? "pause icon" : "play icon"} onClick={()=>{changeProductStateHandler(item)}}/>
                <img src={deleteIcon} alt="delete icon" />
            </div>
            </td>
        </tr>
    ),[displayedData])



    // ** UseEffect
    useEffect(()=>{
        getProductsHandler()
    },[])
    useEffect(()=>{
        const getCategories = async ()=>{
            const result = await getCategoriesAction();
            setCategories(result);
        }
        getCategories();
    },[])
    useEffect(()=>{
        applyFiltersAndSearch()
    },[filter,searchValue,productsData])



    return (
        <>
            <div className="dashboard_container">
                <div className={style.dashboard_products}>
                    <DashboardHeader title='My Products' description="Manage your product listings efficiently."/>
                    <div className={style.search_element}>
                        <img src={searchIcon} alt="search icon" />
                        <input type="text" placeholder='Search products by name' onChange={(e)=>{setSearchValue(e.currentTarget.value)}}/>
                    </div>
                    <div className={style.filter_options}>
                        <DropMenuElement title='Category' selections={categories} onSelect={(prev)=>{setFilter((filters)=> ({...filters,category: prev.title}))}}/>
                        <DropMenuElement title='Stock Status' selections={PRODUCT_STATUS} onSelect={(prev)=>{setFilter((filters)=> ({...filters,statu: prev.id === null ? 'All' : prev.id === 0}))}}/>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Category</th>
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
