import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;

        if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clean up on component unmount
    }, []);

    return (
        <div className="grid grid-cols-4 divide-x-2 divide-navy-green">
            <div className="flex flex-col items-center">
                <span className="text-6xl font-semibold text-navy-green">{timeLeft.days}</span>
                <p>{timeLeft.days === 1 ? "day" : "days"}</p>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-6xl font-semibold text-navy-green">{timeLeft.hours}</span>
                <p>{timeLeft.hours === 1 ? "hour" : "hours"}</p>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-6xl font-semibold text-navy-green">{timeLeft.minutes}</span>
                <p>{timeLeft.minutes === 1 ? "minute" : "minutes"}</p>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-6xl font-semibold text-navy-green">{timeLeft.seconds}</span>
                <p>{timeLeft.seconds === 1 ? "second" : "seconds"}</p>
            </div>
        </div>
    );
};

export default Countdown;
