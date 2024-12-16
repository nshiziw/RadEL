import { useState, useEffect } from "react";

const CountdownProduct = ({ targetDate }) => {
    const [timeReached, setTimeReached] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;

        if (difference <= 0) {
            setTimeReached(true);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const time = calculateTimeLeft();
            setTimeLeft(time);
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    if (timeReached) {
        return (
            <div className="flex flex-col items-center text-snow">
                <p className="text-lg font-medium">Promotion Ended!</p>
            </div>
        );
    }

    return (
        <div className="flex justify-between w-3/5">
            {Object.entries(timeLeft).map(([unit, value], index) => (
                <div key={index} className="flex gap-2 items-center">
                    <div className="flex flex-col items-center">
                        <span className="font-italiana text-6xl font-normal text-gold">{value}</span>
                        <p className="text-lg font-normal capitalize text-snow">
                            {value === 1 ? unit.slice(0, -1) : unit}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CountdownProduct;
