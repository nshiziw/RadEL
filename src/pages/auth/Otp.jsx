import { Link } from "react-router-dom"
import otpImg from "../../assets/images/otp.jpg"
import Button from "../../components/Button"
import { useState } from "react";
import OtpInput from "react-otp-input";

const Otp = () => {

    const [otp, setOtp] = useState("");

    return (
        <section className="h-screen w-full flex text-slate-600">
            <div className="w-1/2">
                <img className="w-full h-full object-cover outline -outline-offset-[25px] outline-snow" src={otpImg} alt="" />
            </div>
            <div className="w-1/2 p-[5%] flex flex-col gap-5 justify-center">
                <h1 className="font-italiana text-3xl text-navy-green-dark">RadEl</h1>
                <p className="text-gold text-4xl font-semibold uppercase">Verify Code</p>
                <p className="text-lg">Please enter the code we just sent to email <br /> <span className="text-navy-green font-semibold">wilsonshizirungu@gmail.com</span></p>
                <div className="flex flex-col gap-5 w-full">
                    <div>
                        <label className="text-slate-600">Code <span className="text-rose-600">*</span></label>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span className="">-</span>}
                            renderInput={(props) => <input {...props} />}
                            containerStyle={{width: '100%', display: 'flex', justifyContent: 'space-between'}}
                            inputStyle={{border: '1px solid #0E343D', paddingTop: '20px', paddingBottom: '20px', width: "80px", fontSize: '30px', fontWeight: 'bold'}}
                        />
                    </div>
                    <Button label="Verify" />
                </div>
                <p className="text-center">Didn&apos;t receive code? <Link className="hover:underline font-semibold" to="/auth/login">Resend Code</Link></p>
            </div>
        </section>
    )
}

export default Otp