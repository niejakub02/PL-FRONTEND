import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign from "./pages/sign/Sign";
import SignUp from "./components/signUp/SignUp.jsx";
import SignIn from "./components/signIn/SignIn.jsx";
import Home from "./pages/home/Home.jsx";
import Settings from "./pages/settings/Settings.jsx";
import { position, countries, chat, friends, languages } from "./Database.jsx";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            position={position}
                            countries={countries}
                            chat={chat}
                            friends={friends}
                        />
                    }
                />
                <Route path="/" element={<Sign />}>
                    <Route path="signIn" element={<SignIn />} />
                    <Route path="signUp" element={<SignUp />} />
                </Route>
                <Route
                    path="settings"
                    element={<Settings languages={languages} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
