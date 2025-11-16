// ** Hooks && Tools
import axios from "axios";
// ** Interfaces
import type { ISignUpData } from "../../interfaces";
// ** Config
import { api } from "../config/axios.config";



// ============================================
// Types
// ============================================
interface SignUpResponse {
    success: boolean;
    data?: {
        user: {
            id: string;
            username: string;
            email: string;
        };
        jwt: string;
    };
    error?: {
        message: string;
        details?: unknown;
    };
}
interface RegisterResponse {
    user: {
        id: string;
        username: string;
        email: string;
    };
    jwt: string;
}





// ============================================
// Constants
// ============================================
const ROLE_MAPPING = {
    seller: 4,
    customer: 3,
} as const;





// ============================================
// Main Function
// ============================================
export const signUpAction = async (userSignUpData: ISignUpData): Promise<SignUpResponse> => {
    try {
        const registerData = await registerUser(userSignUpData);

        if (!registerData?.user?.id) {
            return {
                success: false,
                error: {
                    message: "Registration failed - no user ID returned",
                    details: registerData,
                },
            };
        }

        await updateUserProfileAction(registerData.user.id, userSignUpData, registerData.jwt)

        return {
            success: true,
            data: {
                user: registerData.user,
                jwt: registerData.jwt,
            },
        };

        

    } catch (error) {
        console.error("[SignUp Error]:", error);
        
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


// ** Register new user
const registerUser = async (signUpData: ISignUpData): Promise<RegisterResponse> => {
    try{
        const response = await api.post('/auth/local/register',{
            username: signUpData.userFullName,
            email: signUpData.userEmail,
            password: signUpData.userPassword,
        })

        return response.data;
    }catch (error) {
        console.error("[Register Error]:", error);
        throw error;
    }
}


// ** Update user profile with role and additional data
const updateUserProfileAction = async (userId: string, signUpData: ISignUpData, userJwt: string): Promise<void> =>{
    const roleId = ROLE_MAPPING[signUpData.role as keyof typeof ROLE_MAPPING];
    try{
        api.put(`/users/${userId}`,{
            role: roleId,
            roleType: signUpData.role,
            phone: signUpData.userPhoneNumber,
            ...(signUpData.role === "seller" && { storeName: signUpData.userStoreName })
            },{
                headers: {
                    Authorization: `Bearer ${userJwt}`,
                },
            })

    }catch (error) {
        console.error("[Update Profile Error]:", error);
        throw error;
    }

}