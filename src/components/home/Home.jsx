import { useState } from "react";
import Header from "../header/Header.jsx";
import Contacts from "../contacts/Contacts.jsx";
import Chat from "../chat/Chat.jsx";
import Map from "../map/Map.jsx";
import "./Home.css";

const Home = (props) => {
    const [isMap, setIsMap] = useState(true);

    return (
        <div className="home flexCC">
            <Header show={1} />
            <div className="main">
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
                        <div className="logos_main">
                            <div
                                className={`logo_main flexCC ${
                                    isMap ? "active" : "not_active"
                                }`}
                                onClick={() => setIsMap(true)}
                            >
                                <img src="../assets/map.svg" />
                                <p>MAP</p>
                            </div>
                            <div
                                className={`logo_main flexCC ${
                                    !isMap ? "active" : "not_active"
                                }`}
                                onClick={() => setIsMap(false)}
                            >
                                <img src="../assets/chat.svg" />
                                <p>CHAT</p>
                            </div>
                        </div>
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
        </div>
    );
};

export default Home;
