import { useEffect, useState } from "react";

import Header from "../../components/header/Header.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import TabPanel from "../../components/tabPanel/TabPanel.jsx";
import PopupPerson from "../../components/popup/Popup.jsx";
import { Chat } from "../../Database.jsx";

import client from "../../utils/API.js";
import "../../styles/Styles.css";
import "./Home.css";
import { HubConnectionBuilder } from "@microsoft/signalr";

const Home = ({ position, countries, handleOpen, handleOpenReview }) => {
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
    const [isLoading, setIsLoading] = useState({
        contacts: false
    });

    useEffect(() => {
        loadContacts();
    }, [])

    const loadContacts = () => {
        setIsLoading({
            ...isLoading,
            contacts: true
        });
        client.get('User/Contacts')
            .then(res => {
                setFriends(res.data)
            })
            .finally(() => {
                setIsLoading({
                    ...isLoading,
                    contacts: false
                });
            })
    }
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

        client.get(`Marker/${id}/Owner`)
            .then(res => {
                setIdPopup(res.data);
                popupOpen();
            })
    };

    const showChat = (id) => {
        setChatId(id);
        if (isMap) {
            changeValueTabPanel(id);
        }
    };

    const changeValueTabPanel = (e) => {
        if (friends) {
            setValueTabPanel((el) => (el == 1 ? 0 : 1));
            setIsMap((el) => !el);

            if (!Number.isInteger(e)) {
                setChatId(valueTabPanel ? null : friends[0]?.id);
            }
        } else {
            console.log('friends not yet loaded / no friends');
        }
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
                chatId={chatId}
                showChat={showChat}
                handleOpenReview={handleOpenReview}
                isLoading={isLoading.contacts}
                loadContacts={loadContacts}
            />
            <TabPanel
                friends={friends}
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
