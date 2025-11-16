// ** Hooks & Tools
import type { JSX } from "react";
import { Navigate } from "react-router-dom";
// ** Interfaces
interface ProtectedRouteProps {
    children: JSX.Element;
    requireAuth?: boolean;
}


export function ProtectedAuthRoutes({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to="/" replace/>;
    }

    

    return <>{children}</>;
}


export function ProtectedDashboardRoutes({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem("token");
    const data = JSON.parse(localStorage.getItem("userData") || "null");

    if (!data || data?.userType === 'customer' || !token) {
        return <Navigate to="/" replace/>;
    }

    

    return <>{children}</>;
}