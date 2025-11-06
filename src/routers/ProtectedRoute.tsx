// ** Hooks & Tools
import type { JSX } from "react";
import { Navigate } from "react-router-dom";
// ** Interfaces
interface ProtectedRouteProps {
    children: JSX.Element;
    requireAuth?: boolean;
}


export default function ProtectedAuthRoutes({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to="/" replace/>;
    }

    

    return <>{children}</>;
}