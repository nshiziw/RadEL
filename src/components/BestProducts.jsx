import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/scrollbar";
import BestPProducts from "../assets/data/BestProducts.json"
import { CiHeart } from 'react-icons/ci';
import { IoIosExpand } from 'react-icons/io';
import { BsHandbag } from 'react-icons/bs';
import CountdownProduct from "./CountdownProduct.jsx";
import { FaStar } from 'react-icons/fa';
const BestProducts = () => {
    return (
        <section className="py-10">
            <div className="title px-[10%] flex justify-between items-end">
                <div className="flex flex-col gap-3">
                    <p className="uppercase font-medium text-gold text-2xl">our products</p>
                    <p className="text-navy-green font-italiana capitalize text-5xl">our best sellers products</p>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="text-navy-green font-semibold capitalize hover:text-snow hover:bg-navy-green transition duration-500 active:text-snow active:bg-navy-green focus:text-snow focus:bg-navy-green border-2 border-navy-green px-5 py-3">all</button>
                    <button className="text-navy-green font-semibold capitalize hover:text-snow hover:bg-navy-green transition duration-500 active:text-snow active:bg-navy-green focus:text-snow focus:bg-navy-green border-2 border-navy-green px-5 py-3">Earring</button>
                    <button className="text-navy-green font-semibold capitalize hover:text-snow hover:bg-navy-green transition duration-500 active:text-snow active:bg-navy-green focus:text-snow focus:bg-navy-green border-2 border-navy-green px-5 py-3">ring</button>
                    <button className="text-navy-green font-semibold capitalize hover:text-snow hover:bg-navy-green transition duration-500 active:text-snow active:bg-navy-green focus:text-snow focus:bg-navy-green border-2 border-navy-green px-5 py-3">necklaces</button>
                    <button className="text-navy-green font-semibold capitalize hover:text-snow hover:bg-navy-green transition duration-500 active:text-snow active:bg-navy-green focus:text-snow focus:bg-navy-green border-2 border-navy-green px-5 py-3">bracelets</button>
                </div>
            </div>
            <div className='mt-10'>
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {BestPProducts.map((bestProduct) => (
                        <SwiperSlide className='group' key={bestProduct.id}>
                            <div className='shadow-lg shadow-slate-200 relative my-5 overflow-hidden transition'>
                                <img className='w-full object-cover rounded-md' src={bestProduct.image} alt="" />
                                <div className="icons absolute -right-11 group-hover:right-4 top-4 transition-all flex flex-col gap-3">
                                    <div className='border border-slate-600 group/item p-2 rounded-full hover:bg-navy-green transition duration-300 cursor-pointer'>
                                        <CiHeart className='text-2xl text-navy-green group-hover/item:text-snow transition duration-300' />
                                    </div>
                                    <div className='border border-slate-600 group/item p-2 rounded-full hover:bg-navy-green transition duration-300 cursor-pointer'>
                                        <IoIosExpand className='text-2xl text-navy-green group-hover/item:text-snow transition duration-300' />
                                    </div>
                                    <div className='border border-slate-600 group/item p-2 rounded-full hover:bg-navy-green transition duration-300 cursor-pointer'>
                                        <BsHandbag className='text-2xl text-navy-green group-hover/item:text-snow transition duration-300' />
                                    </div>
                                </div>
                                <div className="tag absolute top-4 group-hover:left-4 transition-all left-8 text-snow bg-gold px-3 py-2">
                                    <p>{bestProduct.tag}</p>
                                </div>
                                <div className="end absolute rounded -bottom-24 group-hover:bottom-4 transition-all text-snow bg-navy-green py-5 w-[92%] ml-[4%] mr-[4%]">
                                    <CountdownProduct targetDate={bestProduct.expiration} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-slate-500'>{bestProduct.category}</p>
                                    <div className='flex items-center gap-2'>
                                        <FaStar className='text-gold text-xl' />
                                        <p className='text-xl font-semibold text-navy-green'>{bestProduct.rate}</p>
                                    </div>
                                </div>
                                <p className='font-medium text-2xl text-navy-green'>{bestProduct.name}</p>
                                <div className='flex gap-2'>
                                    <p className='text-xl font-medium text-navy-green'>{bestProduct.newPrice}</p>
                                    <p className='text-xl font-medium text-slate-500 line-through'>{bestProduct.oldPrice}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BestProducts