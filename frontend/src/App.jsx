import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import { Toaster } from 'react-hot-toast';
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
import NotFound from './pages/NotFound';


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/users/signup" element={<UserSignup />} />
                <Route path="/users/login" element={<UserLogin />} />
                <Route path="/captains/signup" element={<CaptainSignup />} />
                <Route path="/captains/login" element={<CaptainLogin />} />
                <Route path="/home" element={
                    <UserProtectWrapper>
                        <Home />
                    </UserProtectWrapper>
                }
                />
                <Route path="/riding" element={<Riding />}></Route>
                <Route path="/captain/home" element={
                    <CaptainProtectWrapper>
                        <CaptainHome />
                    </CaptainProtectWrapper>}
                />
                <Route path="/captain/riding" element={<CaptainRiding />} />
                <Route path="/users/logout" element={<UserLogout />}></Route>
                <Route path="/captains/logout" element={<CaptainLogout />} ></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>

    );
}

export default App;