import { Backdrop, CircularProgress, Rating, TextField } from "@mui/material";
import AvatarBox from "../../components/avatar/Avatar.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import "../../styles/Styles.css";
import "../../pages/sign/Sign.css";
import "./Settings.css";
import Wrapper from "../../components/wrapper/Wrapper.jsx";
import { useEffect, useState } from "react";
import client from "../../utils/API.js";
import { toast } from "react-toastify";

const Settings = ({ handleOpen }) => {
    const [user, setUser] = useState(null);
    const [languages, setLanguages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            client.get('Language/Languages'),
            client.get(`User/Informations`),
        ])
            .then(([languagesRes, detailsRes]) => {
                const languagesData = languagesRes.data;
                const detailsData = detailsRes.data;

                client.get(`User/${detailsData.id}/GetReviews`)
                    .then(res => {
                        const reviewsData = res.data;
                        detailsData.reviewsRating = reviewsData.map(r => r.rating);
                        detailsData.languages = detailsData.languages.map(l => l.languageId);

                        setLanguages(languagesData);
                        setUser(detailsData);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    })
            })

        // client.get('Language/Languages')
        //     .then(res => {
        //         setLanguages(res.data);
        //         client.get('User/Informations')
        //             .then(res => {
        //                 const userData = res.data;
        //                 console.log(userData);
        //                 userData.languages = userData.languages.map(l => l.languageId)
        //                 setUser(userData)
        //             })
        //     })
    }, [])

    const updateUser = (e) => {
        if (e.target.name == "avatar") {
            setUser({
                ...user,
                ImageFile: e.target.files[0]
            })
        } else {
            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
        }
    }

    const updateUsersLanguages = (e, value) => {
        setUser({
            ...user,
            language: value.map(l => l.id)
        })
    }

    const handleSave = () => {
        client.put(`User`, user, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then(res => {
                toast("Profile has been updated!", { type: "success" })
                console.log('UPDATED');
            })
    }

    return (
        user ?
            <Wrapper handleOpen={handleOpen} type={"SETTINGS"} onSave={handleSave}>
                <div className="overflow fill">
                    <BoxSettings
                        type={
                            <>
                                <AvatarBox name={user.firstName} img={user.avatar} htmlFor="file-upload" ></AvatarBox>
                                <input type="file" name="avatar" accept="image/png, image/jpeg" onChange={updateUser} />
                            </>
                        }
                        name={"AVATAR"}
                    />
                    <BoxSettings
                        type={<Rating value={user.reviewsRating / user.reviewsRating.length} readOnly />}
                        name={"RATING"}
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
                        type={<input type="number" name="age" value={user.age} min={0} max={150} onChange={updateUser} />}
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
            </Wrapper> : <Backdrop open={isLoading} sx={{ color: '#fff' }}>
                <CircularProgress color="inherit" />
            </Backdrop>
    );
};

const BoxSettings = (props) => {
    return (
        <div className="block_settings flexCC">
            {props.type}
            {/* <button className="buttons">
                <p>CHANGE</p>
                <img src="../assets/pencil.png" />
            </button> */}
            <p className="name_settings">{props.name}</p>
        </div>
    );
};

export default Settings;
