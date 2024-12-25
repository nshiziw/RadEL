import icons from "../assets/icons/Progress.jsx"
import Progresses from "../assets/data/Progress.json";
import { FaCheckSquare } from "react-icons/fa";

const Progress = () => {
    return (
        <section className="py-10 px-8 border border-navy-green my-4">
            <div className="grid grid-cols-5">
                {Progresses.map((progress, index) => {
                    const isFirst = index === 0;
                    const isLast = index === Progresses.length - 1;
                    const IconComponent = icons[progress.icon];
                    return (
                        <div key={progress.id} className={`flex flex-col justify-center ${isFirst || isLast ? "gap-3" : "gap-0"} items-center`}>
                            <div className="flex flex-col items-center gap-1">
                                {progress.isComplete ? (
                                    <div className="relative">
                                        <div className="absolute bottom-1 right-[2px] text-3xl text-navy-green">
                                            {IconComponent && <IconComponent />}
                                        </div>
                                        <div className="w-5 h-5 bg-gold rounded-full"></div>
                                    </div>
                                ): (
                                    <div className="relative">
                                        <div className="absolute bottom-1 right-[2px] text-3xl text-navy-green">
                                            {IconComponent && <IconComponent />}
                                        </div>
                                        <div className="w-5 h-5 bg-transparent rounded-full"></div>
                                    </div>
                                )}
                                <p className="font-normal text-navy-green">{progress.title}</p>
                            </div>
                            <div className={`flex mt-4 items-center justify-center ${isFirst ? "w-1/2 self-end" : isLast ? "w-1/2 self-start" : "w-full"} `}>
                                {!isFirst && !isLast && (
                                    progress.isComplete ? (
                                        <div className="flex items-center w-full">
                                            <div className="h-1 w-full bg-navy-green"></div>
                                            <FaCheckSquare className="text-5xl text-navy-green" />
                                            <div className="h-1 w-full bg-navy-green"></div>
                                        </div>
                                    ): (
                                        <div className="flex items-center w-full">
                                            <div className="h-1 w-full bg-gray-400"></div>
                                            <FaCheckSquare className="text-5xl text-gray-400" />
                                            <div className="h-1 w-full bg-gray-400"></div>
                                        </div>
                                    )
                                )}


                                {isFirst && (
                                    progress.isComplete ? (
                                        <div className="flex items-center w-full">
                                            <FaCheckSquare className="text-2xl text-navy-green" />
                                            <div className="h-1 w-full bg-navy-green"></div>
                                        </div>
                                    ): (
                                        <div className="flex items-center w-full">
                                            <FaCheckSquare className="text-2xl text-gray-400" />
                                            <div className="h-1 w-full bg-gray-400"></div>
                                        </div>
                                    )
                                )}

                                {isLast && (
                                    progress.isComplete ? (
                                        <div className="flex items-center w-full">
                                            <div className="h-1 w-full bg-navy-green"></div>
                                            <FaCheckSquare className="text-2xl text-navy-green" />
                                        </div>
                                    ): (
                                        <div className="flex items-center w-full">
                                            <div className="h-1 w-full bg-gray-400"></div>
                                            <FaCheckSquare className="text-2xl text-gray-400" />
                                        </div>
                                    )
                                )}

                            </div>
                            {progress.isComplete ? (
                                <div className="flex flex-col items-center mt-4 text-navy-green font-medium">
                                    <p>{progress.time}</p>
                                    <p>{progress.date}</p>
                                </div>
                            ): (
                                <div className="flex flex-col items-center mt-4 text-gray-400 font-medium">
                                    <p>Expected</p>
                                    <p>{progress.date}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Progress;
