import Header from "../../components/header/Header.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import TabPanel from "../../components/tabPanel/TabPanel.jsx";
import { friends as friendsMock } from "../../Database.jsx";
import { useRef, useState } from "react";

import "../../styles/Styles.css";
import "./Home.css";

const Home = ({ position, countries, chat, handleOpen }) => {
    const [friends, setFriends] = useState(friendsMock)
    const friendsBase = useRef(friendsMock);

    // Get rid of props
    // User data request to state

    return (
        <div className="home">
            <Header show={1} handleOpen={handleOpen} />
            <Contacts friends={friends} setFriends={setFriends} friendsBase={friendsBase} />
            <TabPanel position={position} countries={countries} chat={chat} />
        </div>
    );
};

export default Home;
