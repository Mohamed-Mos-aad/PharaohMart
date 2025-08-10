// ** Assets
import xIcon from '../../assets/icons/dashboard/add product/xIcon.svg'
// ** Style
import style from '../../style/pages/dashboard/addProduct.module.css'
// ** components
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import InputElement from './../../components/form/InputElement';
import DropMenuElement from './../../components/form/DropMenuElement';
// ** Hooks && Tools
import { useEffect, useRef, useState, type DragEvent } from 'react';



export default function AddProduct() {
    // ** States
    const [files, setFiles] = useState<File[]>([]);
    const [inputToggle,setInputToggle] = useState<boolean>(false);



    // ** Ref
    const uploadImagesRef = useRef<HTMLDivElement>(null);



    // ** Handlers
    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        const validImages = droppedFiles.filter(file =>
            file.type === 'image/jpeg' || file.type === 'image/png'
        );
        if (validImages.length > 0) {
            if (files.length + validImages.length <= 5) {
                setFiles((prevFiles) => [...prevFiles, ...validImages]);
            }
        }
    };
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault(); 
    };
    const removeUploadedPhotoHandler = (index:number)=>{
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);   
    }
    const changeToggleStateHandler = ()=>{
        setInputToggle(!inputToggle);
    }
    
    
    
    // ** Renders
    const renderUploadedIamgesRender = files.map((file,index) =>{
        const fileURL = URL.createObjectURL(file);
        return (
            <div className={style.product_photo} key={file.name + index}>
                <img src={fileURL} alt="product photo" />
                <span onClick={()=>{removeUploadedPhotoHandler(index)}}>
                    <img src={xIcon} alt="delete Icon" />
                </span>
            </div>
        )
    })



    // ** UseEffect
    useEffect(()=>{
        if(files.length === 5 )
        {
            if(uploadImagesRef.current)
            {
                uploadImagesRef.current.style.cursor = 'no-drop';
            }
        }
        else if(files.length < 6 )
        {
            if(uploadImagesRef.current)
            {
                uploadImagesRef.current.style.cursor = 'default';
            }
        }
    },[files])



    return (
        <>
            <div className="dashboard_container">
                <div className={style.add_product}>
                    <DashboardHeader title='Add New Product' description="Provide detailed information about yourproduct to attract customers."/>
                    <h2>Product Images</h2>
                    <div 
                        className={style.upload_images} 
                        onDrop={handleDrop} 
                        onDragOver={handleDragOver}
                        ref={uploadImagesRef}
                    >
                        {files.length < 1 ?
                            <>
                                <h3>Drag and drop images here</h3>
                                <p>Recommended dimensions: 1000x1000px. Supported formats: JPG, PNG. You can upload up to 5 images.</p>
                            </>
                            :
                            <div className={style.uploaded_images}>
                                {renderUploadedIamgesRender}
                            </div>
                        }
                    </div>
                    <section>
                        <h2>Basic Information</h2>
                        <InputElement id="productName" label="Product Title" name="productName" placeholder="Enter product name" type="text" onChange={()=>{}} />
                        <InputElement id="productDescription" label="Product Description" name="productDescription" placeholder="Enter product name" type="text" onChange={()=>{}} />
                    </section>
                    <section>
                        <h2>Category & Subcategory</h2>
                        <div className={style.inputs_row}>
                            <DropMenuElement title="Select a category" selections={[]}/>
                            <DropMenuElement title="Select a subcategory" selections={[]}/>
                        </div>
                    </section>
                    <section>
                        <h2>Pricing</h2>
                        <InputElement id="productPrice" label="Price" name="productPrice" placeholder="Enter the standard price" type="text" onChange={()=>{}} />
                        <InputElement id="productSalePrice" label="Sale Price (Optional)" name="productSalePrice" placeholder="Enter a discounted price" type="text" onChange={()=>{}} />
                        <span>Discount Percentage: 0%</span>
                    </section>
                    <section>
                        <h2>Inventory</h2>
                        <InputElement id="productStockQuantity" label="Stock Quantity" name="productStockQuantity" placeholder="Enter available stock" type="text" onChange={()=>{}} />
                        <InputElement id="productSKU" label="SKU (Stock Keeping Unit)" name="productSKU" placeholder="Enter product's unique identifier" type="text" onChange={()=>{}} />
                        <InputElement id="productLowStockAlert" label="Low Stock Alert (Optional)" name="productLowStockAlert" placeholder="Set a threshold for low stock alerts" type="text" onChange={()=>{}} />
                    </section>
                    <section>
                        <h2>Variants (Optional)</h2>
                        <p>Add product variants such as size, color, or material. You can specify individual prices and stock quantities for each variant.</p>
                        <button>Add Variant</button>
                    </section>
                    <section>
                        <h2>Tags</h2>
                        <InputElement id="productTags" label="Tags" name="productTags" placeholder="Add relevant tags or keywords to improve searchability" type="text" onChange={()=>{}} />
                        <span>Suggested tags: Trending, New Arrival, Best Seller</span>
                    </section>
                    <section>
                        <h2>Shipping Information</h2>
                        <InputElement id="productWeight" label="Weight" name="productWeight" placeholder="Enter product weight" type="text" onChange={()=>{}} />
                        <div className={style.inputs_row}>
                            <InputElement id="productLength" label="Length" name="productLength" placeholder="Enter length" type="text" onChange={()=>{}} />
                            <InputElement id="productWidth" label="Width" name="productWidth" placeholder="Enter width" type="text" onChange={()=>{}} />
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
                        <div className={style.toggle_input_element}>
                            <h4>Publish Now</h4>
                            <div className={`${style.toggle_element} ${inputToggle && style.toggle_element_true}`} onClick={changeToggleStateHandler}>
                                <span></span>
                            </div>
                        </div>
                    </section>
                    <section>
                        <span>Schedule Publishing (Optional)</span>
                        <div className={style.inputs_row}>
                            <InputElement id="producDate" label="Date" name="producDate" placeholder="Select date" type="text" onChange={()=>{}} />
                            <InputElement id="productTime" label="Time" name="productTime" placeholder="Select time" type="text" onChange={()=>{}} />
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