import { Marker, Popup } from "react-leaflet";
import { Avatar, Button, Rating } from "@mui/material";

import "./Markers.css";

const Markers = ({ position }) => {
    const markers = position.map((el) => {
        return (
            <Marker position={[el.lat, el.lng]} key={el.id}>
                <Popup>
                    <div className="head_information_human">
                        <div className="avatar_human">
                            <Avatar alt={el.name} src={el.img} />
                        </div>
                        <div className="information_human">
                            {el.name}
                            <p>
                                <strong>{el.rating}/5</strong> out of{" "}
                                <strong>{el.number_reviews}</strong> reviews
                            </p>
                            {/*<Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />*/}
                        </div>
                    </div>
                    <div className="description_human">
                        <p>{el.description}</p>
                        <ul>
                            {el.help_list.map((list, i) => {
                                return <li key={i}>{list}</li>;
                            })}
                        </ul>
                        <button>REACH OUT</button>
                    </div>
                </Popup>
            </Marker>
        );
    });

    return <>{markers}</>;
};

export default Markers;
