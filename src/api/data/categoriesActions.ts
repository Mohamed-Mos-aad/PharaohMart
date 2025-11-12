// ** Hooks && Tools
import axios from "axios";



// ** Apis
const api = axios.create({
    baseURL: "http://localhost:1337/api/",
    headers: { 'Content-Type': 'application/json' }
});




// ** Get Categories
export const getCategoriesAction = async () => {
    try {
        const response = await api.get(`/categories`);
        return response.data.data;
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
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching category with id ${id}:`, error);
        throw error;
    }
}

// ** Create Category
export const createCategoryAction = async (name:string) => {
    try {
        const response = await api.post(
            `/categories`,
            { name : name },
        );
        return response.data;
    } catch (error) {
        console.error("Error creating category:", error);
        throw error;
    }
}

// ** Delete Category
export const deleteCategoryAction = async (id:string) => {
    try {
        const response = await api.delete(`/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting category with id ${id}:`, error);
        throw error;
    }
}

// ** Update Category
export const updateCategoryAction = async (id:string,name:string) => {
    try {
        const response = await api.patch(
            `/categories/${id}`,
            { name: name },
        );
        return response.data;
    } catch (error) {
        console.error(`Error updating category with id ${id}:`, error);
        throw error;
    }
}