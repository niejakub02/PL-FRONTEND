import { TextField } from "@mui/material";
import AvatarBox from "../../components/avatar/Avatar.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import "../../styles/Styles.css";
import "../../pages/sign/Sign.css";
import "./Settings.css";
import Wrapper from "../../components/wrapper/Wrapper.jsx";

const Settings = (props) => {
    const languages = props.languages;
    return (
        <Wrapper handleOpen={props.handleOpen} type={"SETTINGS"}>
            <div className="overflow">
                <BoxSettings
                    type={
                        <AvatarBox
                            name={"ANIA"}
                            img={
                                "https://i.pinimg.com/originals/a3/28/e0/a328e0a4361c2b157f1253f2ef69d608.jpg"
                            }
                        />
                    }
                    name={"AVATAR"}
                />
                <BoxSettings
                    type={<input type="text" value="ANIA" disabled />}
                    name={"FIRST NAME"}
                />
                <BoxSettings
                    type={<input type="text" value="BLAZKOVICZ" disabled />}
                    name={"LAST NAME"}
                />
                <BoxSettings
                    type={<input type="number" value="20" disabled />}
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
