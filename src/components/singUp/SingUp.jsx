import {Button, TextField} from "@mui/material";
import '../sign/Sign.css';

const SingUp = () => {
    return (
        <>
            <div className='box_login'>
                <TextField id="standard-basic" label="Username" variant="standard"
                           className='standard-basic' margin="normal"/>
                <TextField id="standard-basic" label="Password" variant="standard"
                           className='standard-basic' margin="normal"/>
                <TextField id="standard-basic" label="Repeat Password" variant="standard"
                           className='standard-basic' margin="normal"/>
                <Button variant="outlined" className='submit_button' margin="normal">Sign up</Button>
                <p className="register_btn">Do you have an <strong>account</strong> already?</p>
            </div>
        </>
    )
}

export default SingUp;