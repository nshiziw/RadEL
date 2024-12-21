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
                    <div className="row-span-2" key={collection.id}>
                            <img className="outline -outline-offset-[15px] outline-snow w-full object-cover h-full" src={collection.image} alt="" />
                            <div>
                                <p>{collection.reduction}</p>
                                <p>{collection.date}</p>
                                <Link to="/shop" >{collection.link}</Link>
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