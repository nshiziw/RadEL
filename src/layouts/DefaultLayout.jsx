import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error from "../pages/auth/Error";
import Shop from "../pages/Shop.jsx"
import About from "../pages/About.jsx"
import Cart from "../pages/Shop/Cart.jsx"
import Checkout from "../pages/Shop/Checkout.jsx"
import Payment from "../pages/Shop/Payment.jsx"
import Finish from "../pages/Shop/Finish.jsx"
import Wishlist from "../pages/Wishlist.jsx";
import Track from "../pages/Order/Track.jsx";
import Status from "../pages/Order/Status.jsx";

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
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/complete" element={<Finish />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/track-order" element={<Track />} />
                <Route path="/order-status" element={<Status />} />
                <Route path="*" element={<Error />} /> {/* Catch-all route, 404 page */}
            </Routes>
            <Outlet /> {/* Ensures nested routes can still render if needed */}
        </main>
        <Footer />
        </div>
    );
};

export default DefaultLayout;
