import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    const button = (
        <>
            <div className="button_header">
                <img src="../assets/bell.svg" />
                <Link to="settings">
                    <img src="../assets/profile.svg" />
                </Link>
            </div>
        </>
    );
    return (
        <div className="logo">
            <div className="text_logo">
                <Link to="/">
                    <img src="../assets/logo.png" />
                </Link>

                <p>M8map</p>
            </div>
            {props.show ? button : null}
        </div>
    );
};
export default Header;
