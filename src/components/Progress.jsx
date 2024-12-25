import icons from "../assets/icons/Progress.jsx"
import Progresses from "../assets/data/Progress.json";

const Progress = () => {
    return (
        <section className="py-10 px-8 border border-navy-green my-4">
            <div className="grid grid-cols-5">
                {Progresses.map((progress) => {
                    const IconComponent = icons[progress.icon];
                    return (
                        <div key={progress.id} className="flex flex-col justify-center items-center">
                            <div className="flex flex-col items-center">
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
                                <p>{progress.title}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Progress;
