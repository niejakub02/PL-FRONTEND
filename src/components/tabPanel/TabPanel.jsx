import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import Chat from "../../components/chat/Chat.jsx";
import Map from "../../components/map/Map.jsx";

import "./TabPanel.css";

const TabPanel = ({
    position,
    countries,
    MarkerInformation,
    chatId,
    setPositionMapX,
    setPositionMapY,
    isMap,
    changeValueTabPanel,
    valueTabPanel,
    friends
}) => {
    return (
        <div className="block_map">
            <div className="box_header">
                <Box>
                    <Tabs value={valueTabPanel} onChange={changeValueTabPanel}>
                        <Tab
                            label={
                                <>
                                    <img src="../assets/map.svg" />
                                    <p>MAP</p>
                                </>
                            }
                            className={`logo_header ${isMap ? "active" : "not_active"
                                }`}
                        />
                        <Tab
                            label={
                                <>
                                    <img src="../assets/chat.svg" />
                                    <p>CHAT</p>
                                </>
                            }
                            className={`logo_header ${!isMap ? "active" : "not_active"
                                }`}
                            disabled={!friends.length}
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
                <Chat chatId={chatId} />
            )}
        </div>
    );
};

export default TabPanel;
