import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Galery = () => {
    return (
        <>
            <h1 className="font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl xl:mt-20 2xl:mt-36">
                Gallery
            </h1>
            <div className="mb-5 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
            <div className="container">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-72" src="images/swiperDbcc/1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-72" src="images/swiperDbcc/2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-72" src="images/swiperDbcc/3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-72" src="images/swiperDbcc/4.png" alt="" />
                </SwiperSlide>
            </Swiper>
            </div>
        </>
    );
};

export default Galery;
