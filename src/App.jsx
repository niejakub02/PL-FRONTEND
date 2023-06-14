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
import Profile from "./pages/profile/Profile";
import ProtectedRoute from "./utils/ProtectedRoute";
import { position, countries, friends, languages, user } from "./Database.jsx";

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
                    <Route element={<Sign />}>
                        <Route path="signIn" element={<SignIn />} />
                        <Route path="signUp" element={<SignUp />} />
                    </Route>

                    <Route element={<ProtectedRoute />}>
                        <Route
                            path="/"
                            element={
                                <Home
                                    position={position}
                                    countries={countries}
                                    handleOpen={handleOpen}
                                />
                            }
                        />
                        <Route
                            path="settings"
                            element={
                                <Settings
                                    languages={languages}
                                    handleOpen={handleOpen}
                                    user={user}
                                />
                            }
                        />
                        <Route
                            path="profile"
                            element={
                                <Profile
                                    languages={languages}
                                    handleOpen={handleOpen}
                                    person={friends[0]}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
