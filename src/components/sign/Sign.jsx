import {Outlet} from 'react-router-dom';

import './Sign.css';
import Header from "../header/Header.jsx";

const Sign = () => {
    return (
        <div className='main_sign'>
            <Header show={0}/>
            <div className='sign'>
                <Outlet/>
                <img src="../assets/login_bg.svg" className='login_bg'/>
            </div>
        </div>
    )
}

export default Sign;