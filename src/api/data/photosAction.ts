// ** Config
import { api } from "../config/axios.config";





// ============================================
// Main Functions
// ============================================



// ** Get Photo
export const getPhotoAction = async (id: number) => {
    try {
        const response = await api.get(`/upload/files/${id}`);

        return response.data.url;
    } catch (error) {
        console.error("Error uploading photo:", error);
        throw error;
    }
}

// ** Upload Photo
export const uploadPhotoAction = async (photo: File) => {
    try {
        const formData = new FormData();
        formData.append('files', photo);

        const response = await api.post(
            `/upload`,
            formData,
        );
        return response.data[0];
    } catch (error) {
        console.error("Error uploading photo:", error);
        throw error;
    }
}

// ** Delete Photo
export const deletePhotoAction = async (id: number) => {
    try {
        await api.delete(
            `/upload/files/${id}`,
        );
    } catch (error) {
        console.error("Error uploading photo:", error);
        throw error;
    }
}