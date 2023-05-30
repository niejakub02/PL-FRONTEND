import "./Header.css";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const Header = ({ show, handleOpen }) => {
    const notifications = 1;

    const button = (
        <>
            <div className="button_header">
                <Badge color="primary" variant={notifications ? "dot" : null}>
                    <img src="../assets/bell.svg" onClick={handleOpen} />
                </Badge>
                {show == 2 ? (
                    <img src="../assets/profile.svg" />
                ) : (
                    <Link to="settings">
                        <img src="../assets/profile.svg" />
                    </Link>
                )}
            </div>
        </>
    );

    return (
        <>
            <div className="logo">
                <div className="text_logo">
                    {show == 0 ? (
                        <img src="../assets/logo.png" />
                    ) : (
                        <Link to="/">
                            <img src="../assets/logo.png" />
                        </Link>
                    )}
                    <p>M8map</p>
                </div>
                {show != 0 ? button : null}
            </div>
        </>
    );
};

export default Header;
