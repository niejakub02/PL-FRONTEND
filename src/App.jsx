import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign from "./pages/sign/Sign";
import SignUp from "./components/signUp/SignUp.jsx";
import SignIn from "./components/signIn/SignIn.jsx";
import Home from "./pages/home/Home.jsx";
import Settings from "./pages/settings/Settings.jsx";
import ModalComponent from "../src/components/modal/Modal.jsx";
import Notification from "../src/components/notification/Notification";
import Review from "../src/components/review/Review";
import { position, countries, chat, friends, languages } from "./Database.jsx";
import "./App.css";

function App() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ModalComponent
                setOpen={setOpen}
                open={open}
                friends={friends}
                handleClose={handleClose}
            >
                <Notification friends={friends} handleClose={handleClose} />
                {/* <Review friends={friends} handleClose={handleClose} /> */}
            </ModalComponent>
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
                                handleOpen={handleOpen}
                            />
                        }
                    />
                    <Route path="/" element={<Sign />}>
                        <Route path="signIn" element={<SignIn />} />
                        <Route path="signUp" element={<SignUp />} />
                    </Route>
                    <Route
                        path="settings"
                        element={
                            <Settings
                                languages={languages}
                                handleOpen={handleOpen}
                            />
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
