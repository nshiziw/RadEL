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
                        <SwiperSlide key={testimonial.id} className="">
                            <div>
                                <div>
                                    <MdOutlineStar />
                                    <MdOutlineStar />
                                    <MdOutlineStar />
                                    <MdOutlineStar />
                                    <MdOutlineStar />
                                </div>
                                <p>{testimonial.rate}</p>
                            </div>
                            <p>{testimonial.title}</p>
                            <p>{testimonial.testimonial}</p>
                            <div>
                                <img src={testimonial.image} alt="" />
                                <div>
                                    <p>{testimonial.name}</p>
                                    <p>{testimonial.job}</p>
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