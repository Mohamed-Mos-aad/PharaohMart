// ** Hooks && Tools
import axios from "axios";



// ** Apis
const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_API,
    headers: { 'Content-Type': 'application/json' }
});




// ** Get Categories
export const getCategories = async () => {
    try {
        const response = await api.get(`/categories`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}

// ** Get Specific Category
export const getSpecificCategory = async (id:string) => {
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
export const createCategory = async (name:string) => {
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
export const deleteCategory = async (id:string) => {
    try {
        const response = await api.delete(`/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting category with id ${id}:`, error);
        throw error;
    }
}

// ** Update Category
export const updateCategory = async (id:string,name:string) => {
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