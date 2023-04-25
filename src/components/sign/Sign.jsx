import SignIn from "../signIn/SignIn.jsx";
import SignUp from "../signUp/SignUp.jsx";
import './Sign.css';

const Sign = () => {
    return (
        <div className='sign'>
            <div className='logo'>
                <p>M8map</p>
            </div>
            <SignIn/>
            {/*<SignUp/>*/}
            <img src="assets/login_bg.svg"
                 className='login_bg'/>
        </div>
    )
}

export default Sign;