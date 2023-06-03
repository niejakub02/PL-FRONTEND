import { Dialog } from "@mui/material";

const ModalComponent = ({ open, handleClose, children }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {children}
            </Dialog>
        </div>
    );
};

export default ModalComponent;
