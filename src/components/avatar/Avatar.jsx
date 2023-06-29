import { Avatar } from "@mui/material";
import "./Avatar.css";

const AvatarBox = ({ name, img }) => {
    return (
        <div className="avatar">
            <Avatar alt={name} src={`https://localhost:7237${img}`} />
        </div>
    );
};

export default AvatarBox;
