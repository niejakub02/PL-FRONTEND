import LogIn from "../logIn/LogIn.jsx";
import SingUp from "../singUp/SingUp.jsx";
import './Sign.css';

const Sign = () => {
    return (
        <div className='sign'>
            <LogIn />
            {/*<SingUp/>*/}
            <img src="assets/login_bg.svg"
                 className='login_bg'/>
        </div>
    )
}

export default Sign;