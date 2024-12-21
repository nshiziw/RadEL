import { BsHandbag } from "react-icons/bs"
import { CiHeart } from "react-icons/ci"
import { IoIosExpand } from "react-icons/io"

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
            <div>
                <div>
                    <div className="img">
                        <img src="https://media.istockphoto.com/id/1403525159/photo/chain-shape-golden-cuff-bracelet-on-geometric-white-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=cDcDL9OZXDuGYc4-95V4Lkd3vzvve8ujTg4WAUFKAJM=" alt="" />
                        <div>
                            <p>20% off</p>
                        </div>
                        <div className="icons">
                                    <div className=''>
                                        <CiHeart className='' />
                                    </div>
                                    <div className=''>
                                        <IoIosExpand className='' />
                                    </div>
                                    <div className=''>
                                        <BsHandbag className='' />
                                    </div>
                                </div>
                    </div>
                    <div className="content"></div>
                </div>
            </div>
        </section>
    )
}

export default Arrivals