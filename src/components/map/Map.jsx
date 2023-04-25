import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import Markers from "../markers/Markers.jsx";

import './Map.css'

const Map = (props) => {
    return (
        <div className='App'>
            <MapContainer className="map" center={[51.7752695, 19.4545949]} zoom={20} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers position={props.position}/>
            </MapContainer>
        </div>
    )
}

export default Map;