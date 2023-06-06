import AvatarBox from "../avatar/Avatar";
import "../../styles/Styles.css";
import "./Popup.css";

const PopupPerson = ({
    friends,
    popupClose,
    positionPopupY,
    positionPopupX,
}) => {
    const calculateX = () => {
        const right = positionPopupX + 300;
        const diff = window.innerWidth - right;

        return diff < 0 ? positionPopupX - 300 : positionPopupX;
    };

    const calculateY = () => {
        const right = positionPopupY + 300;
        const diff = window.innerHeight - right;

        return diff < 0 ? positionPopupY - 300 : positionPopupY;
    };

    return (
        <div
            className="box_popup"
            style={{ top: calculateY(), left: calculateX() }}
        >
            <div className="box_header">
                <div className="logo_popup_box flexCC">
                    <img src="../assets/vector.svg" />
                    <p>
                        {friends[0].name} ({friends[0].id})
                    </p>
                </div>
                <img
                    src="../assets/exit.svg"
                    className="exit_button"
                    onClick={popupClose}
                />
            </div>
            <div className="popup full_width overflow">
                <div className="full_width flexCC">
                    <AvatarBox name={friends[0].name} img={friends[0].img} />
                    <div className="flexCC link">
                        <p>VIEW PROFILE</p>
                        <img src="../assets/link.svg" />
                    </div>
                </div>
                <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    );
};

export default PopupPerson;
