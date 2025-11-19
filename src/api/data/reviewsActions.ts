// ** Interfaces
import type { INewReview } from "../../interfaces";
// ** Config
import { api } from "../config/axios.config";




// ============================================
// Main Functions
// ============================================


// ** Add Product Review
export const addProductReviewAction = async (review:INewReview) => {
    try {
        const response = await api.post(`/reviews`,{ 
            data: review 
        });
        return response.data.data;
    } catch (error) {
        console.error('Error Response:', error); 
        throw error;
    }
}



// ** Get Specific Product Reviews
export const getSpecificProductReviewsAction = async (id:string) => {
    try {
        const response = await api.get(`/products/${id}?populate[reviews][populate]=*`);
        return response.data.data.reviews;
    }
    catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
}


// ** Get Specific Product Reviews
export const updateSpecificProductReviewAction = async (id:string, data: Partial<INewReview>) => {
    try {
        const response = await api.put(
            `/reviews/${id}`,
            { data }
        );
        return response.data;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
}