// ** Style
import style from '../../style/pages/dashboard/setting.module.css'
// ** Hooks && Tools
import { useState } from 'react';
// ** components
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import InputElement from './../../components/form/InputElement';
import UploadPhotos from '../../components/form/UploadPhotos';
import ToggleElement from '../../components/form/ToggleElement';
import TextAreaInputElement from '../../components/form/TextAreaInputElement';
// ** Interfaces
import type { ISeller } from '../../interfaces';
// ** Actions
import { updateSellerDataAction } from '../../api/data/sellerActions';



export default function Setting() {
    // ** States
    const data:ISeller = JSON.parse(localStorage.getItem("userData") || "null");    
    const [sellerData, setSellerData] = useState<ISeller>(data || {} as ISeller);


    // ** Handlers
    const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.currentTarget;
        setSellerData((prev) => ({
        ...prev,
        [id]: value,
        }));
    };
    const saveChangesHandler = async ()=>{
        try{
            await updateSellerDataAction(data.id,sellerData);
            localStorage.setItem("userData", JSON.stringify(sellerData));
            alert("تم حفظ التغييرات بنجاح!");
        }catch(error){
            console.log(error)
        }
    }



    return (
        <>
            <div className="dashboard_container">
                <div className={style.setting}>
                    <DashboardHeader title="Store Settings" description=""/>
                    <InputElement error='' id="storeName" label="Store Name" name="storeName" value={sellerData.storeName} placeholder="Enter Store Name" type="text" onChange={inputValueChangeHandler}/>
                    <UploadPhotos 
                        title='Upload your logo' 
                        description='Recommended size: 500x500px' 
                        quantity={1}
                        onUpload={(photos) => {
                            setSellerData((prev) => ({
                                ...prev,
                                logo: photos[0]
                            }));
                        }}/>
                    <UploadPhotos 
                        title='Upload your banner' 
                        description='Recommended size: 1200x300px' 
                        quantity={1}
                        onUpload={(photos) => {
                            setSellerData((prev) => ({
                                ...prev,
                                banner: photos[0]
                            }));
                        }}/>
                    <section>
                        <h2>Business Contact Info</h2>
                        <div className={style.inputs_row}>
                            <InputElement error='' id="email" label="Email" name="email" placeholder="Enter Email" value={sellerData.email} type="text" onChange={inputValueChangeHandler}/>
                            <InputElement error='' id="phone" label="Phone" name="phone" placeholder="Enter Phone" value={sellerData.phone} type="text" onChange={inputValueChangeHandler}/>
                        </div>
                    </section>
                    <section>
                        <h2>Store Address</h2>
                        <InputElement error='' id="address" label="Address" name="address" placeholder="Enter Address" value={sellerData.address} type="text" onChange={inputValueChangeHandler}/>
                    </section>
                    <section>
                        <h2>Service Zones</h2>
                        <InputElement error='' id="serviceZones" label="Service Zones" name="serviceZones" placeholder="Enter Service Zones" value={sellerData.serviceZones} type="text" onChange={inputValueChangeHandler}/>
                    </section>
                    <section>
                        <h2>Return Policy</h2>
                        <TextAreaInputElement id="returnPolicy" label="Return Policy" name="returnPolicy" placeholder="Enter Return Policy" value={sellerData.returnPolicy} onChange={inputValueChangeHandler}/>
                    </section>
                    <section>
                        <h2>Shipping Policy</h2>
                        <TextAreaInputElement id="shippingPolicy" label="Shipping Policy" name="shippingPolicy" placeholder="Enter Shipping Policy" value={sellerData.shippingPolicy} onChange={inputValueChangeHandler}/>
                    </section>
                    <section>
                        <h2>Store Status</h2>
                        <ToggleElement title='Online' value={sellerData.isOnline ?? false} name="isOnline" id="isOnline" onToggle={(prev)=>{setSellerData(s => ({...s,isOnline: prev}))}}/>
                    </section>
                    <div className={style.setting_btn}>
                        <button onClick={saveChangesHandler}>Save Changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}