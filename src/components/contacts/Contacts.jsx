import { Box, CircularProgress } from "@mui/material";
import AllContacts from "../contactsAll/AllContacts.jsx";

import "./Contacts.css";
import LoaderFill from "../loaderFill/loaderFill.jsx";

const Contacts = ({ friends, setFriends, showChat, handleOpenReview, isLoading, chatId }) => {

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
                            <AllContacts
                                friends={friends}
                                setFriends={setFriends}
                                showChat={showChat}
                                chatId={chatId}
                                handleOpenReview={handleOpenReview}
                            />
                        )
                }
            </div>
        </div>
    );
};

export default Contacts;
