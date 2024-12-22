import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error from "../pages/auth/Error";
import Shop from "../pages/Shop.jsx"
import About from "../pages/About.jsx"

const DefaultLayout = () => {
    return (
        <div>
        <Header />
        <main>
            <Routes>
                <Route index element={<Home />} /> {/* "/" route, same as the following */} 
                {/* <Route path="/" element={<Home />} /> "/" route */}\
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} /> {/* Catch-all route, 404 page */}
            </Routes>
            <Outlet /> {/* Ensures nested routes can still render if needed */}
        </main>
        <Footer />
        </div>
    );
};

export default DefaultLayout;
