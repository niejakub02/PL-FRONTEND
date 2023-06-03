import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import client from "../../utils/API";
import "../../pages/sign/Sign";

const SignUp = () => {
    const setIsLoading = useOutletContext();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        setIsLoading(true);
        if (e.target.password.value !== e.target.repeatedPassword.value) {
            // toast("Passwords don't match", { type: 'error' });
            console.log("Passwords don't match");
            setIsLoading(false);
            return;
        }

        client.post('User/SignUpUser', {
            Email: e.target.username.value,
            Password: e.target.password.value
        })
            .then(res => {
                navigate("/SignIn")
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <form className="box_login" onSubmit={submitHandler}>
            <TextField
                id="standard-basic"
                label="Username"
                variant="standard"
                className="standard-basic"
                margin="normal"
                name="username"
            />
            <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                className="standard-basic"
                margin="normal"
                name="password"
            />
            <TextField
                id="standard-basic"
                label="Repeat Password"
                variant="standard"
                className="standard-basic"
                margin="normal"
                name="repeatedPassword"
            />
            <Button
                variant="outlined"
                className="submit_button"
                margin="normal"
                type="submit"
            >
                Sign up
            </Button>
            <p className="register_btn">
                Do you have an <Link to="../signIn">account</Link> already?
            </p>
        </form>
    );
};

export default SignUp;
