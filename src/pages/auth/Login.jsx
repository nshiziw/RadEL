import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.jpg";
import Button from "../../components/Button.jsx";
import googleLogo from "../../assets/images/googleLogo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Login = () => {

  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  
  const handlePasswordVisibility = () => {
    setPasswordShow(!passwordShow);
    setPasswordType(!passwordType);
  };

  return (
    <section className="h-screen w-full flex text-slate-600">
      <div className="w-1/2">
        <img
          className="w-full h-full object-cover outline -outline-offset-[25px] outline-snow"
          src={loginImg}
          alt=""
        />
      </div>
      <div className="w-1/2 p-[5%] flex flex-col gap-5 justify-center">
        <h1 className="font-italiana text-3xl text-navy-green-dark">RadEl</h1>
        <p className="text-gold text-4xl font-semibold capitalize">
          Sign In
        </p>
        <p className="text-lg">Please fill your details to access your account.</p>
        <form>
          <div className="flex flex-col gap-5">
            <div>
              <label className="text-slate-600">Email <span className="text-rose-600">*</span></label>
              <input
                className="w-full border border-navy-green p-4"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-slate-600">Password <span className="text-rose-600">*</span></label>
              <div className="relative">
                <input
                  className="w-full border border-navy-green p-4"
                  type={passwordType ? "text" : "password"}
                  placeholder="Enter password"
                />
                {passwordShow ? (
                  <FaEyeSlash onClick={handlePasswordVisibility} className="cursor-pointer text-2xl absolute bottom-1/2 top-1/2 transform -translate-y-1/2 right-4 " />
                ): (
                  <FaEye onClick={handlePasswordVisibility} className="cursor-pointer text-2xl absolute bottom-1/2 top-1/2 transform -translate-y-1/2 right-4 " />
                ) }
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1">
              <input className="accent-navy-green w-5 h-5" type="checkbox" />
              <p className="text-lg">Remember me</p>
            </div>
            <Link className="hover:underline" to="/forgot-password">Forgot Password?</Link>
          </div>
          <Button className="mt-4 w-full" label="Sign In" />
        </form>
        <div className="flex items-center justify-center">
          <div className="w-1/3 h-[1px] bg-slate-300"></div>
          <p className="w-1/3 text-center">or Sign In with</p>
          <div className="w-1/3 h-[1px] bg-slate-300"></div>
        </div>
        <Link to="https://google.com" className="border p-3 flex items-center justify-center gap-3 hover:bg-slate-200 transition duration-500">
          <img className="w-8" src={googleLogo} alt="" />
          <p className="font-medium">Sign in with google</p>
        </Link>
        <p className="text-center">Don&apos;t have account? <Link className="hover:underline font-medium" to="/auth/signup">Sign up</Link></p>
      </div>
    </section>
  );
};

export default Login;
