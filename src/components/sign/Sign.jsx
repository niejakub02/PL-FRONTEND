import SignIn from "../signIn/SignIn.jsx";
import SignUp from "../signUp/SignUp.jsx";
import './Sign.css';

const Sign = () => {
    return (
        <div className='sign'>
            <SignIn/>
            {/*<SignUp/>*/}
            <img src="assets/login_bg.svg"
                 className='login_bg'/>
        </div>
    )
}

export default Sign;