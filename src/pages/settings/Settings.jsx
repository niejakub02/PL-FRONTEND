import { TextField } from "@mui/material";
import AvatarBox from "../../components/avatar/Avatar.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import "../../styles/Styles.css";
import "../../pages/sign/Sign.css";
import "./Settings.css";
import Wrapper from "../../components/wrapper/Wrapper.jsx";
import { useState } from "react";

const Settings = ({ languages, handleOpen, user }) => {
    const [disabled, setDisabled] = useState({
        avatar: true,
        name: true,
        surname: true,
        age: true,
        languages: true,
        description: true,
    });

    const changeDisabled = (value) => {
        setDisabled((el) => ({
            ...disabled,
            [value]: !el[value],
        }));
    };

    return (
        <Wrapper handleOpen={handleOpen} type={"SETTINGS"}>
            <div className="overflow">
                <BoxSettings
                    type={<AvatarBox name={user.name} img={user.avatar} />}
                    name={"AVATAR"}
                    nameInput={"avatar"}
                    change={changeDisabled}
                />
                <BoxSettings
                    type={
                        <input
                            type="text"
                            defaultValue={user.name}
                            disabled={disabled.name}
                            className={
                                disabled.name
                                    ? "inputno_no_active"
                                    : "inputno_active"
                            }
                        />
                    }
                    name={"FIRST NAME"}
                    nameInput={"name"}
                    change={changeDisabled}
                />
                <BoxSettings
                    type={
                        <input
                            type="text"
                            defaultValue={user.surname}
                            disabled={disabled.surname}
                            className={
                                disabled.surname
                                    ? "inputno_no_active"
                                    : "inputno_active"
                            }
                        />
                    }
                    nameInput={"surname"}
                    name={"LAST NAME"}
                    change={changeDisabled}
                />
                <BoxSettings
                    type={
                        <input
                            type="number"
                            defaultValue={user.age}
                            disabled={disabled.age}
                            className={
                                disabled.age
                                    ? "inputno_no_active"
                                    : "inputno_active"
                            }
                        />
                    }
                    name={"AGE"}
                    nameInput={"age"}
                    change={changeDisabled}
                />
                <BoxSettings
                    type={
                        <Autocomplete
                            size="small"
                            className="autocomplete_languages"
                            multiple
                            id="tags-outlined"
                            options={languages}
                            getOptionLabel={(option) => option.title}
                            defaultValue={[languages[0]]}
                            filterSelectedOptions
                            readOnly={disabled.languages}
                            renderInput={(params) => (
                                <TextField {...params} placeholder="SEARCH" />
                            )}
                        />
                    }
                    nameInput={"languages"}
                    name={"LANGUAGES"}
                    change={changeDisabled}
                />
                <BoxSettings
                    type={
                        <textarea
                            type="text"
                            defaultValue={user.description}
                            disabled={disabled.description}
                            className={
                                disabled.description
                                    ? "inputno_no_active"
                                    : "inputno_active"
                            }
                        />
                    }
                    nameInput={"description"}
                    name={"DESCRIPTION"}
                    change={changeDisabled}
                />
            </div>
        </Wrapper>
    );
};

const BoxSettings = ({ type, name, change, nameInput }) => {
    return (
        <div className="block_settings flexCC">
            {type}
            <button
                className="buttons pointer"
                onClick={() => change(nameInput)}
            >
                <p>CHANGE</p>
                <img src="../assets/pencil.png" />
            </button>
            <p className="name_settings">{name}</p>
        </div>
    );
};

export default Settings;
