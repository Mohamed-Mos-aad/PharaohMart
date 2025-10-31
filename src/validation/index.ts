// ** Interfaces
import type { ISignUpData } from "../interfaces";




// ** Function
export const checkFormValidation = ({ userFullName, userEmail, userPhoneNumber, userPassword, userConfirmPassword, userStoreName } : ISignUpData)=>{
    const errors = {
        userFullName: "",
        userEmail: "",
        userPhoneNumber: "",
        userPassword: "",
        userConfirmPassword: "",
        userStoreName: ""
    }

    if (!userFullName || userFullName.trim().length < 3) {
        errors.userFullName = "Please enter your full name";
    }

    if (!userEmail || !/^\S+@\S+\.\S+$/.test(userEmail)) {
        errors.userEmail = "Please enter a valid email";
    }

    if (!userPhoneNumber || userPhoneNumber.trim().length < 8 || userPhoneNumber.trim().length > 15) {
        errors.userPhoneNumber = "Please enter a valid phone number";
    }

    if (!userPassword || userPassword.trim().length < 8) {
        errors.userPassword = "Password must be at least 8 characters";
    }

    if (!userConfirmPassword) {
        errors.userConfirmPassword = "Please confirm your password";
    } else if (userConfirmPassword !== userPassword) {
        errors.userConfirmPassword = "Passwords do not match";
    }

    if (userStoreName !== undefined && userStoreName.trim().length < 3) {
        errors.userStoreName = "Please enter your store name";
    }

    return errors;
}