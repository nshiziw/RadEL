import { BsHandbag } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"
import { FaStar } from "react-icons/fa"
import { GoArrowRight } from "react-icons/go"
import { IoIosExpand } from "react-icons/io"
import { Link } from "react-router-dom"

const Arrivals = () => {
    return (
        <section className="px-[10%] py-10">
            <div className="title grid grid-cols-2">
                <div>
                    <p className="uppercase text-xl text-gold font-medium">new arrival</p>
                    <p className="font-italiana text-5xl text-navy-green capitalize">new arrival products</p>
                </div>
                <div className="flex items-end">
                    <p className="text-slate-600">Thank you very much. For he is bound by the pleasures of repudiation, and the expedient elders know nothing of his will for him?</p>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-2">
                <div className="flex gap-2 border-2 border-navy-green group">
                    <div className="img w-1/2 p-2 relative overflow-hidden">
                        <img className="w-full" src="https://media.istockphoto.com/id/1403525159/photo/chain-shape-golden-cuff-bracelet-on-geometric-white-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=cDcDL9OZXDuGYc4-95V4Lkd3vzvve8ujTg4WAUFKAJM=" alt="" />
                        <div className="absolute top-5 left-5 text-snow bg-gold px-3 py-2">
                            <p>20% off</p>
                        </div>
                        <div className="icons absolute -right-11 group-hover:right-4 top-4 transition-all flex flex-col gap-3">
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
                    <div className="content w-1/2 bg-emerald-500">
                        <div>
                            <p>Bracelet</p>
                            <div>
                                <FaStar />
                                <p>4.9</p>
                            </div>
                        </div>
                        <p>gold bracelet</p>
                        <div>
                            <p>$120</p>
                            <p>$200</p>
                        </div>
                        <p>Hello, it&apos;s really a pain to be followed. Who, when.</p>
                        <div>
                            <Link to='/shop'>Shop now</Link>
                            <GoArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Arrivals