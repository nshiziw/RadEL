import { useEffect, useState, useCallback } from "react";

const FlashSale = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Default: no box is active
    const [isTransitioning, setIsTransitioning] = useState(false);

    const boxes = Array.from({ length: 5 }, (_, i) => i);

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
                <div className="textBox bg-navy-green bg-opacity-75"></div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default FlashSale;
