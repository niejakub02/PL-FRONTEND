import AvatarBox from "../avatar/Avatar";
import "../../styles/Styles.css";
import "./Popup.css";

const PopupPerson = ({
    idPopup,
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
                        {idPopup.name} ({idPopup.id})
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
                    <AvatarBox name={idPopup.name} img={idPopup.img} />
                    <div className="flexCC link">
                        <p>VIEW PROFILE</p>
                        <img src="../assets/link.svg" />
                    </div>
                </div>
                <p className="description">{idPopup.description}</p>
            </div>
        </div>
    );
};

export default PopupPerson;
