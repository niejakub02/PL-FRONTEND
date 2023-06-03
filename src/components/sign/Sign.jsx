import { Outlet, useNavigate } from "react-router-dom";

import "./Sign.css";
import Header from "../header/Header.jsx";
import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const Sign = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate('/');
        }
        setIsLoading(false);
    }, [])

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <div className="main_sign">
                <Header show={0} />
                <div className="sign">
                    <Outlet context={setIsLoading} />
                    <img src="../assets/login_bg.svg" className="login_bg" />
                </div>
            </div>
        </>
    );
};

export default Sign;
