// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import type { INewProduct } from "../../interfaces";
// ** Constants
const apiUrl = import.meta.env.VITE_API_URL;



// ** Apis
const token = localStorage.getItem("token");
const api = axios.create({
    baseURL: `${apiUrl}/api/`,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});



// ===============================
// ** Tags Actions
// ===============================

// ** Add Tags
export const addTagAction = async (tagName: string) => {
    try {
        const response = await api.post(`/tags`, {
            data: { name: tagName }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding tag:', error);
        throw error;
    }
};


// ** Get Tags
export const getTagsAction = async () => {
    try {
        const response = await api.get(`/tags`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
};


// ** Get Tag By name
export const findTagByName = async (tagName: string) => {
    try {
        const response = await api.get(`/tags?filters[name][$eq]=${tagName}`);
        return response.data.data[0] || null;
    } catch (error) {
        console.error('Error finding tag:', error);
        return null;
    }
};

// ===============================
// ** Products Actions
// ===============================

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