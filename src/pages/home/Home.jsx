import { useEffect, useState } from "react";

import Header from "../../components/header/Header.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import TabPanel from "../../components/tabPanel/TabPanel.jsx";
import PopupPerson from "../../components/popup/Popup.jsx";
import { Chat } from "../../Database.jsx";

import client from "../../utils/API.js";
import "../../styles/Styles.css";
import "./Home.css";

const Home = ({ position, countries, handleOpen, Users }) => {
    const [friends, setFriends] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [positionPopupX, setPositionPopupX] = useState(null);
    const [positionPopupY, setPositionPopupY] = useState(null);
    const [positionMapX, setPositionMapX] = useState(null);
    const [positionMapY, setPositionMapY] = useState(null);
    const [chatId, setChatId] = useState(0);
    const [isMap, setIsMap] = useState(true);
    const [valueTabPanel, setValueTabPanel] = useState(0);
    const [idPopup, setIdPopup] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        client.get('User/Contacts')
            .then(res => {
                console.log(res.data);
                setFriends(res.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

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

    const MarkerInformation = (e, id) => {
        setPositionPopupX(e.containerPoint.x + positionMapX);
        setPositionPopupY(e.containerPoint.y + positionMapY);
        const personPopup = Users.find((el) => {
            return el.user_id === id;
        });
        setIdPopup(personPopup);
        popupOpen();
    };

    const showChat = (id) => {
        const chat = Chat.find((el) => {
            return el.inviting_user_id === 0 && el.invited_user_id === id;
        });
        setChatId(chat.chat_id);
        if (isMap) {
            changeValueTabPanel();
        }
    };

    const changeValueTabPanel = () => {
        setValueTabPanel((el) => (el == 1 ? 0 : 1));
        setIsMap((el) => !el);
    };

    return (
        <div className="home" onClick={popupCloseClick}>
            {showPopup ? (
                <PopupPerson
                    friends={friends}
                    popupClose={popupClose}
                    positionPopupX={positionPopupX}
                    positionPopupY={positionPopupY}
                    idPopup={idPopup}
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
                changeValueTabPanel={changeValueTabPanel}
                isMap={isMap}
                valueTabPanel={valueTabPanel}
            />
        </div>
    );
};

export default Home;
