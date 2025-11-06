// ** Interfaces
import type { ISignUpData } from "../../interfaces";



export const signUpAction = async (signUpData: ISignUpData)=>{
    try{
        const res = await fetch("http://localhost:1337/api/auth/local/register", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: signUpData?.userFullName,
                email: signUpData?.userEmail,
                password: signUpData?.userPassword,
            }),
        })

        const data = await res.json();
        if (data.user) {
                    await fetch(`http://localhost:1337/api/users/${data.user.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${data.jwt}`,
                        },
                        body: JSON.stringify({
                            role: signUpData?.role === "seller" ? 4 : 3,
                        }),
                    });

                    return true
                } else {
                    return false
                }
            } catch (err) {
                console.error(err);
            }
}