import { useState } from "react";
import { Avatar, Rating } from "@mui/material";
import "../contacts/Contacts.css";
import "../notification/Notification.css";
import "./Review.css";

const Review = ({ friends, handleClose }) => {
    const [value, setValue] = useState(0);
    return (
        <div className="modal_review">
            <div className="header">
                <div className="logo_notification flexCC">
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
                <div className="full_width review_inf">
                    <div className="flexCC">
                        <div className="avatar">
                            <Avatar
                                alt={friends[0].name}
                                src={friends[0].img}
                            />
                        </div>
                        <p style={{ fontSize: "15px" }}>
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
            <div className="save">
                <button className="button_accept buttons_notification">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Review;
