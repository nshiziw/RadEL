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
        <div style={{ fontSize: "1.5em", textAlign: "center" }}>
        <span>{timeLeft.days} {timeLeft.days === 1 ? "day" : "days"}, </span>
        <span>{timeLeft.hours} {timeLeft.hours === 1 ? "hour" : "hours"}, </span>
        <span>{timeLeft.minutes} {timeLeft.minutes === 1 ? "minute" : "minutes"}, </span>
        <span>{timeLeft.seconds} {timeLeft.seconds === 1 ? "second" : "seconds"}</span>
        </div>
    );
};

export default Countdown;
