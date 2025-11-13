// ** Hooks && Tools
import axios from "axios";
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