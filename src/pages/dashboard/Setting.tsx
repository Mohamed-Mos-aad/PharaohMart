// ** Style
import style from '../../style/pages/dashboard/setting.module.css'
// ** components
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import InputElement from './../../components/form/InputElement';
// ** Hooks && Tools
import UploadPhotos from '../../components/form/UploadPhotos';
import ToggleElement from '../../components/form/ToggleElement';
import TextAreaInputElement from '../../components/form/TextAreaInputElement';



export default function Setting() {
    return (
        <>
            <div className="dashboard_container">
                <div className={style.setting}>
                    <DashboardHeader title="Store Settings" description=""/>
                    <InputElement id="storeName" label="Store Name" name="storeName" placeholder="Enter Store Name" type="text" onChange={()=>{}}/>
                    <UploadPhotos title='Upload your logo' description='Recommended size: 500x500px' quantity={1}/>
                    <UploadPhotos title='Upload your banner' description='Recommended size: 1200x300px' quantity={1}/>
                    
                    <section>
                        <h3>Business Contact Info</h3>
                        <div className={style.inputs_row}>
                            <InputElement id="storeEmail" label="Email" name="storeEmail" placeholder="Enter Email" type="text" onChange={()=>{}}/>
                            <InputElement id="storePhone" label="Phone" name="storePhone" placeholder="Enter Phone" type="text" onChange={()=>{}}/>
                        </div>
                    </section>
                    <section>
                        <h3>Store Address</h3>
                        <InputElement id="storeAddress" label="Address" name="storeAddress" placeholder="Enter Address" type="text" onChange={()=>{}}/>
                    </section>
                    <section>
                        <h3>Service Zones</h3>
                        <InputElement id="StoreServiceZones" label="Service Zones" name="storeServiceZones" placeholder="Enter Service Zones" type="text" onChange={()=>{}}/>
                    </section>
                    <section>
                        <h3>Return Policy</h3>
                        <TextAreaInputElement id="storeReturnPolicy" label="Return Policy" name="storeReturnPolicy" placeholder="Enter Return Policy" onChange={()=>{}}/>
                    </section>
                    <section>
                        <h3>Shipping Policy</h3>
                        <TextAreaInputElement id="StoreShippingPolicy" label="Shipping Policy" name="storeShippingPolicy" placeholder="Enter Shipping Policy" onChange={()=>{}}/>
                    </section>
                    <section>
                        <h3>Store Status</h3>
                        <ToggleElement title='Online' />
                    </section>
                    <div className={style.setting_btn}>
                        <button>Save Changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}