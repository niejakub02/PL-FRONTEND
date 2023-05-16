import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import "../sign/Sign.css";

const SignUp = () => {
    return (
        <>
            <div className="box_login">
                <TextField
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    className="standard-basic"
                    margin="normal"
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    className="standard-basic"
                    margin="normal"
                />
                <TextField
                    id="standard-basic"
                    label="Repeat Password"
                    variant="standard"
                    className="standard-basic"
                    margin="normal"
                />
                <Button
                    variant="outlined"
                    className="submit_button"
                    margin="normal"
                >
                    <Link to="../signIn">Sign up</Link>
                </Button>
                <p className="register_btn">
                    Do you have an <Link to="../signIn">account</Link> already?
                </p>
            </div>
        </>
    );
};

export default SignUp;
