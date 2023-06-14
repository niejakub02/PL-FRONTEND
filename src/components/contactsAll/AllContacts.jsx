import { useRef, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

import OneContact from "../contactOne/OneContact.jsx";

import "./AllContacts.css";

const AllContacts = ({ friends, setFriends, showChat }) => {
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

    const [chat, setChat] = useState(1);
    const changeChat = (id) => {
        setChat(id);
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
                            showChat={showChat}
                            changeChat={changeChat}
                            chat={chat}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default AllContacts;
