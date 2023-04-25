import LogIn from "../logIn/LogIn.jsx";
import './Sign.css';

const Sign = () => {
    return (
        <div className='sign'>
            <LogIn />
            <img src="assets/login_bg.svg"
                 className='login_bg'/>
        </div>
    )
}

export default Sign;