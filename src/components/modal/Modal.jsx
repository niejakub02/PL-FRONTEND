import { Dialog } from "@mui/material";
import Notification from "../notification/Notification";

const ModalComponent = ({ open, setOpen, friends }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Notification friends={friends} handleClose={handleClose} />
            </Dialog>
        </div>
    );
};

export default ModalComponent;
