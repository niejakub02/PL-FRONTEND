import "./Header.css";

const Header = (props) => {
    const button = (
        <>
            <div className="button_header">
                <img src="../assets/bell.svg" />
                <img src="../assets/profile.svg" />
            </div>
        </>
    );
    return (
        <div className="logo">
            <div className="text_logo">
                <img src="../assets/logo.png" />
                <p>M8map</p>
            </div>
            {props.show ? button : null}
        </div>
    );
};
export default Header;
