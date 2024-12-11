import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import Categories from "../assets/data/Categories.json"
const Category = () => {
    return (
        <section className="py-10 px-[10%]">
            <div className="title flex flex-col gap-3 items-center mb-5">
                <p className="uppercase text-gold text-3xl font-medium">our categories</p>
                <h1 className="capitalize font-italiana text-5xl text-navy-green">shop by categories</h1>
            </div>
            <div className="mt-10">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {Categories.map((category) => (
                        <SwiperSlide className='' key={category.id}>
                            <div className='flex flex-col gap-2 items-center'>
                                <img className='w-full aspect-[1/1.2] object-cover' src={category.image} alt="" />
                                <h1 className='text-xl font-medium text-navy-green'>{category.name}</h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Category