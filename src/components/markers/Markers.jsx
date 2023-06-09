import { Marker } from "react-leaflet";

const Markers = ({ position, MarkerInformation }) => {
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
    const markers = position.map((el) => {
        return (
            <div key={el.user_id}>
                <Marker
                    position={[el.latitude, el.longitude]}
                    icon={!el.offers_help ? redIcon : blueIcon}
                    eventHandlers={{
                        click: (e) => {
                            MarkerInformation(e, el.user_id);
                        },
                    }}
                />
            </div>
        );
    });

    return <>{markers}</>;
};

export default Markers;
