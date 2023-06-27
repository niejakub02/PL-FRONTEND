import { useState } from "react";
import { Rating } from "@mui/material";
import AvatarBox from "../avatar/Avatar";

import "../../pages/sign/Sign.css";
import "../modal/Modal.css";
import "./Review.css";

const Review = ({ friends, handleClose, idReview }) => {
    const [value, setValue] = useState(0);
    const friend = friends.find((el) => {
        return el.id === idReview;
    });
    return (
        <div className="box_modal">
            <div className="box_header">
                <div className="logo_modal_box flexCC">
                    <img src="../assets/review.svg" />
                    <p>REVIEW</p>
                </div>
                <img
                    src="../assets/exit.svg"
                    onClick={handleClose}
                    className="exit_button"
                />
            </div>
            <div className="review">
                <div className="full_width review_personal_information">
                    <div className="flexCC">
                        <AvatarBox name={friend.name} img={friend.img} />
                        <p>
                            {friend.name} {/*| met <b>17-07-2023</b>*/}
                        </p>
                    </div>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>
                <textarea
                    placeholder={`What are your thoughts about ${friend.name}?`}
                ></textarea>
            </div>
            <div className="panel_buttons">
                <button className="buttons pointer" onClick={handleClose}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Review;
