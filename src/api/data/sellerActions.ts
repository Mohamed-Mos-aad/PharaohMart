// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import type { IUser } from "../../interfaces";
// ** Constants
const apiUrl = import.meta.env.VITE_API_URL;



// ** Apis
// const token = localStorage.getItem("token");
// const api = axios.create({
//     baseURL: `${apiUrl}/api/`,
//     headers: {
//         'Authorization': `Bearer ${token}`
//     }
// });
const adminJwt = import.meta.env.VITE_ADMIN_TOKEN
const highApi = axios.create({
    baseURL: `${apiUrl}/api/`,
    headers: {
        'Authorization': `Bearer ${adminJwt}`,
        'Content-Type': 'application/json'
    }
});



// ** Update Seller Data
export const updateSellerDataAction = async (id:number, sellerData: Partial<IUser>) => {
    try {
        const response = await highApi.put(`/users/${id}`,sellerData);
        
        return response.data;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
}