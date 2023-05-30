import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = ({ show, handleOpen }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const notifications = 1;
    const profile =
        show == 2 ? (
            <MenuItem className="profile" onClick={handleClose}>
                PROFILE
            </MenuItem>
        ) : (
            <Link to="settings">
                <MenuItem className="profile" onClick={handleClose}>
                    PROFILE
                </MenuItem>
            </Link>
        );
    const logout =
        show == 2 ? (
            <Link to="../signIn">
                <MenuItem onClick={handleClose}>LOGOUT</MenuItem>
            </Link>
        ) : (
            <Link to="signIn">
                <MenuItem onClick={handleClose}>LOGOUT</MenuItem>
            </Link>
        );

    const button = (
        <>
            <div className="button_header">
                <Badge color="primary" variant={notifications ? "dot" : null}>
                    <img src="../assets/bell.svg" onClick={handleOpen} />
                </Badge>
                <img
                    src="../assets/profile.svg"
                    className="button_menu"
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                />
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    className="menu"
                    PaperProps={style}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    {profile}
                    {logout}
                </Menu>
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

const style = {
    elevation: 0,
    sx: {
        overflow: "visible",
        background: "#f5f5f5",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
            background: "#f5f5f5",
        },
        "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
            background: "#f5f5f5",
        },
    },
};

export default Header;
