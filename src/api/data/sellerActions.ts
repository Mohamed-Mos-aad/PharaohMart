// ** Interfaces
import type { IUser } from "../../interfaces";
// ** Config
import { api } from "../config/axios.config";






// ============================================
// Main Functions
// ============================================


// ** Update Seller Data
export const updateSellerDataAction = async (id:number, sellerData: Partial<IUser>) => {
    try {
        const response = await api.put(`/users/${id}`,sellerData)
        return response.data;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
}