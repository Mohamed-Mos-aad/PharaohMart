// ** Interfaces
import type { ISignUpData } from "../../interfaces";



export const signUpAction = async (signUpData: ISignUpData) => {
    try {
        const registerRes = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: signUpData.userFullName,
            email: signUpData.userEmail,
            password: signUpData.userPassword,
        }),
        });

        const registerData = await registerRes.json();

        if (!registerData?.user?.id) {
        console.log("Registration failed:", registerData);
        return;
        }

        const userId = registerData.user.id;

        const adminJwt = import.meta.env.VITE_ADMIN_TOKEN

        const roleId = signUpData.role === "seller" ? 4 : 3;

        const updateRes = await fetch(`http://localhost:1337/api/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminJwt}`,
        },
        body: JSON.stringify({
            role: roleId,
            roleType: signUpData.role,
            phone: signUpData.userPhoneNumber,
            ...(signUpData.role === "seller" ? { storeName: signUpData.userStoreName } : {}),
        }),
        });

        const updateData = await updateRes.json();
        console.log("User updated successfully:", updateData);

    } catch (error) {
        console.log(error);
    }
};