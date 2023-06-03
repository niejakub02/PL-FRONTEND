import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Wrapper from "../../components/wrapper/Wrapper.jsx";
import AvatarBox from "../../components/avatar/Avatar.jsx";
import "../../styles/Styles.css";
import "../settings/Settings.jsx";

const Profile = ({ languages, handleOpen, person }) => {
    return (
        <Wrapper handleOpen={handleOpen} type={"PROFILE"}>
            <div className="overflow">
                <BoxSettings
                    type={<AvatarBox name={person.name} img={person.img} />}
                    name={"AVATAR"}
                />
                <BoxSettings type={<p>{person.name}</p>} name={"FIRST NAME"} />
                <BoxSettings type={<p>{"BLAZKOVICZ"}</p>} name={"LAST NAME"} />
                <BoxSettings type={<p>{"20"}</p>} name={"AGE"} />
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
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
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
