import Header from "../../components/header/Header.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import TabPanel from "../../components/tabPanel/TabPanel.jsx";
import "./Home.css";
import KeepMountedModal from "../../components/modal/Modal.jsx";

const Home = (props) => {
    return (
        <>
            {/* <KeepMountedModal /> */}
            <div className="home">
                <Header show={1} />
                <Contacts friends={props.friends} />
                <TabPanel
                    position={props.position}
                    countries={props.countries}
                    chat={props.chat}
                />
            </div>
        </>
    );
};

export default Home;
