import { useState } from "react";
import Header from "../../components/header/Header.jsx";
import Contacts from "../../components/contacts/Contacts.jsx";
import Chat from "../../components/chat/Chat.jsx";
import Map from "../../components/map/Map.jsx";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import "./Home.css";

const Home = (props) => {
    const [isMap, setIsMap] = useState(true);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="home">
            <Header show={1} />
            <div className="contacts">
                <div className="header">
                    <div className="logo_main flexCC">
                        <img src="../assets/user.svg" />
                        <p>CONTACTS</p>
                    </div>
                    <div className="dots" />
                </div>
                <Contacts friends={props.friends} />
            </div>

            <div className="block_map">
                <div className="header">
                    <Box>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="black"
                        >
                            <Tab
                                label={
                                    <>
                                        <img src="../assets/map.svg" />
                                        <p>MAP</p>
                                    </>
                                }
                                onClick={() => setIsMap(true)}
                                className={`logo_main ${
                                    isMap ? "active" : "not_active"
                                }`}
                            />
                            <Tab
                                label={
                                    <>
                                        <img src="../assets/chat.svg" />
                                        <p>CHAT</p>
                                    </>
                                }
                                onClick={() => setIsMap(false)}
                                className={`logo_main ${
                                    !isMap ? "active" : "not_active"
                                }`}
                            />
                        </Tabs>
                    </Box>
                    <div className="dots" />
                </div>
                {isMap ? (
                    <Map
                        position={props.position}
                        countries={props.countries}
                    />
                ) : (
                    <Chat chat={props.chat} />
                )}
            </div>
        </div>
    );
};

export default Home;
