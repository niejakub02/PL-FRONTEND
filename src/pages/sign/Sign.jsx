import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header.jsx";

import "../../styles/Styles.css";
import "./Sign.css";

const Sign = () => {
    return (
        <div className="container flexCC">
            <Header show={0} />
            <div className="box">
                <Outlet />
                <img src="../assets/login_bg.svg" className="img_bg" />
            </div>
        </div>
    );
};

export default Sign;
