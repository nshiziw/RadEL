import comingSoonImg from "../assets/images/coming-soon.jpg"
import Button from "../components/Button"
import Countdown from "../components/Countdown";
const ComingSoon = () => {
    const targetDate = "2025-01-01T23:59:59";

    return (
        <section className="h-screen w-full flex text-slate-600">
            <div className="w-5/12">
                <img className="w-full h-full object-cover outline -outline-offset-[25px] outline-snow" src={comingSoonImg} alt="" />
            </div>
            <div className="w-7/12 p-[5%] flex flex-col gap-5 justify-center">
                <h1 className="font-italiana text-3xl text-navy-green-dark">RadEl</h1>
                <p className="text-gold text-4xl font-semibold uppercase">Coming soon</p>
                <p className="font-italiana text-navy-green text-6xl capitalize">get notified when we launch!</p>
                <div>
                    <Countdown targetDate={targetDate} />
                </div>
                <p className="text-lg">Get notified when site goes live:</p>
                <div className="flex gap-3 w-full">
                    <input className="w-full border border-navy-green p-4" type="text" placeholder="Enter your email" />
                    <Button label="Subscribe" />
                </div>
            </div>
        </section>
    )
}

export default ComingSoon