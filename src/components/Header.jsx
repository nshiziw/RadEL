import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
const Header = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center py-4 bg-navy-green px-[10%] text-snow">
        <p className="">Call Us: +250-791-847-408</p>
        <p>
          Sign up and GET 25% OFF for your first order. <span className="text-gold hover:underline hover:cursor-pointer">Sign up now</span>
        </p>
        <div className="flex gap-2 items-center text-gold text-xl">
          <FaFacebook />
          <AiFillTwitterCircle />
          <FaPinterest />
          <AiFillInstagram />
          <FaYoutube />
        </div>
      </div>
      <div>
        <p>RadEl</p>
        <div>

        </div>
        <div>
          <CiSearch />
          <CiHeart />
          <CiShoppingCart />
          <CiUser />
        </div>
      </div>
    </section>
  );
};

export default Header;
