import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    // show 0 1 2
    const show = props.show;
    const button = (
        <>
            <div className="button_header">
                <img src="../assets/bell.svg" />
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
    );
};
export default Header;
