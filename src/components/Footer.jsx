import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-snow-light py-10 m-4 px-10-16">
      <div className="pb-8 border-b border-gray-300">
        <div>
          <Link to="/">
            <p>RadEl</p>
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quasi nam eum fugiat laudantium numquam explicabo iusto.</p>
          <div>
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
        <div>
          <div>
            <h2>Company</h2>
            <div>
              <Link to="/">About Us</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Career</Link>
            </div>
          </div>
          <div>
            <h2>Customer Services</h2>
            <div>
              <Link to="/">My Account</Link>
              <Link to="/">Track Your Order</Link>
              <Link to="/">Returns & Refunds</Link>
              <Link to="/">FAQs</Link>
            </div>
          </div>
          <div>
            <h2>Our Information</h2>
            <div>
              <Link to="/">About Us</Link>
              <Link to="/">Privacy</Link>
              <Link to="/">Terms & Conditions</Link>
              <Link to="/">Shipping Information</Link>
            </div>
          </div>
          <div>
            <h2>Contact Info</h2>
            <div>
              <p>+250791847408</p>
              <p>wilsonshizirungu@gmail.com</p>
              <p>Kigali, Kicukiro, KK 5AVE 29ST</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center text-slate-600">
        <p>Copyright &copy; 2024 <span className="text-gold">RadEl Jewelry</span>. All rights reserved.</p>
        <div className="flex gap-4">
          <select className="bg-transparent">
            <option value="English">English</option>
            <option value="French">French</option>
          </select>
          <select className="bg-transparent">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Footer