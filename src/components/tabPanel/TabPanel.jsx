import { useState } from "react";
import Chat from "../../components/chat/Chat.jsx";
import Map from "../../components/map/Map.jsx";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import "./TabPanel.css";

const TabPanel = (props) => {
    const [isMap, setIsMap] = useState(true);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="block_map">
            <div className="header">
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        //textColor="black"
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
                <Map position={props.position} countries={props.countries} />
            ) : (
                <Chat chat={props.chat} />
            )}
        </div>
    );
};

export default TabPanel;
