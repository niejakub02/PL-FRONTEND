import { CircularProgress, Box, Backdrop } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import client from "./API";


const ProtectedRoute = () => {
    const [auth, setAuth] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        client.get('/User/Verify').then(res => {
            if (res.data) {
                setAuth(true)
            }
            else {
                setAuth(false)
                navigate("/signIn")
            }
        }).catch(err => {
            setAuth(false);
            localStorage.removeItem("access_token");
            navigate("/signIn");
        })
    }, []);

    if (!auth) return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
    >
        <CircularProgress color="inherit" />
    </Backdrop>

    return <Outlet />
}

export default ProtectedRoute;