import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.jsx";

import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

import "../../styles/Styles.css";
import "./Sign.css";

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

            <div className="container flexCC">
                <Header show={0} />
                <div className="box">
                    <Outlet context={setIsLoading} />
                    <img src="../assets/login_bg.svg" className="img_bg" />
                </div>
            </div>
        </>
    );
};

export default Sign;
