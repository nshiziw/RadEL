import { Link } from "react-router-dom"
import Collections from "../assets/data/Collection.json"
const CollectionsTrendy = () => {
    return (
        <section className="px-[10%] py-10">
            <div className="title flex flex-col items-center gap-3">
                <p className="uppercase font-medium text-xl text-gold">new collection</p>
                <p className="font-italiana text-5xl text-navy-green capitalize">trendy design collections</p>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-8">
                {Collections.map((collection) =>
                    collection.id === 1 ? (
                    <div className="row-span-2 relative" key={collection.id}>
                            <img className="outline -outline-offset-[15px] brightness-75 outline-snow w-full object-cover h-full" src={collection.image} alt="" />
                            <div className="absolute bottom-0 w-full flex flex-col gap-3 items-center mb-10">
                                <p className="font-italiana text-4xl text-snow">{collection.reduction}</p>
                                <p className="text-snow uppercase font-medium">{collection.date}</p>
                                <Link className="uppercase text-snow underline hover:text-gold transition-all duration-300" to="/shop" >{collection.link}</Link>
                            </div>
                    </div>
                    ) : (
                    <div key={collection.id}>
                        <img className="w-full object-cover h-full" src={collection.image} alt="" />
                        <h1 className="text-white text-center text-sm font-medium">{collection.name}</h1>
                    </div>
                    )
                )}
            </div>
        </section>
    )
}

export default CollectionsTrendy