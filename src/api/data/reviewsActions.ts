// ** Hooks && Tools
import axios from "axios";
import type { INewReview } from "../../interfaces";
// ** Constants
const apiUrl = import.meta.env.VITE_API_URL;



// ** Apis
const token = localStorage.getItem("token");
const api = axios.create({
    baseURL: `${apiUrl}/api/`,
    headers: token
    ? { Authorization: `Bearer ${token}` }
    : {}
});



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
        const response = await api.get(`/products/${id}?populate[reviews][populate]=user`);
        return response.data.data.reviews;
    }
    catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
}