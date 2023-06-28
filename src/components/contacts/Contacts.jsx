import { Box, CircularProgress } from "@mui/material";
import AllContacts from "../contactsAll/AllContacts.jsx";

import "./Contacts.css";
import LoaderFill from "../loaderFill/loaderFill.jsx";

const Contacts = ({ friends, setFriends, showChat, handleOpenReview, isLoading }) => {
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
                {
                    isLoading ?
                        <LoaderFill />
                        : (
                            friends.length ?
                                <AllContacts
                                    friends={friends}
                                    setFriends={setFriends}
                                    showChat={showChat}
                                    handleOpenReview={handleOpenReview}
                                />
                                : noContacts
                        )
                }
            </div>
        </div >
    );
};

export default Contacts;
