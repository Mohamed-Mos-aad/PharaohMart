// ** Hooks & Tools
import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { usePharaohMartData } from "../hooks/usePharaoMartData";
// ** Interfaces
interface ProtectedRouteProps {
    children: JSX.Element;
    requireAuth?: boolean;
}



// ** Auth Protect
export function ProtectedAuthRoutes({ children }: ProtectedRouteProps) {
    const { token } = usePharaohMartData();

    if (token) {
        return <Navigate to="/" replace/>;
    }

    

    return <>{children}</>;
}



// ** Dashboard Protect
export function ProtectedDashboardRoutes({ children }: ProtectedRouteProps) {
    const {token, userData} = usePharaohMartData();
    if (!userData || userData?.roleType?.toLowerCase() === 'customer' || !token) {
        return <Navigate to="/" replace/>;
    }

    

    return <>{children}</>;
}