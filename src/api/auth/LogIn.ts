// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import type { ISignInData } from "../../interfaces";
// ** Config
import { api } from "../config/axios.config";
import { setPharaohMartData } from "../../utils/localStorage";




// ============================================
// Main Function
// ============================================
export const LogInAction = async (loginData: ISignInData) =>{
    try{
        const responseData = await authenticateUser(loginData);
        const token = responseData.jwt;
        setPharaohMartData("token", token);
        const userResponse = await api.get(`/users/${responseData.user.id}?populate=*`);
        setPharaohMartData("userData",userResponse.data);
        return {
            success: true,
            data: {
                user: responseData.user,
                jwt: responseData.jwt,
            },
        };
    } catch (error) {

        if (axios.isAxiosError(error)) {
        return {
            success: false,
            error: {
                message: error.response?.data?.message || error.message,
                details: error.response?.data,
            },
        };
        }

        return {
            success: false,
            error: {
                message: error instanceof Error ? error.message : "Unknown error occurred",
                details: error,
            },
        };
    }
};





// ============================================
// Helper Functions
// ============================================


// ** Login user
const authenticateUser = async (logInData: ISignInData) => {
    try{
        const response = await api.post('/auth/local',{
            identifier: logInData.userEmail,
            password: logInData.userPassword,
        })
        
        return response.data;
    }catch (error) {
        console.error("[Login Error]:", error);
        throw error;
    }
}