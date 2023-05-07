import {Outlet} from 'react-router-dom';

import './Sign.css';

const Sign = () => {
    return (
        <div className='sign'>
            <div className='logo'><p>M8map</p></div>
            <Outlet/>
            <img src="../assets/login_bg.svg" className='login_bg'/>
        </div>
    )
}

export default Sign;