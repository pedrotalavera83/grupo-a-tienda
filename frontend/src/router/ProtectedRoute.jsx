import { Outlet, Navigate } from "react-router";

const ProtectedRoute = () => {
    const isAuth = false; // Replace with actual authentication logic
    return isAuth ? <Outlet /> : <Navigate to="/login " />;
};

export default ProtectedRoute