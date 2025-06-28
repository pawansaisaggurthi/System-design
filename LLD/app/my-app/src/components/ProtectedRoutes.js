import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

    const isAuthticated = false;

    return isAuthticated? <Outlet/> : <Navigate to={'/login'}/>

}

export default ProtectedRoutes;

