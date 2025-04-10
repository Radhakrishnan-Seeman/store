import { Navigate, Outlet, Route } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function PrivateRoute({element,...rest}) {
    const {isAuthendicated} = useAuth();
    return (  
        isAuthendicated?<Outlet />:<Navigate to="/login"/>
    );
}

export default PrivateRoute;