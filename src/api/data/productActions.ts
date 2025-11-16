// ** Interfaces
import type { INewProduct } from "../../interfaces";
// ** Config
import { api } from "../config/axios.config";





// ============================================
// Main Functions
// ============================================


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

// ** Get Specific Category Products
export const getSpecificCategoryProductsAction = async (id:string) => {
    try {
        const response = await api.get(`/products?filters[categories][title][$eq]=${id}&populate=*`);
        return response.data.data;
    }
    catch (error) {
        console.error(`Error fetching products with id ${id}:`, error);
        throw error;
    }
}

// ** Get Specific Products
export const getSpecificSearchProductsAction = async (search:string) => {
    try {
        const response = await api.get(`/products?populate=*&filters[$or][0][name][$containsi]=${search}
            &filters[$or][1][description][$containsi]=${search}
            &filters[$or][2][productSKU][$containsi]=${search}
            &filters[$or][3][tags][name][$containsi]=${search}
            &filters[$or][4][categories][title][$containsi]=${search}
            &filters[$or][5][owner][username][$containsi]=${search}`);
        return response.data.data;
    }
    catch (error) {
        console.error(`Error fetching products with ${search}:`, error);
        throw error;
    }
}

// ** Get Specific Product
export const getSpecificProductAction = async (id:string) => {
    try {
        const response = await api.get(`/products/${id}?populate=*`);
        return response.data.data;
    }
    catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
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