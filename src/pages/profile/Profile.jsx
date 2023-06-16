import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useSearchParams } from "react-router-dom";

import Wrapper from "../../components/wrapper/Wrapper.jsx";
import AvatarBox from "../../components/avatar/Avatar.jsx";
import { Users } from "../../Database.jsx";

import "../../styles/Styles.css";
import "../settings/Settings.jsx";

const Profile = ({ languages, handleOpen }) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const person = Users.find((el) => {
        return el.user_id == id;
    });

    return (
        <Wrapper handleOpen={handleOpen} type={"PROFILE"}>
            <div className="overflow">
                <BoxSettings
                    type={<AvatarBox name={person.name} img={person.avatar} />}
                    name={"AVATAR"}
                />
                <BoxSettings
                    type={<p>{person.name.toUpperCase()}</p>}
                    name={"FIRST NAME"}
                />
                <BoxSettings
                    type={<p>{person.surname.toUpperCase()}</p>}
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
                            getOptionLabel={(option) => option.title}
                            defaultValue={[languages[0]]}
                            filterSelectedOptions
                            readOnly
                            renderInput={(params) => (
                                <TextField {...params} placeholder="SEARCH" />
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
        </Wrapper>
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
