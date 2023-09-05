import { Link } from "@inertiajs/react";
import TimeLine from "./TimeLine";

const EventsHome = () => {
    return (
        <>
            <img src="images/eventTop.png" alt="" />
            <div className="bg-[#FFCE2E]">
                <div>
                    <div className="container bg-[#FFF9EE] rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[30px] rounded-br-[30px]">
                        <img
                            src="images/LogoDBCC2.png"
                            alt=""
                            className="self-center w-60 sm:hidden flex justify-center mx-auto pt-20 mb-10"
                        />
                        <div className="flex md:px-20 justify-evenly sm:py-24 pb-24">
                            <div className="self-center md:max-w-3xl">
                                <h1 className="font-bold text-3xl mb-3">
                                    DBCC
                                </h1>
                                <p className="mb-3">
                                    Diponegoro Business Case Competition (DBCC)
                                    is a competition held annually as part of
                                    ENFUTION. This program is an
                                    international-scale business case
                                    competition aimed at undergraduate students
                                    from all universities in Indonesia and
                                    internationally. Each team can present their
                                    ideas relevant to the company’s business
                                    conditions and the theme we have determined.
                                </p>
                                <div className="flex mb-3 flex-wrap">
                                    <p className="text-[#FFCE2E] py-1 md:px-5 px-1 border border-[#FFCE2E] rounded-full italic mr-3">
                                        Coaching Session
                                    </p>
                                    <p className="text-[#FFCE2E] py-1 md:px-5 px-1 border border-[#FFCE2E] rounded-full italic mt-2 sm:mt-0">
                                        DBCC
                                    </p>
                                </div>
                                <Link href="/DBCC" className="text-white w-fit py-1 px-5 border bg-[#FFCE2E] rounded-full italic">
                                    Read More
                                </Link>
                            </div>
                            <img
                                src="images/LogoDBCC2.png"
                                alt=""
                                className="self-center w-60 hidden sm:block"
                            />
                        </div>

                        <img src="images/line.svg" className="" alt="" />
                    </div>
                    <div className="container bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] py-10 mb-20">
                        <img
                            className="container w-full sm:w-[1100px] flex justify-center mx-auto"
                            src="images/timelineDBCC.png"
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <div className="container bg-[#FFF9EE] rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[30px] rounded-br-[30px]">
                        <img
                            src="images/LogoSemnas2.svg"
                            alt=""
                            className="self-center w-60 sm:hidden flex justify-center mx-auto pt-20 mb-10"
                        />
                        <div className="flex md:px-20 justify-evenly sm:py-24 pb-24">
                            <div className="self-center md:max-w-2xl">
                                <h1 className="font-bold text-3xl mb-3">
                                    National Seminar
                                </h1>
                                <p className="mb-3">
                                    National Seminar is an annual event in order
                                    to empower students and societies throughout
                                    Indonesia. This event will invite national
                                    speakers who are competent and expert in
                                    their fields which are able to provide
                                    motivations and insight. Our main goal is to
                                    educate properly and appropriately,
                                    especially the youth generation about the
                                    importance of improving self-quality in
                                    order to have a competitive advantage during
                                    this dynamic era. Thus, they can contribute,
                                    lead change and development in Indonesia.
                                </p>
                                <div className="flex mb-3 flex-wrap">
                                    <p className="text-[#FFCE2E] py-1 md:px-5 px-1 border border-[#FFCE2E] rounded-full italic mr-3">
                                        Early Talk 1
                                    </p>
                                    <p className="text-[#FFCE2E] py-1 md:px-5 px-1 border border-[#FFCE2E] rounded-full italic mr-3">
                                        Early Talk 2
                                    </p>
                                    <p className="text-[#FFCE2E] py-1 md:px-5 px-1 border border-[#FFCE2E] rounded-full italic mt-2 sm:mt-0">
                                        National Seminar
                                    </p>
                                </div>
                                <Link href="/national-seminar" className="text-white w-fit py-1 px-5 border bg-[#FFCE2E] rounded-full italic">
                                    Read More
                                </Link>
                            </div>
                            <img
                                src="images/LogoSemnas2.svg"
                                alt=""
                                className="self-center w-60 hidden sm:block"
                            />
                        </div>

                        <img src="images/line.svg" className="" alt="" />
                    </div>
                    <div className="container bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] pb-10">
                        <img
                            className="container w-full sm:w-[1100px] flex justify-center mx-auto pt-10"
                            src="images/timelineSemnasHome.svg"
                            alt=""
                        />
                        {/* <TimeLine/> */}
                    </div>
                </div>
            </div>
            <img src="images/eventBtm.png" alt="" />
        </>
    );
};

export default EventsHome;
