import { Outlet, useNavigate } from "react-router-dom";

import "./Sign.css";
import Header from "../header/Header.jsx";
import { useEffect } from "react";

const Sign = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate('/');
        }
    }, [])

    return (
        <div className="main_sign">
            <Header show={0} />
            <div className="sign">
                <Outlet />
                <img src="../assets/login_bg.svg" className="login_bg" />
            </div>
        </div>
    );
};

export default Sign;
