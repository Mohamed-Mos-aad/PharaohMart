// ** Config
import { api } from "../config/axios.config";




// ============================================
// Main Functions
// ============================================


// ** Get Categories
export const getCategoriesAction = async () => {
    try {
        const response = await api.get(`/categories`);
        return {
            success: true,
            data: response.data.data,
        };
    }
    catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}

// ** Get Specific Category
export const getSpecificCategoryAction = async (id:string) => {
    try {
        const response = await api.get(`/categories/${id}`);
        return {
            success: true,
            data: response.data.data,
        };
    }
    catch (error) {
        console.error(`Error fetching category with id ${id}:`, error);
        throw error;
    }
}