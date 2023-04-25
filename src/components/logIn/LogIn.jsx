import {Button, TextField} from "@mui/material";

import './LogIn.css'

const LogIn = () => {
    return (
        <>
            <div className='box_login'>
                <TextField id="standard-basic" label="Username" variant="standard" className='standard-basic' margin="normal"/>
                <TextField id="standard-basic" label="Password" variant="standard" className='standard-basic' margin="normal"/>
                <Button variant="outlined" className='submit_button' margin="normal">Sign in</Button>
                <p className="register_btn">Don’t have an <strong>account</strong> yet?</p>
            </div>
            <img src="assets/login_bg.svg"
                 className='login_bg'/>
        </>
    )
}

export default LogIn;