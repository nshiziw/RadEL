import newImg from "../../assets/images/new.jpg"
import Button from "../../components/Button"

const NewPassword = () => {

    return (
        <section className="h-screen w-full flex text-slate-600">
            <div className="w-1/2">
                <img className="w-full h-full object-cover outline -outline-offset-[25px] outline-snow" src={newImg} alt="" />
            </div>
            <div className="w-1/2 p-[5%] flex flex-col gap-5 justify-center">
                <h1 className="font-italiana text-3xl text-navy-green-dark">RadEl</h1>
                <p className="text-gold text-4xl font-semibold uppercase">Set New Password</p>
                <p className="text-lg">Must be at least 8 characters</p>
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-5">
                        <div>
                            <label className="text-slate-600">
                            New Password <span className="text-rose-600">*</span>
                            </label>
                            <input
                            className="w-full border border-navy-green p-3"
                            type="text"
                            placeholder="Enter mew password"
                            />
                        </div>
                        <div>
                            <label className="text-slate-600">
                            Confirm Password <span className="text-rose-600">*</span>
                            </label>
                            <input
                            className="w-full border border-navy-green p-3"
                            type="text"
                            placeholder="Enter new password"
                            />
                        </div>
                    </div>
                    <Button label="Reset Password" />
                </div>
            </div>
        </section>
    )
}

export default NewPassword