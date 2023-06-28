import { useState } from "react";

import Header from "../header/Header";

import "../../styles/Styles.css";
import "./Wrapper.css";

const Wrapper = ({ children, handleOpen, type, saveData }) => {
    const img =
        type === "SETTINGS" ? (
            <img src="../assets/settings.svg" />
        ) : (
            <img src="../assets/profile2.svg" />
        );
    const panel =
        type === "SETTINGS" ? (
            <div className="panel_buttons">
                <button className="buttons pointer" onClick={saveData}>
                    Save
                </button>
            </div>
        ) : (
            <div className="panel_buttons">
                <button className="buttons pointer">Follow</button>
            </div>
        );

    return (
        <div className="container flexCC">
            <Header show={1} handleOpen={handleOpen} />
            <div className="box">
                <div className="wrapper">
                    <div className="box_header">
                        <div className="logo_header flexCC">
                            {img}
                            <p>{type}</p>
                        </div>
                        <div className="dots" />
                    </div>
                    {children}
                    {panel}
                </div>
                <img src="../assets/login_bg.svg" className="img_bg" />
            </div>
        </div>
    );
};

export default Wrapper;
