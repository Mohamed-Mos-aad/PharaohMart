// ** Interfaces
import type { ISignInData } from "../../interfaces";



export const LogInAction = async (signUpData: ISignInData)=>{
    try{
        const res = await fetch("http://localhost:1337/api/auth/local/", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                identifier: signUpData?.userEmail,
                password: signUpData?.userPassword,
            }),
        })

        const data = await res.json();
        if (res.ok && data.jwt) {
            localStorage.setItem("token", data.jwt);
            const userRes = await fetch(`http://localhost:1337/api/users/${data.user.id}?populate=role`, {
                headers: {
                "Authorization": `Bearer ${data.jwt}`,
                "Content-Type": "application/json",
                },
            });
            const userData = await userRes.json();
            return userData;
        } else {
            console.error(data.error?.message || data.message);
            return data.error?.message;
        }
    } catch (err) {
        if (err instanceof Error) {
            return { error: err.message };
        }
        return { error: "Login failed" };
    }
}