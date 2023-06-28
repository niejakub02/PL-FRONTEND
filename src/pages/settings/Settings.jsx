import { useState, useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

import AvatarBox from "../../components/avatar/Avatar.jsx";
import Wrapper from "../../components/wrapper/Wrapper.jsx";
import { User_languages, languages } from "../../Database.jsx";

import "../../styles/Styles.css";
import "../../pages/sign/Sign.css";
import "./Settings.css";

const Settings = ({ handleOpen, user }) => {
    const name = useRef();
    const surname = useRef();
    const age = useRef();
    const description = useRef();
    const [disabled, setDisabled] = useState({
        name: true,
        surname: true,
        age: true,
        languages: true,
        description: true,
    });
    const [values, setValues] = useState({
        avatar: user.avatar,
        name: user.name,
        surname: user.surname,
        age: user.age,
        languages: [],
        description: user.description,
    });

    useEffect(() => {
        const arrayLanguages = searchLanguages(user.user_id);
        setValues({ ...values, languages: arrayLanguages });
    }, []);

    const objectToArray = (object, value) => {
        const array = [];
        object.forEach((el, i) => {
            array[i] = el[value];
        });
        return array;
    };

    const searchLanguages = (userId) => {
        const languagesUser = User_languages.filter(
            (l) => l.user_id === userId
        );
        const idLanguages = objectToArray(languagesUser, "language_id");
        return languages.filter((el) => idLanguages.includes(el.id));
    };

    const changeDisabled = (value) => {
        setDisabled((el) => ({
            ...disabled,
            [value]: !el[value],
        }));
    };

    const changeImg = (file) => {
        console.log(file.current.value); // The picture needs to be sent to the server and then changed
        setValues({ ...values, avatar: file.current.value });
    };

    const changeValues = (ref, type) => {
        setValues({ ...values, [type]: ref.current.value });
    };

    const onChangeEvent = (event, value) => {
        setValues({ ...values, languages: value });
    };

    const saveData = () => {
        console.log(values);
    };

    return (
        <Wrapper handleOpen={handleOpen} type={"SETTINGS"} saveData={saveData}>
            <div className="overflow">
                <BoxSettings
                    type={<AvatarBox name={values.name} img={values.avatar} />}
                    name={"AVATAR"}
                    nameInput={"avatar"}
                    change={changeDisabled}
                    changeImg={changeImg}
                />
                <BoxSettings
                    type={
                        <input
                            type="text"
                            defaultValue={values.name}
                            disabled={disabled.name}
                            className={
                                disabled.name
                                    ? "inputno_no_active"
                                    : "inputno_active"
                            }
                            ref={name}
                            onChange={() => changeValues(name, "name")}
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
                            defaultValue={values.surname}
                            disabled={disabled.surname}
                            className={
                                disabled.surname
                                    ? "inputno_no_active"
                                    : "inputno_active"
                            }
                            ref={surname}
                            onChange={() => changeValues(surname, "surname")}
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
                            defaultValue={values.age}
                            disabled={disabled.age}
                            className={
                                disabled.age
                                    ? "inputno_no_active"
                                    : "inputno_active"
                            }
                            ref={age}
                            onChange={() => changeValues(age, "age")}
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
                            onChange={onChangeEvent}
                            options={languages}
                            getOptionLabel={(option) => option.title}
                            value={values.languages}
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
                            defaultValue={values.description}
                            disabled={disabled.description}
                            className={
                                disabled.description
                                    ? "inputno_no_active"
                                    : "inputno_active"
                            }
                            ref={description}
                            onChange={() =>
                                changeValues(description, "description")
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

const BoxSettings = ({ type, name, change, nameInput, changeImg }) => {
    const file = useRef(null);
    const buttonChange =
        nameInput !== "avatar" ? (
            <button
                className="buttons pointer"
                onClick={() => change(nameInput)}
            >
                <p>CHANGE</p>
                <img src="../assets/pencil.png" />
            </button>
        ) : (
            <div>
                <input
                    name="file"
                    type="file"
                    id="input__file"
                    className="input__file"
                    multiple
                    ref={file}
                    onChange={() => changeImg(file)}
                />
                <label htmlFor="input__file" className="buttons pointer">
                    <p>CHANGE</p>
                    <img src="../assets/pencil.png" />
                </label>
            </div>
        );
    return (
        <div className="block_settings flexCC">
            {type}
            {buttonChange}
            <p className="name_settings">{name}</p>
        </div>
    );
};

export default Settings;
