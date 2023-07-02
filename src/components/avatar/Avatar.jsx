import { Avatar } from "@mui/material";
import "./Avatar.css";

const AvatarBox = ({ name, img }) => {
    return (
        <div className="avatar">
            <Avatar alt={name} src={img ? `https://localhost:7237${img}` : img} />
        </div>
    );
};

export default AvatarBox;
