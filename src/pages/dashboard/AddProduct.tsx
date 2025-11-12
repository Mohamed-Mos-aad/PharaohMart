// ** Style
import style from '../../style/pages/dashboard/addProduct.module.css'
// ** components
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import InputElement from './../../components/form/InputElement';
import DropMenuElement from './../../components/form/DropMenuElement';
import UploadPhotos from '../../components/form/UploadPhotos';
import ToggleElement from '../../components/form/ToggleElement';
import TextAreaInputElement from '../../components/form/TextAreaInputElement';
// ** Hooks && Tools
import { useEffect, useState } from 'react';
// ** Actions
import { getCategoriesAction } from '../../api/data/categoriesActions';
// ** Interfaces
import type { ICategory, INewProduct } from '../../interfaces';
import { addProductAction } from '../../api/data/productActions';



export default function AddProduct() {
    // ** Defaults
    const data = JSON.parse(localStorage.getItem("userData") || "null");
    const now = new Date();


    // ** States
    const [productData, setProductData] = useState<INewProduct>({
        owner: data.id,
        name: '',
        description: '',
        categories: [],
        price: 0,
        salePrice: null,
        stockQuantity: 0,
        productSKU: '',
        lowStockAlert: 0,
        weight: 0,
        length: 0,
        width: 0,
        unitWeight: '',
        unitDimension: '',
        images: [],
        mainImage: null,
        isPublished: false,
        publishDate: now.toISOString().split('T')[0],
        publishTime: now.toTimeString().split(' ')[0]
    });
    const [categories, setCategories] = useState<ICategory[]>([]);



    // ** Handlers
    const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.currentTarget;
        setProductData((prev) => ({
        ...prev,
        [id]: value,
        }));
    };
    const addProductHandler = async ()=>{
        if(!productData.isPublished) return
        try{
            await addProductAction(productData);
        }
        catch(error){
            console.log(error);
        }
    }



    // ** UseEffect
    useEffect(()=>{
        const getdata = async ()=>{
            const result = await getCategoriesAction();
            console.log("Categories from API:", result); // <--- هنا

            setCategories(result);
        }

        getdata();
    },[])


    
    return (
        <>
            <div className="dashboard_container">
                <div className={style.add_product}>
                    <DashboardHeader title='Add New Product' description="Provide detailed information about yourproduct to attract customers."/>
                    <h2>Product Images</h2>
                    <UploadPhotos 
                        title='Drag and drop images here' 
                        description='Recommended dimensions: 1000x1000px. Supported formats: JPG, PNG. You can upload up to 5 images.' 
                        quantity={5}
                        onUpload={(photos) => {
                            setProductData((prev) => ({
                                ...prev,
                                images: photos,
                                mainImage: photos[0]
                            }));
                        }}
                        />
                    <section>
                        <h2>Basic Information</h2>
                        <InputElement error='' id="name" label="Product Title" name="name" placeholder="Enter product name" type="text" onChange={inputValueChangeHandler} />
                        <TextAreaInputElement id="description" label="Product Description" name="description" placeholder="Enter product description" onChange={inputValueChangeHandler} />
                    </section>
                    <section>
                        <h2>Category & Subcategory</h2>
                        <div className={style.inputs_row}>
                            <DropMenuElement 
                                title="Select a category"
                                selections={categories.map(cat => ({ id: cat.id, title: cat.title }))}
                                onSelect={(itemSelected)=>{
                                    setProductData((prev) => ({
                                        ...prev,
                                        categories: [...(prev.categories || []), (itemSelected.id - 1)]
                                    }));
                                }}/>
                            <DropMenuElement 
                                title="Select a subcategory"
                                selections={categories.map(cat => ({ id: cat.id, title: cat.title }))}
                                onSelect={(itemSelected)=>{
                                    setProductData((prev) => ({
                                        ...prev,
                                        categories: [...(prev.categories || []), (itemSelected.id - 1)]
                                    }));
                                }}/>
                        </div>
                    </section>
                    <section>
                        <h2>Pricing</h2>
                        <InputElement error='' id="price" label="Price" name="price" placeholder="Enter the standard price" type="text" onChange={inputValueChangeHandler} />
                        <InputElement error='' id="salePrice" label="Sale Price (Optional)" name="salePrice" placeholder="Enter a discounted price" type="text" onChange={inputValueChangeHandler} />
                        <span>Discount Percentage: 0%</span>
                    </section>
                    <section>
                        <h2>Inventory</h2>
                        <InputElement error='' id="stockQuantity" label="Stock Quantity" name="stockQuantity" placeholder="Enter available stock" type="text" onChange={inputValueChangeHandler} />
                        <InputElement error='' id="productSKU" label="SKU (Stock Keeping Unit)" name="productSKU" placeholder="Enter product's unique identifier" type="text" onChange={inputValueChangeHandler} />
                        <InputElement error='' id="lowStockAlert" label="Low Stock Alert (Optional)" name="lowStockAlert" placeholder="Set a threshold for low stock alerts" type="text" onChange={inputValueChangeHandler} />
                    </section>
                    <section>
                        <h2>Variants (Optional)</h2>
                        <p>Add product variants such as size, color, or material. You can specify individual prices and stock quantities for each variant.</p>
                        <button>Add Variant</button>
                    </section>
                    <section>
                        <h2>Tags</h2>
                        <InputElement error='' id="tags" label="Tags" name="tags" placeholder="Add relevant tags or keywords to improve searchability" type="text" onChange={inputValueChangeHandler} />
                        <span>Suggested tags: Trending, New Arrival, Best Seller</span>
                    </section>
                    <section>
                        <h2>Shipping Information</h2>
                        <InputElement error='' id="weight" label="Weight" name="weight" placeholder="Enter product weight" type="text" onChange={inputValueChangeHandler} />
                        <div className={style.inputs_row}>
                            <InputElement error='' id="length" label="Length" name="length" placeholder="Enter length" type="text" onChange={inputValueChangeHandler} />
                            <InputElement error='' id="width" label="Width" name="width" placeholder="Enter width" type="text" onChange={inputValueChangeHandler} />
                        </div>
                        <div className={style.inputs_row}>
                            <DropMenuElement 
                                title="Select unit  (e.g.,  kg,  lbs)"
                                selections={categories.map(cat => ({ id: cat.id, title: cat.title }))}
                                onSelect={(itemSelected)=>{
                                    setProductData((prev) => ({
                                        ...prev,
                                        unitWeight: itemSelected.title
                                    }))
                                }}/>
                            <DropMenuElement 
                                title="Select  unit  (e.g.,  cm,  inches)"
                                selections={categories.map(cat => ({ id: cat.id, title: cat.title }))}
                                onSelect={(itemSelected)=>{
                                    setProductData((prev) => ({
                                        ...prev,
                                        unitDimension: itemSelected.title
                                    }))
                                }}/>
                        </div>
                        <p>Specify shipping methods and costs, or integrate with platform-provided shipping solutions.</p>
                        <button>Configure Shipping</button>
                    </section>
                    <section>
                        <h2>Visibility & Publication</h2>
                        <ToggleElement 
                            title='Publish Now' 
                            onChange={(value)=>{
                                setProductData((prev) => ({
                                    ...prev,
                                    isPublished: value
                                }))
                            }}/>
                    </section>
                    <section>
                        <span>Schedule Publishing (Optional)</span>
                        <div className={style.inputs_row}>
                            <InputElement error='' id="publishDate" label="Date" name="publishDate" placeholder="Select date" type="text" onChange={inputValueChangeHandler} />
                            <InputElement error='' id="publishTime" label="Time" name="publishTime" placeholder="Select time" type="text" onChange={inputValueChangeHandler} />
                        </div>
                    </section>
                    <div className={style.product_btns}>
                        <button>Save Draft</button>
                        <button onClick={addProductHandler}>Publish Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}