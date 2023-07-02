import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import AvatarBox from "../avatar/Avatar";

import "../../pages/sign/Sign.css";
import "../modal/Modal.css";
import "./Review.css";
import client from "../../utils/API";
import { toast } from "react-toastify";
import LoaderFill from "../loaderFill/loaderFill";

const Review = ({ handleClose, idReview }) => {
    const [value, setValue] = useState(0);
    const [descriptionValue, setDescriptionValue] = useState('');
    const [friend, setFriend] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        client.get(`User/${idReview}`)
            .then(res => {
                setFriend(res.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    const onReview = () => {
        setIsLoading(true);
        client.post('User/AddReview', {
            rating: value,
            description: descriptionValue,
            toId: friend.id
        })
            .then(res => {
                toast("Review has been added!", { type: "success" });
                console.log('REVIEW');
            })
            .finally(() => {
                handleClose();
                setIsLoading(false);
            })
    }
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
                {isLoading ?
                    <LoaderFill /> :
                    <>
                        <div className="full_width review_personal_information">
                            <div className="flexCC">
                                <AvatarBox name={friend.firstName} img={friend.avatar} />
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
                            placeholder={`What are your thoughts about ${friend.firstName}?`}
                            onChange={(e) => setDescriptionValue(e.target.value)}
                            value={descriptionValue}
                        ></textarea>
                    </>
                }

            </div>
            <div className="panel_buttons">
                <button className="buttons pointer" onClick={onReview}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Review;
