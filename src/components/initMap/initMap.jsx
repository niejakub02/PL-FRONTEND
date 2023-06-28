import { MapContainer, TileLayer, Marker, Popup, } from "react-leaflet";
import Markers from "../markers/Markers.jsx";

import "./initMap.css";
import { Backdrop, Box, CircularProgress } from "@mui/material";

const InitMap = ({ position, MarkerInformation, addMarker, isLoading }) => {
    return (
        <>
            {isLoading && <CircularProgress sx={{ zIndex: 10000, position: "absolute", margin: "auto auto" }} />}
            <MapContainer
                className={'map'}
                center={[51.7752695, 19.4545949]}
                zoom={15}
                scrollWheelZoom={true}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers
                    position={position}
                    MarkerInformation={MarkerInformation}
                    addMarker={addMarker}
                />
                {isLoading && <div className="custom-backdrop"></div>}
            </MapContainer>
        </>

    );
};

export default InitMap;
