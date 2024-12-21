import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Testimonialls from "../assets/data/Testimonials.json"
import { Autoplay } from "swiper/modules";
import { MdOutlineStar } from "react-icons/md";

const Testimonials = () => {
    return (
        <section className="px-[10%] py-10">
            <div className="title flex flex-col gap-3 items-center">
                <p className="text-gold uppercase font-medium text-xl">Testimonials</p>
                <p className="capitalize text-5xl font-italiana text-navy-green">what our clients say</p>
            </div>
            <div className="mt-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {Testimonialls.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="flex flex-col gap-2">
                            <div className="flex items-center gap-1">
                                <div className="flex">
                                    <MdOutlineStar className="text-gold text-xl" />
                                    <MdOutlineStar className="text-gold text-xl" />
                                    <MdOutlineStar className="text-gold text-xl" />
                                    <MdOutlineStar className="text-gold text-xl" />
                                    <MdOutlineStar className="text-gold text-xl" />
                                </div>
                                <p className="text-navy-green font-medium">{testimonial.rate}</p>
                            </div>
                            <p className="text-navy-green font-italiana text-3xl capitalize font-medium my-4">{testimonial.title}</p>
                            <p className="text-slate-600 mb-4">{testimonial.testimonial}</p>
                            <div className="flex items-center gap-2">
                                <img className="w-20 h-20 object-cover outline outline-2 -outline-offset-[5px] outline-snow" src={testimonial.image} alt="" />
                                <div>
                                    <p className="text-navy-green font-semibold">{testimonial.name}</p>
                                    <p className="text-slate-600 font-normal">{testimonial.job}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials