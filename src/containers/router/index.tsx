import { FC, memo } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { getAuthenticatedToken } from "../../services/storage/token"
import Signup from "../../views/Auth/Signup";
//import Login from  "../../views/Auth/Login"
import Welcome from "../../views/welcome";



const Router: FC = () => {
    const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken();
        const location = useLocation();

        if (!token) {
            return <Navigate to="/" replace state={{ from: location }} />;
        }
        return children;
    };
    const HandleSession = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken();
        const location = useLocation();

        if (token) {
            if (
                location.pathname === "/signup" ||
                location.pathname === "/login"  ||
                location.pathname === "/"
            ) {
                return <Navigate to="/Welcome" replace state={{ from: location }} />;
            }
        }
        return children;
    };

    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HandleSession><Welcome /></HandleSession>}></Route>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/signup' element={<HandleSession><Signup/></HandleSession>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default memo(Router);
