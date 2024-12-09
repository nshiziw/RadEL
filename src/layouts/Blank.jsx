import { Routes, Route, Outlet } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Error from "../pages/auth/Error";
import ComingSoon from "../pages/ComingSoon";
import Complete from "../pages/auth/Complete";

const Blank = () => {
    return (
        <div>
        <main>
            <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/complete" element={<Complete />} />
            {/* Catch all invalid paths under /auth */}
            <Route path="*" element={<Error />} />
            </Routes>
            <Outlet /> {/* Ensures nested routes can still render if needed */}
        </main>
        </div>
    );
};

export default Blank;
