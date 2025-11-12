// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import type { INewProduct } from "../../interfaces";



// ** Apis
const token = localStorage.getItem("token");
const api = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        'Authorization': `Bearer ${token}`
    }
});



// ** Add Product
export const addProductAction = async (productData:INewProduct) => {
    console.log("📦 Sending product data:", productData);
    try {
        const response = await api.post(`/products`,{ 
            data: productData 
        });
        console.log("✅ Product created:", response.data);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
