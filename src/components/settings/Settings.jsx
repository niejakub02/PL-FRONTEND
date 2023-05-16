import Header from "../header/Header.jsx";
import { Button, TextField } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import "../sign/Sign.css";
import "./Settings.css";

const Settings = () => {
    return (
        <div className="main_sign">
            <Header show={1} />
            <div className="sign">
                <div className="settings">
                    <div className="header">
                        <div className="logo_main flexCC">
                            <img src="../assets/settings.svg" />
                            <p>SETTINGS</p>
                        </div>
                        <div className="dots" />
                    </div>
                    <div className="boxes">
                        <BoxesSettings
                            type={
                                <div className="avatar">
                                    <img src="https://i.pinimg.com/originals/a3/28/e0/a328e0a4361c2b157f1253f2ef69d608.jpg" />
                                </div>
                            }
                            name={"Avatar"}
                        />
                        <BoxesSettings
                            type={<input type="text" value="ANIA" disabled />}
                            name={"FIRST NAME"}
                        />
                        <BoxesSettings
                            type={
                                <input
                                    type="text"
                                    value="BLAZKOVICZ"
                                    disabled
                                />
                            }
                            name={"LAST NAME"}
                        />
                        <BoxesSettings
                            type={<input type="number" value="20" disabled />}
                            name={"AGE"}
                        />
                        <BoxesSettings
                            type={
                                <Autocomplete
                                    size="small"
                                    className="autocomplete"
                                    multiple
                                    id="tags-outlined"
                                    options={languages}
                                    getOptionLabel={(option) => option.title}
                                    defaultValue={[languages[0]]}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="SEARCH"
                                        />
                                    )}
                                    readOnly
                                />
                            }
                            name={"LANGUAGES"}
                        />
                        <BoxesSettings
                            type={
                                <textarea
                                    type="text"
                                    value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                                    disabled
                                />
                            }
                            name={"DESCRIPTION"}
                        />
                    </div>
                    <div className="save">
                        <button className="button_change">Save</button>
                    </div>
                </div>
                <img src="../assets/login_bg.svg" className="login_bg" />
            </div>
        </div>
    );
};

const ButtonChange = () => {
    return (
        <button className="button_change">
            <p>CHANGE</p>
            <img src="../assets/pencil.png" />
        </button>
    );
};

const BoxesSettings = (props) => {
    return (
        <div className="block_settings flexCC">
            {props.type}
            <ButtonChange />
            <p className="name_settings">{props.name}</p>
        </div>
    );
};

export const languages = [
    { id: 0, title: "Poland" },
    { id: 1, title: "Italy" },
    { id: 2, title: "Germany" },
    { id: 3, title: "France" },
    { id: 4, title: "China" },
    { id: 5, title: "Austria" },
    { id: 6, title: "Mexico" },
];

export default Settings;
