import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import "../sign/Sign.css";
import client from "../../utils/API";

const SignUp = () => {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        console.dir(e.target);
        console.dir(e.target.username);
        console.dir({
            Email: e.target.username.value,
            Password: e.target.password.value
        });

        // setIsLoading(true);
        // if (e.target.password.value !== e.target.repeatedPassword.value) {
        //     toast("Passwords don't match", { type: 'error' });
        //     setIsLoading(false);
        //     return;
        // }    

        // client.post('User/SignUpUser', {
        //     Email: e.target.username.value,
        //     Password: e.target.password.value
        // })
        //     .then(res => {
        //         navigate("/SignIn")
        //     })
        // // .finally(() => {
        // //     setIsLoading(false);
        // // })
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
