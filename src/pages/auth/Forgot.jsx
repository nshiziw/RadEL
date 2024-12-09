import { Link } from "react-router-dom"
import forgotImg from "../../assets/images/forgot.jpg"
import Button from "../../components/Button"
const Forgot = () => {

    return (
        <section className="h-screen w-full flex text-slate-600">
            <div className="w-1/2">
                <img className="w-full h-full object-cover outline -outline-offset-[25px] outline-snow" src={forgotImg} alt="" />
            </div>
            <div className="w-1/2 p-[5%] flex flex-col gap-5 justify-center">
                <h1 className="font-italiana text-3xl text-navy-green-dark">RadEl</h1>
                <p className="text-gold text-4xl font-semibold uppercase">Forgot Password?</p>
                <p className="text-lg">Don&apos;t worry, we&apos;ll send you reset instructions.</p>
                <div className="flex flex-col gap-5 w-full">
                    <div>
                        <label className="text-slate-600">Email <span className="text-rose-600">*</span></label>
                        <input className="w-full border border-navy-green p-4" type="text" placeholder="Enter email here" />
                    </div>
                    <Button label="Submit" />
                </div>
                <p className="text-center">Remember password? <Link className="hover:underline font-semibold" to="/auth/login">Sign In</Link></p>
            </div>
        </section>
    )
}

export default Forgot