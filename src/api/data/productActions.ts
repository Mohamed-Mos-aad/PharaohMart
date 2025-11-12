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
    try {
        const response = await api.post(`/products`,{ 
            data: productData 
        });
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


// ** Get Seller Products
export const getSellerProductsAction = async () => {
    const data = JSON.parse(localStorage.getItem("userData") || "null");
    try {
        const response = await api.get(
            `/products?filters[owner][id][$eq]=${data.id}&populate=*`
        );
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


// ** Edite Product
export const updateProductAction = async (id:string, productData: Partial<INewProduct>) => {
    try {
        const response = await api.put(
            `/products/${id}`,
            { data : productData}
        );
        return response.data;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
}