import { useState } from "react";
import Chat from "../../components/chat/Chat.jsx";
import Map from "../../components/map/Map.jsx";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import "./TabPanel.css";

const TabPanel = ({
    position,
    countries,
    MarkerInformation,
    chat,
    setPositionMapX,
    setPositionMapY,
}) => {
    const [isMap, setIsMap] = useState(true);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="block_map">
            <div className="box_header">
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
                            className={`logo_header ${
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
                            className={`logo_header ${
                                !isMap ? "active" : "not_active"
                            }`}
                        />
                    </Tabs>
                </Box>
                <div className="dots" />
            </div>
            {isMap ? (
                <Map
                    position={position}
                    countries={countries}
                    MarkerInformation={MarkerInformation}
                    setPositionMapX={setPositionMapX}
                    setPositionMapY={setPositionMapY}
                />
            ) : (
                <Chat chat={chat} />
            )}
        </div>
    );
};

export default TabPanel;
