import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import "../../pages/sign/Sign";

const SignIn = () => {
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
                <Button
                    variant="outlined"
                    className="submit_button"
                    margin="normal"
                >
                    <Link to="../">Sign in</Link>
                </Button>
                <p className="register_btn">
                    Don’t have an <Link to="../signUp">account</Link> yet?
                </p>
            </div>
        </>
    );
};

export default SignIn;
