import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Sign from "./components/sign/Sign.jsx";
import SignUp from "./components/signUp/SignUp.jsx";
import SignIn from "./components/signIn/SignIn.jsx";
import Home from "./components/home/Home.jsx";
import {position, countries, chat, friends} from './Database.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/'
                           element={<Home position={position} countries={countries} chat={chat} friends={friends}/>}/>
                    <Route path='/' element={<Sign/>}>
                        <Route path='signIn' element={<SignIn/>}/>
                        <Route path='signUp' element={<SignUp/>}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
