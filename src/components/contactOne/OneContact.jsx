import { useState } from "react";

import AvatarBox from "../avatar/Avatar";

import "./OneContact.css";

const OneContact = ({ friend, deleteContact, showChat, chat, changeChat }) => {
    const favorite = friend.favorite
        ? "../assets/starMarked.svg"
        : "../assets/star.svg";
    const [star, setStar] = useState(favorite);
    const changeStar = () => {
        if (star === "../assets/star.svg") {
            setStar("../assets/starMarked.svg");
        } else {
            setStar("../assets/star.svg");
        }
    };

    return (
        <div className="one_person ">
            <div className="flexCC">
                <AvatarBox name={friend.name} img={friend.avatar} />
                <p>{friend.name}</p>
            </div>
            <div className="markers">
                <div className="flexCC">
                    <img
                        src={
                            chat === friend.user_id
                                ? "../assets/chat.svg"
                                : "../assets/chat2.svg"
                        }
                        onClick={() => {
                            changeChat(friend.user_id);
                            showChat(friend.user_id);
                        }}
                    />
                </div>
                <div className="flexCC">
                    <img src={star} onClick={changeStar} />
                </div>
                <div className="flexCC">
                    <img
                        src="../assets/tresh.svg"
                        onClick={() => deleteContact(friend.user_id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default OneContact;
