import { useState } from "react";
import { Rating } from "@mui/material";
import AvatarBox from "../avatar/Avatar";

import "../../pages/sign/Sign.css";
import "../modal/Modal.css";
import "./Review.css";

const Review = ({ friends, handleClose }) => {
    const [value, setValue] = useState(0);

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
                        <AvatarBox
                            name={friends[0].name}
                            img={friends[0].avatar}
                        />
                        <p>
                            {friends[0].name} | met <b>17-07-2023</b>
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
                    placeholder={`What are your thoughts about ${friends[0].name}?`}
                ></textarea>
            </div>
            <div className="panel_buttons">
                <button className="buttons">Send</button>
            </div>
        </div>
    );
};

export default Review;
