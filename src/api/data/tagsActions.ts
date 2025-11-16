// ** Config
import { api } from "../config/axios.config";





// ============================================
// Main Functions
// ============================================


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