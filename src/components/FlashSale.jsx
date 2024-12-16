import { useEffect, useState, useCallback } from "react";
import Button from "./Button.jsx";
import Countdown from "./CountdownSale.jsx"; // Assuming Countdown is imported from another file

const FlashSale = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default: no box is active
    const [isTransitioning, setIsTransitioning] = useState(false);

    const boxes = Array.from({ length: 5 }, (_, i) => i);
    
    // Define unique targets for each box
    const countdownTargets = [
        "2024-12-19T06:15:30",
        "2025-01-08T11:45:00",
        "2025-02-22T18:30:45",
        "2025-03-15T23:59:59",
        "2025-05-05T09:00:00",
    ];


    const updateCurrentImg = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Match the transition duration in CSS
    }, []);

    const handleArrowKey = useCallback(
        (event) => {
            if (isTransitioning) return;

            if (event.key === "ArrowRight") {
                setActiveIndex((prevIndex) =>
                    prevIndex === null ? 0 : (prevIndex + 1) % boxes.length
                );
            } else if (event.key === "ArrowLeft") {
                setActiveIndex((prevIndex) =>
                    prevIndex === null
                        ? boxes.length - 1
                        : (prevIndex - 1 + boxes.length) % boxes.length
                );
            }

            updateCurrentImg();
        },
        [isTransitioning, updateCurrentImg, boxes.length]
    );

    const handleBoxClick = (index) => {
        if (isTransitioning) return;

        if (index === activeIndex) {
            setActiveIndex(null); // Reset state to collapse all boxes
        } else {
            setActiveIndex(index);
            updateCurrentImg();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleArrowKey);

        return () => {
            document.removeEventListener("keydown", handleArrowKey);
        };
    }, [handleArrowKey]);

    return (
        <section className="flash-sale px-[10%] h-screen py-10 overflow-hidden">
            <div className="h-full box-container flex">
                {boxes.map((_, index) => (
                    <div
                        key={index}
                        className={`box h-full ${
                            index === activeIndex
                                ? "expanded"
                                : activeIndex === null
                                ? ""
                                : "closed"
                        }`}
                        onClick={() => handleBoxClick(index)}
                    >
                        <div className="overlay"></div>
                        <div className="textBox bg-navy-green bg-opacity-75 flex flex-col justify-center items-center gap-5">
                            <p className="font-italiana text-snow text-6xl">
                                Flash Sale!
                            </p>
                            <p className="text-snow capitalize text-xl">
                                Get 15% off - limited time offer
                            </p>
                            <Countdown targetDate={countdownTargets[index]} />
                            <Button
                                label="Shop Now"
                                className="bg-gold hover:bg-gold"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FlashSale;
