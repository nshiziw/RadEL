import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.jpg";
import Button from "../../components/Button.jsx";
import googleLogo from "../../assets/images/googleLogo.png";
const Login = () => {

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
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-slate-600">Password <span className="text-rose-600">*</span></label>
              <input
                className="w-full border border-navy-green p-4"
                type="password"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1">
              <input className="accent-navy-green w-5 h-5" type="checkbox" />
              <p className="text-lg">Remember me</p>
            </div>
            <Link className="hover:underline" to="/login">Forgot Password?</Link>
          </div>
          <Button className="mt-4 w-full" label="Subscribe" />
        </form>
        <div className="flex items-center justify-center">
          <div className="w-1/3 h-[1px] bg-slate-300"></div>
          <p className="w-1/3 text-center">or Sign In with</p>
          <div className="w-1/3 h-[1px] bg-slate-300"></div>
        </div>
        <Link to="/dashboard" className="border p-3 flex items-center justify-center gap-3 hover:bg-slate-200 transition duration-500">
          <img className="w-8" src={googleLogo} alt="" />
          <p className="font-medium">Sign in with google</p>
        </Link>
        <p className="text-center">Don&apos;t have account? <Link className="hover:underline font-medium" to="/register">Sign up</Link></p>
        
      </div>
    </section>
  );
};

export default Login;
