import { useEffect, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import client from "../../utils/API";

const Markers = ({ position, MarkerInformation, addMarker }) => {
    const map = useMapEvents({
        click: (e) =>
            addMarker(e),
    })

    var redIcon = new L.Icon({
        iconUrl:
            "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
    var blueIcon = new L.Icon({
        iconUrl:
            "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
        shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });


    return (
        <>
            {
                position.map((el) => (
                    <div key={el.marker.id}>
                        <Marker
                            position={[el.marker.latitude, el.marker.longitude]}
                            icon={el.marker.offersHelp ? redIcon : blueIcon}
                            eventHandlers={{
                                click: (e) => {
                                    MarkerInformation(e, el.marker.id);
                                },
                            }}
                        />
                    </div>
                ))
            }
        </>
    )
};

export default Markers;
