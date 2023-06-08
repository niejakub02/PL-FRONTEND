import { InputAdornment, TextField } from "@mui/material";
import AvatarBox from "../avatar/Avatar";
import { useCallback, useRef, useState } from "react";
import { debounce } from "lodash";

import "./Contacts.css";

const Contacts = ({ friends, setFriends, friendsBase }) => {
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
                {!friends.length ? (
                    noContacts
                ) : (
                    <AllContacts
                        friends={friends}
                        setFriends={setFriends}
                        friendsBase={friendsBase}
                    />
                )}
            </div>
        </div>
    );
};

const AllContacts = ({ friends, setFriends, friendsBase }) => {
    const searchInput = useRef(null);
    const debouncedHandler = useCallback(
        debounce(() => {
            setFriends(
                friendsBase.current.filter((friend) =>
                    friend.name
                        .toLowerCase()
                        .includes(searchInput?.current?.value)
                )
            );
        }, 300),
        [searchInput?.current?.value]
    );

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
                {friends.map((friend, index) => {
                    return (
                        <OneContact
                            friend={friend}
                            key={friend.id + index}
                            setFriends={setFriends}
                        />
                    );
                })}
            </div>
        </>
    );
};

const OneContact = ({ friend, setFriends }) => {
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

    const deleteContact = () => {
        setFriends((f) => f.filter((el) => el.id !== friend.id));
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
                <img src="../assets/tresh.svg" onClick={deleteContact} />
            </div>
        </div>
    );
};

export default Contacts;
