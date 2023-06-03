import Header from "../../components/header/Header.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import TabPanel from "../../components/tabPanel/TabPanel.jsx";

import "../../styles/Styles.css";
import "./Home.css";

const Home = ({ friends, position, countries, chat, handleOpen }) => {
    return (
        <div className="home">
            <Header show={1} handleOpen={handleOpen} />
            <Contacts friends={friends} />
            <TabPanel position={position} countries={countries} chat={chat} />
        </div>
    );
};

export default Home;
