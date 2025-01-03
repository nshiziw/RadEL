import { Link } from "react-router-dom"
import Collections from "../assets/data/Collection.json"
import { CiHeart } from "react-icons/ci"
import { IoIosExpand } from "react-icons/io"
import { BsHandbag } from "react-icons/bs"
import { FaStar } from "react-icons/fa"
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
                    <div className="border group border-navy-green" key={collection.id}>
                        <div className="relative overflow-hidden">
                            <img src={collection.image} alt="" />
                            <div className="absolute top-5 left-5">
                                <p className="bg-gold text-snow px-2 text-sm py-1">30% off</p>
                            </div>
                            <div className="icons absolute -right-11 group-hover:right-4 top-4 transition-all duration-500 flex flex-col gap-3">
                                <div className='border bg-snow shadow-lg group/item p-2 rounded-full hover:border-navy-green hover:bg-navy-green transition duration-300 cursor-pointer'>
                                    <CiHeart className='text-2xl text-navy-green group-hover/item:text-snow transition duration-300' />
                                </div>
                                <div className='border bg-snow shadow-lg group/item p-2 rounded-full hover:border-navy-green hover:bg-navy-green transition duration-300 cursor-pointer'>
                                    <IoIosExpand className='text-2xl text-navy-green group-hover/item:text-snow transition duration-300' />
                                </div>
                                <div className='border bg-snow shadow-lg group/item p-2 rounded-full hover:border-navy-green hover:bg-navy-green transition duration-300 cursor-pointer'>
                                    <BsHandbag className='text-2xl text-navy-green group-hover/item:text-snow transition duration-300' />
                                </div>
                            </div>
                        </div>
                        <div className="content p-3 flex flex-col gap-1 justify-center">
                            <div className="flex items-center justify-between">
                                <p className="text-slate-600 text-base capitalize font-medium">{collection.category}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-gold text-lg"/>
                                    <p className="text-base font-semibold text-navy-green">{collection.rate}</p>
                                </div>
                            </div>
                            <Link className="text-lg capitalize font-semibold text-navy-green" to="/shop">{collection.name}</Link>
                            <div className="flex gap-2">
                                <p className="text-lg text-navy-green font-medium">{collection.newPrice}</p>
                                <p className="text-lg text-slate-500 line-through font-medium">{collection.newPrice}</p>
                            </div>
                        </div>
                    </div>
                    )
                )}
            </div>
        </section>
    )
}

export default CollectionsTrendy