// ============================================
// api/config/axios.config.ts
// ============================================

import axios, { AxiosError, type AxiosInstance } from "axios";
// ** Utils
import { deletePharaohMartKey, getPharaohMartData } from "../../utils/localStorage";

// ============================================
// Validation
// ============================================
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
    throw new Error("VITE_API_URL is not defined in environment variables");
}





// ============================================
// Axios Instance
// ============================================
export const api: AxiosInstance = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});





// ============================================
// Request Interceptor
// ============================================
api.interceptors.request.use(
    (config) => {
        const { token } = getPharaohMartData();
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (config.data instanceof FormData) {
            delete config.headers["Content-Type"];
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);




// ============================================
// Response Interceptor
// ============================================
api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        // Handle common errors
        if (error.response?.status === 401) {
            // Clear invalid token
            deletePharaohMartKey("token");
            // Redirect to login (optional)
            window.location.href = "/login";
        }

        if (error.response?.status === 500) {
        console.error("[Server Error]:", error);
        }

        return Promise.reject(error);
    }
);




// ============================================
// Export API URL for other uses
// ============================================
export { API_URL };