import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {

  const handleToast = () => {
    toast.info("Search icon clicked")
  }

  return (
    <section className="">
      <div className="flex justify-between items-center py-4 bg-navy-green px-[10%]">
        <p className="text-snow">Call Us: +250-791-847-408</p>
        <p className="text-snow">
          Sign up and GET 25% OFF for your first order. <span className="text-gold hover:underline hover:cursor-pointer">Sign up now</span>
        </p>
        <div className="flex gap-2 items-center text-gold text-xl">
          <Link to="https://www.instagram.com/its_wilso" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition cursor-pointer duration-500">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com/its_wilso" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition cursor-pointer duration-500">
            <AiFillTwitterCircle />
          </Link>
          <Link to="https://www.instagram.com/its_wilso" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition cursor-pointer duration-500">
            <FaPinterest />
          </Link>
          <Link to="https://www.instagram.com/its_wilso" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition cursor-pointer duration-500">
            <AiFillInstagram />
          </Link>
          <Link to="https://www.instagram.com/its_wilso" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition cursor-pointer duration-500">
            <FaYoutube />
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center py-5 px-[10%]">
        <Link className="hover:text-gold transition" to='/'>
          <p className="font-italiana text-2xl text-slate-600 font-normal cursor-pointer">RadEl</p>
        </Link>
        <div className="flex gap-6 text-slate-600">
          <Link to="/" className="hover:text-gold hover:underline">Home</Link>
          <Link to="/shop" className="hover:text-gold hover:underline">Shop</Link>
          <Link to="/earring" className="hover:text-gold hover:underline">Earring</Link>
          <Link to="/necklaces" className="hover:text-gold hover:underline">Necklaces</Link>
          <Link to="/about" className="hover:text-gold hover:underline">About Us</Link>
          <Link to="/contact" className="hover:text-gold hover:underline">Contact Us</Link>
          <Link to="/blogs" className="hover:text-gold hover:underline">Blogs</Link>
        </div>
        <div className="flex gap-3 text-3xl">
          <CiSearch onClick={handleToast} className="hover:text-gold cursor-pointer"/>
          <Link to="/favorite" className="hover:text-gold cursor-pointer">
            <CiHeart/>
          </Link>
          <Link to="/cart" className="hover:text-gold cursor-pointer">
            <CiShoppingCart/>
          </Link>
          <Link to="/account" className="hover:text-gold cursor-pointer">
            <CiUser/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
