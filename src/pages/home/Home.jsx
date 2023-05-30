import { useState } from "react";
import Header from "../../components/header/Header.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import TabPanel from "../../components/tabPanel/TabPanel.jsx";
import ModalComponent from "../../components/modal/Modal.jsx";
import "./Home.css";

const Home = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <ModalComponent
                setOpen={setOpen}
                open={open}
                friends={props.friends}
            />
            <div className="home">
                <Header show={1} handleOpen={handleOpen} />
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
