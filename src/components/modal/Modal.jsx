import { Dialog } from "@mui/material";
import Notification from "../notification/Notification";
import Review from "../review/Review";

const ModalComponent = ({ open, setOpen, friends }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="modal"
            >
                {/* <Notification friends={friends} handleClose={handleClose} /> */}
                <Review friends={friends} handleClose={handleClose} />
            </Dialog>
        </div>
    );
};

export default ModalComponent;
