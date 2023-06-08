import { InputAdornment, TextField } from "@mui/material";
import AvatarBox from "../avatar/Avatar";
import { useRef, useState } from "react";

import "./Contacts.css";

const Contacts = ({ friends, setFriends }) => {
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
            <div className="box_header">
                <div className="logo_header flexCC">
                    <img src="../assets/user.svg" />
                    <p>CONTACTS</p>
                </div>
                <div className="dots" />
            </div>
            <div className="all_contacts">
                {!true ? (
                    noContacts
                ) : (
                    <AllContacts friends={friends} setFriends={setFriends} />
                )}
            </div>
        </div>
    );
};

const AllContacts = ({ friends, setFriends }) => {
    const [friendsBase, setFriendsBase] = useState(friends);
    const searchInput = useRef(null);

    const debouncedHandler = () => {
        setFriends(
            friendsBase.filter((friend) =>
                friend.name.toLowerCase().includes(searchInput?.current?.value)
            )
        );
    };

    const deleteContact = (id) => {
        setFriends((f) => f.filter((el) => el.id !== id));
        setFriendsBase((f) => f.filter((el) => el.id !== id));
    };

    return (
        <>
            <TextField
                variant="outlined"
                label="Search contacts"
                sx={{ width: "100%" }}
                onChange={debouncedHandler}
                inputRef={searchInput}
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
                {friends.map((friend) => {
                    return (
                        <OneContact
                            friend={friend}
                            key={friend.id}
                            deleteContact={deleteContact}
                        />
                    );
                })}
            </div>
        </>
    );
};

const OneContact = ({ friend, deleteContact }) => {
    const favorite = friend.favorite
        ? "../assets/starMarked.svg"
        : "../assets/star.svg";
    const [star, setStar] = useState(favorite);
    const changeStar = () => {
        if (star === "../assets/star.svg") {
            setStar("../assets/starMarked.svg");
        } else {
            setStar("../assets/star.svg");
        }
    };

    return (
        <div className="one_person ">
            <div className="flexCC">
                <AvatarBox name={friend.name} img={friend.img} />
                <p>{friend.name}</p>
            </div>
            <div className="markers">
                <img src="../assets/chat2.svg" />
                <img src={star} onClick={changeStar} />
                <img
                    src="../assets/tresh.svg"
                    onClick={() => deleteContact(friend.id)}
                />
            </div>
        </div>
    );
};

export default Contacts;
