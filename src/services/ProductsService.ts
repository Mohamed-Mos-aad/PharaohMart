// ** Hooks && Tools
import axios from "axios";



// ** Apis
const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_API,
    headers: { 'Content-Type': 'application/json' }
});



// ** Get Products
export const getProducts = async () => {
    try {
        const response = await api.get(`/products`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

// ** Get Specific Product
export const getSpecificProduct = async (id:string) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
}

// ** Create Product
export const createProduct = async (name:string) => {
    try {
        const response = await api.post(
            `/products`,
            { name : name },
        );
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
}

// ** Delete Product
export const deleteProduct = async (id:string) => {
    try {
        const response = await api.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting product with id ${id}:`, error);
        throw error;
    }
}

// ** Update Product
export const updateProduct = async (id:string,name:string) => {
    try {
        const response = await api.patch(
            `/products/${id}`,
            { name: name },
        );
        return response.data;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
}