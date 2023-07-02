import { Box, CircularProgress, IconButton } from "@mui/material";
import AllContacts from "../contactsAll/AllContacts.jsx";
import CachedIcon from '@mui/icons-material/Cached';
import "./Contacts.css";
import LoaderFill from "../loaderFill/loaderFill.jsx";

const Contacts = ({ friends, setFriends, showChat, handleOpenReview, isLoading, chatId, loadContacts }) => {
    return (
        <div className="contacts">
            <div className="box_header">
                <div className="logo_header flexCC">
                    <img src="../assets/user.svg" />
                    <p>CONTACTS</p>
                    <IconButton onClick={loadContacts} disabled={isLoading.contacts} sx={{ ml: '0.25rem' }}>
                        <CachedIcon />
                    </IconButton>
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
