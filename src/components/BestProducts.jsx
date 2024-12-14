import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BestPProducts from "../assets/data/BestProducts.json"
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
                    scrollbar={{
                    hide: true,
                    }}
                    loop={true}
                    modules={[Scrollbar]}
                    className="mySwiper"
                >
                    {BestPProducts.map((bestProduct) => (
                        <SwiperSlide key={bestProduct.id}>
                            <h1>lorem</h1>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BestProducts