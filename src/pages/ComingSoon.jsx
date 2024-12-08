import comingSoonImg from "../assets/images/coming-soon.jpg"
import Button from "../components/Button"
import Countdown from "../components/Countdown";
const ComingSoon = () => {
    const targetDate = "2024-12-31T23:59:59";

    return (
        <section className="h-screen w-full flex">
            <div className="w-1/2">
                <img className="w-full h-full object-cover" src={comingSoonImg} alt="" />
            </div>
            <div className="w-1/2 p-[5%]">
                <h1>RadEl</h1>
                <p>Coming soon</p>
                <p>get notified when we launch!</p>
                <div>
                    <Countdown targetDate={targetDate} />
                </div>
                <p>Get notified when site goes live:</p>
                <div>
                    <input type="text" placeholder="Enter your email" />
                    <Button label="Subscribe" variant="primary" />
                </div>
            </div>
        </section>
    )
}

export default ComingSoon