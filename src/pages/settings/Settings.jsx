import { TextField } from "@mui/material";
import AvatarBox from "../../components/avatar/Avatar.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import "../../styles/Styles.css";
import "../../pages/sign/Sign.css";
import "./Settings.css";
import Wrapper from "../../components/wrapper/Wrapper.jsx";

const Settings = ({ languages, handleOpen, user }) => {
    return (
        <Wrapper handleOpen={handleOpen} type={"SETTINGS"}>
            <div className="overflow">
                <BoxSettings
                    type={<AvatarBox name={user.name} img={user.avatar} />}
                    name={"AVATAR"}
                />
                <BoxSettings
                    type={<input type="text" value={user.name} disabled />}
                    name={"FIRST NAME"}
                />
                <BoxSettings
                    type={<input type="text" value={user.surname} disabled />}
                    name={"LAST NAME"}
                />
                <BoxSettings
                    type={<input type="number" value={user.age} disabled />}
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
                            value={user.description}
                            disabled
                        />
                    }
                    name={"DESCRIPTION"}
                />
            </div>
        </Wrapper>
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
