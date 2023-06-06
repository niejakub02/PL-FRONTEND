import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import client from "../../utils/API";
import "../../pages/sign/Sign";

const SignIn = () => {
    const setIsLoading = useOutletContext();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);

        client.post('User/SignInUser', {
            Email: e.target.username.value, // TO BE CHANGED TO USERNAME
            Password: e.target.password.value
        })
            .then(res => {
                localStorage.setItem("access_token", res.data);
                navigate("/")
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
                type="password"
            />
            <Button
                variant="outlined"
                className="submit_button"
                margin="normal"
                type="submit"
            >
                Sign in
            </Button>
            <p className="register_btn">
                Don’t have an <Link to="../signUp">account</Link> yet?
            </p>
        </form>
    );
};

export default SignIn;
