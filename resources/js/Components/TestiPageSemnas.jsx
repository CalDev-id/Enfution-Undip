import Testi from "./Testi";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestiPage = () => {
    const Testisatu =
        "Kita selalu giving back not only take something. Nah dalam acara ini aku bisa bertemu dengan berbagai macam pihak dan kalangan, aku bisa sharing pengalaman aku dalam pembuatan resume, interview,  bahkan pembangunan social branding di sosial media. Aku juga bisa dapat dan juga berempati bersama teman teman yang nanya, dan juga antusiasmenya sangat tinggi sehingga aku pun ingin agar acara ini terus berlanjut agar memaksimalkan dampak  kepada generasi generasi muda di Indonesia supaya bisa terus saling berbagi dan terus belajar tiada henti mau dari aku ataupun dari siapapun";

    const TestiDua =
        "Seminar Nasional Enfution yang diselenggarakan oleh FEB UNDIP pada 2022 lalu sangatlah bermanfaat dan insightful terutama untuk menumbuhkan 'growth mindset' bagi generasi muda. Selain itu, mampu mengajak kita untuk lebih peka dalam mempersiapkan diri dalam menghadapi perkembangan zaman yang beriringan dengan adanya kecanggihan teknologi. Melalui event ini, mampu mendukung dalam membentuk ekosistem anak muda yang semakin peduli akan pengembangan diri terutama terkait 'mindset' dan 'agility skills'. Sukses untuk event berikutnya ya! Mari bersama memajukan anak muda Bangsa!";
    return (
        <div className="mb-20 mt-10">
            <h1 className="font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl xl:mt-20 2xl:mt-36">
                Testimonials
            </h1>
            <div className="mb-5 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>

            <div className="container">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 100,
                    },
                    1440: {
                        slidesPerView: 2,
                        spaceBetween: 300,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {" "}
                    <div className="md:mt-20">
                        <Testi
                            nama={"Josefina Purnomo"}
                            pesan={Testisatu}
                            quote={
                                "Aku percaya kalau di hidup ini kita itu selalu tidak ada henti hentinya buat belajar."
                            }
                            asal={"Content Creator"}
                            imageURL={"josefina"}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="md:mt-20">
                        <Testi
                            nama={"Arfiana Mauliana"}
                            pesan={TestiDua}
                            quote={
                                "Sangat bermanfaat dan insightful terutama untuk menumbuhkan 'growth mindset' bagi generasi muda"
                            }
                            asal={"Content Creator"}
                            imageURL={"arfiana"}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>

            {/* <div className="container xl:flex xl:justify-between">
                <div className="mt-20">
                    <Testi
                        nama={"Muhammad Ariel Rabbani"}
                        pesan={TestiTiga}
                        quote={"It's a really good experience for me & my team"}
                        asal={"Bina Nusantara University"}
                        team={"Gatot Kaca Team"}
                        imageURL={"manusia1"}
                    />
                </div>
                <div className="">
                    <Testi
                        nama={"Michelle"}
                        pesan={Testisatu}
                        quote={"DBCC was a truly worthwhile experience"}
                        asal={"Pelita Harapan University"}
                        team={"Wonderwork Team"}
                        imageURL={"testiMichael"}
                    />
                </div>

                <div className="mt-20">
                    <Testi
                        nama={"Nisrina Tsaniya Khansa Kahfi"}
                        pesan={TestiDua}
                        quote={"DBCC 2022 has been quite a memorable journey!"}
                        asal={"Prasetya Mulya University"}
                        team={"Athena Team"}
                        imageURL={"testi2"}
                    />
                </div>
            </div> */}
        </div>
    );
};

export default TestiPage;
