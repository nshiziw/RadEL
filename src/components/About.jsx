import { FaCirclePlay } from "react-icons/fa6"
import AboutVideo from "../assets/videos/aboutVideo.mp4"
import { FaPauseCircle } from "react-icons/fa"
import { useState } from "react";
const About = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const handlePause = () => {
        setIsPlaying(!isPlaying);
        // play a video with id of aboutVideo
        const video = document.getElementById("aboutVideo");
        if (video) {
            video.play();
        }
        // when the video ends, set isPlaying to false
        video.onended = () => {
            setIsPlaying(false);
        }
    }
    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        // pause a video with id of aboutVideo
        const video = document.getElementById("aboutVideo");
        if (video) {
            video.pause();
        }
    }

    return (
        <section className="py-10 px-[10%] grid grid-cols-2 gap-10">
            <div className="relative group/item group/play">
                <video id="aboutVideo" className="h-full object-cover outline -outline-offset-[25px] outline-snow" muted={true} src={AboutVideo}></video>
                {isPlaying ? (
                    <div className="absolute opacity-0 duration-500 group-hover/play:opacity-100 transition top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 backdrop-blur-sm group-hover/item:backdrop-blur-xl border-2 rounded-full">
                        <FaPauseCircle onClick={handlePlay} className="text-4xl text-snow cursor-pointer" />
                    </div>
                ): (
                    <div className="absolute transition top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 backdrop-blur-sm group-hover/item:backdrop-blur-xl border-2 rounded-full">
                        <FaCirclePlay onClick={handlePause} className=" text-4xl text-snow cursor-pointer" />
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-8">
                <div className="title grid grid-cols-3 gap-3">
                    <div className="col-span-2 flex flex-col gap-5">
                        <p className="uppercase text-3xl font-medium text-gold">about us</p>
                        <h1 className="text-[45px] capitalize font-italiana text-navy-green">the art and soul behind our jewelry</h1>
                    </div>
                    <img className="outline -outline-offset-[10px] outline-snow h-full" src="https://media.istockphoto.com/id/1944923205/photo/close-up-of-the-wedding-rings-of-the-bride-and-groom-in-a-box.jpg?s=612x612&w=0&k=20&c=wAGhhCQD0KMyZy6uDUVdTSEYjUXmH49znFShw1V_VG4=" alt="" />
                </div>
                <p className="text-slate-600 text-lg">Thank you very much. For he is bound by the pleasures of repudiation, and the expedient elders know nothing of his will!</p>
                <div className="grid grid-cols-3 divide-x divide-slate-300 bg-navy-green p-8">
                    <div className="flex flex-col items-center">
                        <h1 className="font-italiana text-gold text-4xl">20+</h1>
                        <p className="text-snow text-lg font-extralight">Categories</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="font-italiana text-gold text-4xl">6000+</h1>
                        <p className="text-snow text-lg font-extralight">Products</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="font-italiana text-gold text-4xl">99%</h1>
                        <p className="text-snow text-lg font-extralight">Satisfied customer</p>
                    </div>
                </div>
                <div>
                    <p className="font-Corinthia font-bold text-3xl text-navy-green">Wilson Nshizirungu</p>
                    <div className="flex items-center gap-1">
                        <p className="text-slate-600">Wilson Nshizirungu</p>
                        <div className="w-[6px] h-[6px] bg-gold rounded-full"></div>
                        <p className="text-slate-600">Founder of RaEl</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About