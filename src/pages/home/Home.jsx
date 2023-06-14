import Header from "../../components/header/Header.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import TabPanel from "../../components/tabPanel/TabPanel.jsx";
import PopupPerson from "../../components/popup/Popup.jsx";
import { friends as friendsMock } from "../../Database.jsx";
import { Chat } from "../../Database.jsx";
import { useRef, useState } from "react";
import "../../styles/Styles.css";
import "./Home.css";

const Home = ({ position, countries, handleOpen }) => {
    const [friends, setFriends] = useState(friendsMock);

    const [showPopup, setShowPopup] = useState(false);
    const [positionPopupX, setPositionPopupX] = useState(null);
    const [positionPopupY, setPositionPopupY] = useState(null);
    const [positionMapX, setPositionMapX] = useState(null);
    const [positionMapY, setPositionMapY] = useState(null);
    const [chatId, setChatId] = useState(0);
    const popupOpen = () => setShowPopup(true);
    const popupClose = () => setShowPopup(false);

    const popupCloseClick = (event) => {
        if (
            showPopup &&
            !event.target.classList.contains("leaflet-marker-icon") &&
            !event.target.closest(".box_popup")
        ) {
            setShowPopup();
        }
    };

    const MarkerInformation = (e) => {
        setPositionPopupX(e.containerPoint.x + positionMapX);
        setPositionPopupY(e.containerPoint.y + positionMapY);
        popupOpen();
    };

    const showChat = (id) => {
        const chat_id = Chat.find((el) => {
            return el.inviting_user_id === 0 && el.invited_user_id === id;
        });
        setChatId(chat_id.chat_id);
    };

    return (
        <div className="home" onClick={popupCloseClick}>
            {showPopup ? (
                <PopupPerson
                    friends={friends}
                    popupClose={popupClose}
                    positionPopupX={positionPopupX}
                    positionPopupY={positionPopupY}
                />
            ) : null}
            <Header show={1} handleOpen={handleOpen} />
            <Contacts
                friends={friends}
                setFriends={setFriends}
                showChat={showChat}
            />
            <TabPanel
                position={position}
                countries={countries}
                chatId={chatId}
                MarkerInformation={MarkerInformation}
                setPositionMapX={setPositionMapX}
                setPositionMapY={setPositionMapY}
            />
        </div>
    );
};

export default Home;
