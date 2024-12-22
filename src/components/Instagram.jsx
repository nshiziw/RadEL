import Instagrams from "../assets/data/Instagram.json"
const Instagram = () => {
    return (
        <section className="px-[10%] py-10">
            <div className="title flex flex-col gap-3 items-center">
                <p className="uppercase text-gold text-xl font-medium">follow us</p>
                <p className="capitalize text-navy-green text-5xl font-italiana">follow us on instagram</p>
            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-10">
                    {Instagrams.map((instagram, index) => (
                        <div key={index} className="relative w-[200px] h-[200px]">
                            <img src={instagram.image} alt={instagram.name} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-50" />
                            <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center px-5 py-3 text-white">
                                <p className="font-semibold text-lg">{instagram.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Instagram