import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-snow-light py-10 m-4 px-10-16">
      <div className="pb-8 border-b border-gray-300 text-slate-600 flex gap-4 justify-between">
        <div className="w-[33.33%] flex flex-col gap-3">
          <Link className="text-gold" to="/">
            <p className="font-italiana text-3xl">RadEl</p>
          </Link>
          <p className="text-base">
            Discover timeless jewelry crafted to enhance women’s elegance,
            beauty, and individuality with every piece.
          </p>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-gold text-xl text-navy-green-light flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 bg-gold text-xl text-navy-green-light flex items-center justify-center">
              <FaXTwitter />
            </div>
            <div className="w-10 h-10 bg-gold text-xl text-navy-green-light flex items-center justify-center">
              <FaLinkedinIn />
            </div>
            <div className="w-10 h-10 bg-gold text-xl text-navy-green-light flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 bg-gold text-xl text-navy-green-light flex items-center justify-center">
              <FaTiktok />
            </div>
          </div>
        </div>
        <div className="flex w-[66.66%] justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Company</h2>
            <div className="flex flex-col gap-2">
              <Link className="hover:underline" to="/">About Us</Link>
              <Link className="hover:underline" to="/">Blog</Link>
              <Link className="hover:underline" to="/">Contact Us</Link>
              <Link className="hover:underline" to="/">Career</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Customer Services</h2>
            <div className="flex flex-col gap-2">
              <Link className="hover:underline" to="/">My Account</Link>
              <Link className="hover:underline" to="/">Track Your Order</Link>
              <Link className="hover:underline" to="/">Returns & Refunds</Link>
              <Link className="hover:underline" to="/">FAQs</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Our Information</h2>
            <div className="flex flex-col gap-2">
              <Link className="hover:underline" to="/">About Us</Link>
              <Link className="hover:underline" to="/">Privacy</Link>
              <Link className="hover:underline" to="/">Terms & Conditions</Link>
              <Link className="hover:underline" to="/">Shipping Information</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Contact Info</h2>
            <div className="flex flex-col gap-2">
              <p>+250791847408</p>
              <p>wilsonshizirungu@gmail.com</p>
              <p>Kigali, Kicukiro, KK 5AVE 29ST</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center text-slate-600">
        <p>
          Copyright &copy; 2024 <span className="text-gold">RadEl Jewelry</span>
          . All rights reserved.
        </p>
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