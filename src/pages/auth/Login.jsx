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
          <div>
            <div>
              <label className="text-slate-600">Email <span className="text-rose-600">*</span></label>
              <input
                className="w-full border border-navy-green p-4"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-slate-600">Email <span className="text-rose-600">*</span></label>
              <input
                className="w-full border border-navy-green p-4"
                type="text"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <div>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <Link to="/login">Forgot Password?</Link>
          </div>
          <Button label="Subscribe" />
        </form>
        <div>
          <div></div>
          <p>or Sign In with</p>
          <div></div>
        </div>
        <Link to="/dashboard">
          <img src={googleLogo} alt="" />
          <p>Sign in with google</p>
        </Link>
        <p>Don&apos;t have account? <Link to="/register">Sign up</Link></p>
        
      </div>
    </section>
  );
};

export default Login;
