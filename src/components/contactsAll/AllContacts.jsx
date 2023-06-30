import { useRef, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

import OneContact from "../contactOne/OneContact.jsx";

import "./AllContacts.css";
import client from "../../utils/API.js";
import { toast } from "react-toastify";

const AllContacts = ({
    friends,
    setFriends,
    showChat,
    handleOpenReview,
    star,
    chatId
}) => {
    const [friendsBase, setFriendsBase] = useState(friends);
    const searchInput = useRef(null);

    const debouncedHandler = () => {
        setFriends(
            friendsBase.filter((friend) =>
                friend.firstName.toLowerCase().includes(searchInput?.current?.value)
            )
        );
    };

    const deleteContact = (id) => {
        setFriends((f) => f.filter((el) => el.id !== id));
        setFriendsBase((f) => f.filter((el) => el.id !== id));
        client.delete(`User/${id}/DeclineInvitation`)
            .then(res => {
                toast("Contact has been removed.", { type: "success" })
                console.log('decline');
            })
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
            {!!friends.length ?
                <div className="people">
                    {friends.map((friend) => {
                        return (
                            <OneContact
                                friend={friend}
                                key={friend.id}
                                deleteContact={deleteContact}
                                showChat={showChat}
                                chatId={chatId}
                                handleOpenReview={handleOpenReview}
                                star={star}
                            />
                        );
                    })}
                </div> : <div className="no-contacts flexCC">
                    <img src="../assets/no-contacts.svg" />
                    <p>
                        You have not reached out to anyone yet! Use the map beside to
                        find people.
                    </p>
                </div>
            }
        </>
    );
};

export default AllContacts;
