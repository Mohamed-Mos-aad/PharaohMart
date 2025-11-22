// ** Interfaces
import type { INewProduct } from "../../interfaces";
// ** Utils
import { getPharaohMartData } from "../../utils/localStorage";
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
    const { userData } = getPharaohMartData();
    if(!userData) return
    try {
        const response = await api.get(
            `/products?filters[owner][id][$eq]=${userData.id}&populate=*`
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
        const response = await api.get(`/products?filters[categories][title][$eq]=${id}&filters[isPublished][$eq]=true&populate=*`);
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
        const response = await api.get(`/products?populate=*&filters[$and][0][isPublished][$eq]=true&filters[$and][1][$or][0][name][$containsi]=${search}&filters[$and][1][$or][1][description][$containsi]=${search}&filters[$and][1][$or][2][productSKU][$containsi]=${search}&filters[$and][1][$or][3][tags][name][$containsi]=${search}&filters[$and][1][$or][4][categories][title][$containsi]=${search}&filters[$and][1][$or][5][owner][username][$containsi]=${search}`);
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