import { Accordion, AccordionDetails, AccordionSummary, Backdrop, Box, CircularProgress, Rating, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate, useSearchParams } from "react-router-dom";

import Wrapper from "../../components/wrapper/Wrapper.jsx";
import AvatarBox from "../../components/avatar/Avatar.jsx";
import { Users } from "../../Database.jsx";

import "../../styles/Styles.css";
import "../settings/Settings.jsx";
import { useEffect, useState } from "react";
import client from "../../utils/API.js";
import { toast } from "react-toastify";
import LoaderFill from "../../components/loaderFill/loaderFill.jsx";

const Profile = ({ handleOpen }) => {
    const [searchParams] = useSearchParams();
    const [person, setPerson] = useState(null);
    const [languages, setLanguages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const id = searchParams.get("id");

    const handleAdd = () => {
        client.post(`User/${id}/invite`)
            .then(res => {
                toast("Invitation has been sent!", { type: "success" })
                console.log('SUPER');
            })
            .catch(res => {
                toast("Something went wrong.", { type: "error" })
            })
    }

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            client.get('Language/Languages'),
            client.get(`User/${id}`),
            client.get(`User/${id}/GetReviews`),
        ])
            .then(([languagesRes, detailsRes, reviewsRes, userRes]) => {
                const languagesData = languagesRes.data;
                const detailsData = detailsRes.data;
                const reviewsData = reviewsRes.data;

                detailsData.languages = detailsData.languages.map(l => l.languageId);
                detailsData.reviews = reviewsData;

                setLanguages(languagesData);
                setPerson(detailsData);
            })
            .finally(() => {
                setIsLoading(false);
            })

        // client.get('Language/Languages')
        //     .then(res => {
        //         setLanguages(res.data);
        //         client.get(`User/${id}`)
        //             .then(res => {
        //                 const userData = res.data;
        //                 userData.languages = userData.languages.map(l => l.languageId)
        //                 setPerson(userData)
        //             })
        //     })
    }, [])

    return (
        person ?
            <Wrapper handleOpen={handleOpen} type={"PROFILE"} onAdd={handleAdd}>
                <div className="overflow fill">
                    <BoxSettings
                        type={<AvatarBox name={person.firstName} img={person.avatar} />}
                        name={"AVATAR"}
                    />
                    <BoxSettings
                        type={
                            <Accordion sx={{ backgroundColor: 'whitesmoke', boxShadow: 'none', width: '90%' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ '& > div': { justifyContent: 'center' } }}
                                >
                                    <Rating
                                        value={person.reviews.map(r => r.rating).reduce((a, b) => a + b, 0) / person.reviews?.length}
                                        readOnly
                                        precision={0.5} />

                                </AccordionSummary>
                                <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {
                                        person.reviews.map(r => (
                                            <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                                                {r.description}
                                            </Typography>
                                        ))
                                    }
                                </AccordionDetails>
                            </Accordion>
                        }
                        name={"RATING"}
                    />
                    <BoxSettings
                        type={<p>{person.firstName.toUpperCase()}</p>}
                        name={"FIRST NAME"}
                    />
                    <BoxSettings
                        type={<p>{person.lastName.toUpperCase()}</p>}
                        name={"LAST NAME"}
                    />
                    <BoxSettings type={<p>{person.age}</p>} name={"AGE"} />
                    <BoxSettings
                        type={
                            <Autocomplete
                                size="small"
                                className="autocomplete_languages"
                                multiple
                                id="tags-outlined"
                                options={languages}
                                getOptionLabel={(option) => option.languageName}
                                defaultValue={languages.filter(l => person.languages.includes(l.id))}
                                filterSelectedOptions
                                readOnly
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
                                value={person.description}
                                disabled
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

const BoxSettings = ({ name, type }) => {
    return (
        <div className="block_settings flexCC">
            {type}
            <p className="name_settings">{name}</p>
        </div>
    );
};

export default Profile;
