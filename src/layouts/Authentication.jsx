import { Routes, Route, Outlet } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Error from "../pages/auth/Error";

const Authentication = () => {
    return (
        <div>
        <main>
            <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Catch all invalid paths under /auth */}
            <Route path="*" element={<Error />} />
            </Routes>
            <Outlet /> {/* Ensures nested routes can still render if needed */}
        </main>
        </div>
    );
};

export default Authentication;
