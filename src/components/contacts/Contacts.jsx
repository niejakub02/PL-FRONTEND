import { InputAdornment, TextField } from "@mui/material";
import AvatarBox from "../avatar/Avatar";
import "./Contacts.css";

const Contacts = (props) => {
    const count = 1;
    const noContacts = (
        <div className="no-contacts flexCC">
            <img src="../assets/no-contacts.svg" />
            <p>
                You have not reached out to anyone yet! Use the map beside to
                find people.
            </p>
        </div>
    );
    return (
        <div className="contacts">
            <div className="header">
                <div className="logo_main flexCC">
                    <img src="../assets/user.svg" />
                    <p>CONTACTS</p>
                </div>
                <div className="dots" />
            </div>
            <div className="all_contacts">
                {!count ? noContacts : <AllContacts friends={props.friends} />}
            </div>
        </div>
    );
};

const AllContacts = (props) => {
    const friends = props.friends;
    return (
        <>
            <TextField
                variant="outlined"
                label="Search contacts"
                sx={{ width: "100%" }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            className="search_contacts"
                        >
                            <img src="../assets/search.svg" />
                        </InputAdornment>
                    ),
                }}
            />
            <div className="people">
                {friends.map((el, i) => {
                    return (
                        <div className="one_person " key={i + el.id}>
                            <div className="flexCC">
                                <AvatarBox name={el.name} img={el.img} />
                                <p>{el.name}</p>
                            </div>
                            <div className="markers">
                                <img src="../assets/chat2.svg" />
                                <img src="../assets/star.svg" />
                                <img src="../assets/tresh.svg" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Contacts;
