import { Marker } from "react-leaflet";

const Markers = ({ position, MarkerInformation }) => {
    const markers = position.map((el) => {
        return (
            <div key={el.id} onClick={() => console.log("Hi!")}>
                <Marker
                    position={[el.lat, el.lng]}
                    eventHandlers={{
                        click: (e) => {
                            MarkerInformation(e);
                        },
                    }}
                />
            </div>
        );
    });

    return <>{markers}</>;
};

export default Markers;
