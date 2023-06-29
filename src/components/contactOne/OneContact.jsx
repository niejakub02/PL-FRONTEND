import { useState } from "react";

import AvatarBox from "../avatar/Avatar";

import "./OneContact.css";

const OneContact = ({
    friend,
    deleteContact,
    showChat,
    chat,
    changeChat,
    handleOpenReview,
    chatId
}) => {
    // const favorite = friend.favorite
    //     ? "../assets/starMarked.svg"
    //     : "../assets/star.svg";
    const [star, setStar] = useState("../assets/star.svg");

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
                <AvatarBox name={friend.firstName} img={friend.avatar} />
                <p>{friend.firstName ? friend.firstName : 'stranger'}</p>
            </div>
            <div className="markers">
                <div className="flexCC">
                    <img
                        src={
                            chatId === friend.id
                                ? "../assets/chat.svg"
                                : "../assets/chat2.svg"
                        }
                        onClick={() => {
                            showChat(friend.id);
                        }}
                    />
                </div>
                <div className="flexCC">
                    <img
                        src={star}
                        onClick={() => {
                            handleOpenReview(friend.id);
                        }}
                    />
                </div>
                <div className="flexCC">
                    <img
                        src="../assets/tresh.svg"
                        onClick={() => deleteContact(friend.id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default OneContact;
