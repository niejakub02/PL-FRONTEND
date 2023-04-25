import SignIn from "../signIn/SignIn.jsx";
import SingUp from "../singUp/SingUp.jsx";
import './Sign.css';

const Sign = () => {
    return (
        <div className='sign'>
            <SignIn/>
            {/*<SingUp/>*/}
            <img src="assets/login_bg.svg"
                 className='login_bg'/>
        </div>
    )
}

export default Sign;