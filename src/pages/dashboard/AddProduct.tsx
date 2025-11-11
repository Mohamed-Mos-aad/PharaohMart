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
import { getCategoriesAction } from '../../api/data/Categories';
// ** Interfaces
import type { ICategory, IProduct } from '../../interfaces';



export default function AddProduct() {
    // ** States
    const [productData, setProductData] = useState<IProduct>({
        name: '',
        description: '',
        productPrice: 0,
        category: '',
        images: [],
        mainImage: ''
    });
    const [categories, setCategories] = useState<string[]>([]);



    // ** Handlers
    const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.currentTarget;
        setProductData((prev) => ({
        ...prev,
        [id]: value,
        }));
    };



    // ** UseEffect
    useEffect(()=>{
        const getdata = async ()=>{
            const result = await getCategoriesAction();
            const newArray:string[] = [];
            result.map((item:ICategory) => newArray.push(item.title))
            setCategories(newArray);
        }

        getdata();
    },[])
    useEffect(()=>{
        console.log(productData);
    },[productData]);


    
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
                        onUpload={(urls) => {
                            setProductData((prev) => ({
                                ...prev,
                                images: urls,
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
                            <DropMenuElement title="Select a category" selections={categories}/>
                            <DropMenuElement title="Select a subcategory" selections={[]}/>
                        </div>
                    </section>
                    <section>
                        <h2>Pricing</h2>
                        <InputElement error='' id="productPrice" label="Price" name="productPrice" placeholder="Enter the standard price" type="text" onChange={()=>{}} />
                        <InputElement error='' id="productSalePrice" label="Sale Price (Optional)" name="productSalePrice" placeholder="Enter a discounted price" type="text" onChange={()=>{}} />
                        <span>Discount Percentage: 0%</span>
                    </section>
                    <section>
                        <h2>Inventory</h2>
                        <InputElement error='' id="productStockQuantity" label="Stock Quantity" name="productStockQuantity" placeholder="Enter available stock" type="text" onChange={()=>{}} />
                        <InputElement error='' id="productSKU" label="SKU (Stock Keeping Unit)" name="productSKU" placeholder="Enter product's unique identifier" type="text" onChange={()=>{}} />
                        <InputElement error='' id="productLowStockAlert" label="Low Stock Alert (Optional)" name="productLowStockAlert" placeholder="Set a threshold for low stock alerts" type="text" onChange={()=>{}} />
                    </section>
                    <section>
                        <h2>Variants (Optional)</h2>
                        <p>Add product variants such as size, color, or material. You can specify individual prices and stock quantities for each variant.</p>
                        <button>Add Variant</button>
                    </section>
                    <section>
                        <h2>Tags</h2>
                        <InputElement error='' id="productTags" label="Tags" name="productTags" placeholder="Add relevant tags or keywords to improve searchability" type="text" onChange={()=>{}} />
                        <span>Suggested tags: Trending, New Arrival, Best Seller</span>
                    </section>
                    <section>
                        <h2>Shipping Information</h2>
                        <InputElement error='' id="productWeight" label="Weight" name="productWeight" placeholder="Enter product weight" type="text" onChange={()=>{}} />
                        <div className={style.inputs_row}>
                            <InputElement error='' id="productLength" label="Length" name="productLength" placeholder="Enter length" type="text" onChange={()=>{}} />
                            <InputElement error='' id="productWidth" label="Width" name="productWidth" placeholder="Enter width" type="text" onChange={()=>{}} />
                        </div>
                        <div className={style.inputs_row}>
                            <DropMenuElement title="Select unit  (e.g.,  kg,  lbs)" selections={[]}/>
                            <DropMenuElement title="Select  unit  (e.g.,  cm,  inches)" selections={[]}/>
                        </div>
                        <p>Specify shipping methods and costs, or integrate with platform-provided shipping solutions.</p>
                        <button>Configure Shipping</button>
                    </section>
                    <section>
                        <h2>Visibility & Publication</h2>
                        <ToggleElement title='Publish Now' />
                    </section>
                    <section>
                        <span>Schedule Publishing (Optional)</span>
                        <div className={style.inputs_row}>
                            <InputElement error='' id="producDate" label="Date" name="producDate" placeholder="Select date" type="text" onChange={()=>{}} />
                            <InputElement error='' id="productTime" label="Time" name="productTime" placeholder="Select time" type="text" onChange={()=>{}} />
                        </div>
                    </section>
                    <div className={style.product_btns}>
                        <button>Save Draft</button>
                        <button>Publish Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}