import AvatarBox from "../avatar/Avatar";

import "../../pages/sign/Sign.css";
import "../modal/Modal.css";
import "./Notification.css";
import { useEffect, useState } from "react";
import client from "../../utils/API";
import LoaderFill from "../loaderFill/loaderFill";

const Notification = ({ handleClose, onAccept, onDecline }) => {
    const [invitations, setInvitations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        client.get('User/Invitations')
            .then(res => {
                setInvitations(res.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return (
        invitations ?
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
                    {
                        isLoading ?
                            <LoaderFill />
                            : invitations.length ?
                                invitations.map((el) => {
                                    return (
                                        <OnePersonNotification friend={el} key={el.id} onAccept={onAccept} onDecline={onDecline} setInvitations={setInvitations} />
                                    );
                                })
                                : 'no invitations'
                    }
                </div>
                <div className="panel_buttons">
                    <button className="buttons">ACCEPT ALL</button>
                    <button className="button_not_border buttons">
                        REJECT ALL
                    </button>
                </div>
            </div> : null
    );
};

const OnePersonNotification = ({ friend, setInvitations, onAccept, onDecline }) => {
    return (
        <div className="one_person_notification" key={friend.id}>
            <div className="flexCC">
                <AvatarBox name={friend.firstName} img={friend.avatar} />
                <p>
                    <b>{friend.firstName || 'STRANGER'}</b> IS TRYING TO REACH OUT TO YOU
                </p>
            </div>
            <div className="markers_notification">
                <img src="../assets/ok.svg" onClick={() => {
                    onAccept(friend.id);
                    setInvitations((i) => i.filter((el) => el.id !== friend.id));
                }} />
                <img src="../assets/no.svg" onClick={() => {
                    onDecline(friend.id);
                    setInvitations((i) => i.filter((el) => el.id !== friend.id));
                }} />
            </div>
        </div>
    );
};

export default Notification;
