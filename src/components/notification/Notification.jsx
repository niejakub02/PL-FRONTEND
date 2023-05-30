import { Avatar } from "@mui/material";
import "../contacts/Contacts.css";
import "./Notification.css";

const Notification = ({ friends, handleClose }) => {
    return (
        <div className="notification">
            <div className="header">
                <div className="logo_notification flexCC">
                    <img src="../assets/notification.svg" />
                    <p>NOTIFICATIONS</p>
                </div>
                <img
                    src="../assets/exit.svg"
                    onClick={handleClose}
                    className="exit_button"
                />
            </div>
            <div className="all_people">
                {friends.map((el) => {
                    return <OnePersonNotification friend={el} key={el.id} />;
                })}
            </div>
            <div className="save">
                <button className="button_accept buttons_notification">
                    ACCEPT ALL
                </button>
                <button className="buttons_notification">REJECT ALL</button>
            </div>
        </div>
    );
};

const OnePersonNotification = ({ friend }) => {
    return (
        <div className="one_person_notification" key={friend.id}>
            <div className="flexCC notification_inf">
                <div className="avatar">
                    <Avatar alt={friend.name} src={friend.img} />
                </div>
                <p style={{ fontSize: "11px" }}>
                    <b>PERSON {friend.id + 1}</b> IS TRYING TO REACH OUT TO YOU
                </p>
            </div>
            <div className="markers_notification">
                <img src="../assets/ok.svg" />
                <img src="../assets/no.svg" />
            </div>
        </div>
    );
};

export default Notification;
