import Instagrams from "../assets/data/Instagram.json"
const Instagram = () => {
    return (
        <section className="px-[10%] py-10">
            <div className="title flex flex-col gap-3 items-center">
                <p className="uppercase text-gold text-xl font-medium">follow us</p>
                <p className="capitalize text-navy-green text-5xl font-italiana">follow us on instagram</p>
            </div>
            <div className="mt-10 grid grid-cols-6 gap-6">
                {Instagrams.map((instagram, index) => (
                    <div key={index} className={`${instagram.id === 3 ? "col-span-2 row-span-2" : ""}`}>
                        <img src={instagram.image} alt={instagram.image} className="w-full aspect-square object-cover" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Instagram