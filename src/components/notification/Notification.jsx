import AvatarBox from "../avatar/Avatar";

import "../../pages/sign/Sign.css";
import "../modal/Modal.css";
import "./Notification.css";

const Notification = ({ friends, handleClose }) => {
    return (
        <div className="box_modal">
            <div className="box_header">
                <div className="logo_modal_box flexCC">
                    <img src="../assets/notification.svg" />
                    <p>NOTIFICATIONS</p>
                </div>
                <img
                    src="../assets/exit.svg"
                    onClick={handleClose}
                    className="exit_button"
                />
            </div>
            <div className="notification_people">
                {friends.map((el) => {
                    return <OnePersonNotification friend={el} key={el.id} />;
                })}
            </div>
            <div className="panel_buttons">
                <button className="buttons">ACCEPT ALL</button>
                <button className="button_not_border buttons">
                    REJECT ALL
                </button>
            </div>
        </div>
    );
};

const OnePersonNotification = ({ friend }) => {
    return (
        <div className="one_person_notification" key={friend.id}>
            <div className="flexCC">
                <AvatarBox name={friend.name} img={friend.img} />
                <p>
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
