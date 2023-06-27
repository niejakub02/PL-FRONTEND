import { TextField } from "@mui/material";
import AvatarBox from "../../components/avatar/Avatar.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import "../../styles/Styles.css";
import "../../pages/sign/Sign.css";
import "./Settings.css";
import Wrapper from "../../components/wrapper/Wrapper.jsx";
import { useEffect, useState } from "react";
import client from "../../utils/API.js";

const Settings = ({ handleOpen }) => {
    const [user, setUser] = useState(null);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        client.get('Language/Languages')
            .then(res => {
                setLanguages(res.data);
                client.get('User/Informations')
                    .then(res => {
                        const userData = res.data;
                        userData.languages = userData.languages.map(l => l.languageId)
                        setUser(userData)
                    })
            })

        // Requests for some reason cant run concurrently
        // Promise.all([
        //     client.get('Language/Languages'),
        //     client.get('User/Informations')
        // ])
    }, [])

    const updateUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const updateUsersLanguages = (e, value) => {
        setUser({
            ...user,
            language: value.map(l => l.id)
        })
    }

    const handleSave = () => {
        client.put(`User`, user)
            .then(res => {
                console.log('UPDATED');
            })
    }

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        user ?
            <Wrapper handleOpen={handleOpen} type={"SETTINGS"} onSave={handleSave}>
                <div className="overflow">
                    <BoxSettings
                        type={<AvatarBox name={user.firstName} img={user.avatar} />}
                        name={"AVATAR"}
                    />
                    <BoxSettings
                        type={<input type="text" name="firstName" value={user.firstName} onChange={updateUser} />}
                        name={"FIRST NAME"}
                    />
                    <BoxSettings
                        type={<input type="text" name="lastName" value={user.lastName} onChange={updateUser} />}
                        name={"LAST NAME"}
                    />
                    <BoxSettings
                        type={<input type="number" name="age" value={user.age} onChange={updateUser} />}
                        name={"AGE"}
                    />
                    <BoxSettings
                        type={
                            <Autocomplete
                                size="small"
                                className="autocomplete_languages"
                                multiple
                                id="tags-outlined"
                                options={languages}
                                getOptionLabel={(option) => option.languageName}
                                defaultValue={languages.filter(l => user.languages.includes(l.id))}
                                filterSelectedOptions
                                onChange={updateUsersLanguages}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        }
                        name={"LANGUAGES"}
                    />
                    <BoxSettings
                        type={
                            <textarea
                                type="text"
                                name="description"
                                value={user.description}
                                onChange={updateUser}
                            />
                        }
                        name={"DESCRIPTION"}
                    />
                </div>
            </Wrapper> : null
    );
};

const BoxSettings = (props) => {
    return (
        <div className="block_settings flexCC">
            {props.type}
            <button className="buttons">
                <p>CHANGE</p>
                <img src="../assets/pencil.png" />
            </button>
            <p className="name_settings">{props.name}</p>
        </div>
    );
};

export default Settings;
