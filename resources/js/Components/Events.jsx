import { useState } from "react";
import { Link } from "@inertiajs/react";
import TimeLine from "./TimeLine";
import numeral from "numeral";

const Events = ({ ticketPrice, timeRegist, ticketPriceCS, timeRegistCS }) => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const dbccAtas =
        "This is a great opportunity for you to improve your ability to work together with interesting, creative, and innovative ideas. The Diponegoro Business Case Competition 2023 will give you real experiences and relevant learning on how to solve business problems.";

    const dbccBawah =
        "Diponegoro Business Case Competition (DBCC) is a competition held annually as part of ENFUTION. This program is an international-scale business case competition aimed at undergraduate students from all universities in Indonesia and internationally. Each team can present their ideas relevant to the company’s business conditions and the theme we have determined. This year's theme is “The Role of Green Business in Achieving Sustainable Economics''. This theme was inspired by the emergence of environmental movements carried out both through actions and campaigns by scientists and activists from various parts of the world. By choosing this theme, it is hoped that participants will learn how to achieve maximum profit while still taking part in protecting the earth for a better future. It is very important for us to learn how to implement the Green Business concept so that the company remains under control and as a result the environment is not polluted from the manufacturing activities carried out by the company. Therefore, this theme is considered appropriate to the condition of the earth with the worsening climate change and environmental pollution.";

    const sessionAtas =
        " a business case certainly requires a variety of qualified skills such as knowledge, strategy, good case analysis, and the ability to think innovatively. Coaching Session is here to provide a place for you to learn how to discuss and prepare you to solve business problems with a professional mentor!";

    const sessionBawah =
        "Coaching Session is a pre-event of the Diponegoro Business Case Competition. This event aims to provide training to participants before participating in business problem competitions. Participants in this event can come from within and outside the country and don’t have to be participants who take part in the DBCC series of events. DBCC will work closely with professional mentors to guide participants in solving business problems in a solutive and efficient way. The series of Coaching Sessions will be divided into 2 segments: Case Analysis and One Day Case. In Case Analysis, participants are welcome to discuss and analyze business problems. Meanwhile, in the “One Day Case” segment, your ability to solve these business problems will be improved. Interestingly, The Coaching Session will give the best teams a prize for each team! So what are you waiting for? Register your team at the 2023 Coaching Session and explore your potential!";

    const clinicAtas =
        "The Coaching Clinic is a new innovation from the Diponegoro Business Case Competition in the form of training and mentoring by professional mentors aimed at mastering further knowledge and skills regarding papers that have been made by participants. Participants in this event are only intended for the first 20 (team) buyers and participants of the entire series of DBCC events. The purpose of this Coaching Clinic is to discuss the strengths and weaknesses of the papers that have been made by each team. participants are allowed to bring papers from all sources (DBCC 2022 paper and previous years are allowed) except this year's DBCC paper. However, if there are participants who do not write papers, they can skip the discussion session and attend the question and answer session directly. ";

    const clinicBawah =
        "So what are you waiting for? Don't miss it and get the best insight by joining Coaching Clinic!";

    return (
        <>
            <h1 className="flex mx-auto justify-center text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl font-bold my-3">
                Our Series of Events
            </h1>
            <div className="mb-10 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
            {/* <img src="images/eventTop.png" alt="" /> */}
            <div className="w-full xl:px-60 flex justify-evenly border-t-2 border-[#EB9928] border-b-2 py-2 font-semibold mx-auto">
                <button
                    onClick={() => {
                        setSelectedIndex(1);
                    }}
                    className={
                        selectedIndex == 1
                            ? "text-[#EB9928] w-40"
                            : "text-[#1E2E40] w-40"
                    }
                >
                    DBCC
                </button>
                <button
                    onClick={() => {
                        setSelectedIndex(2);
                    }}
                    className={
                        selectedIndex == 2
                            ? "text-[#EB9928] w-40"
                            : "text-[#1E2E40] w-40"
                    }
                >
                    COACHING SESSION
                </button>
            </div>
            <div className="">
                <div className="md:container">
                    {selectedIndex == 1 && (
                        <div className="py-10">
                            <div className="bg-[#FFF9EE] rounded-[50px] px-4 sm:px-0 rounded-bl-[30px] border-r-2 border-l-2 border-t-2 border-[#EB9928] rounded-br-[30px] pt-20 md:px-32">
                                <h1 className="font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                                    DBCC
                                </h1>
                                <p className="mb-5 font-medium xl:max-w-2xl text-center flex mx-auto">
                                    {dbccAtas}
                                </p>
                                <div className="mb-5 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                                <p className="text-center">{dbccBawah}</p>
                                <h1 className="font-semibold py-10 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-xl">
                                    Register Below
                                </h1>
                                <div className="flex justify-center mb-20 flex-wrap">
                                    <Link href={route("dbcc.form-summit")}>
                                        <div
                                            className={`hover:shadow-xl ${
                                                timeRegist == "EB"
                                                    ? ""
                                                    : "opacity-50"
                                            } bg-gradient-to-t from-[#EB9928] mb-5 to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5`}
                                        >
                                            <p>Early Bird</p>
                                            <p>
                                                {" "}
                                                Rp.{" "}
                                                {`${
                                                    timeRegist == "EB"
                                                        ? numeral(
                                                              ticketPrice
                                                          ).format("0,0")
                                                        : "xxx"
                                                }`}
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href={route("dbcc.form-summit")}>
                                        <div
                                            className={`hover:shadow-xl ${
                                                timeRegist == "NORMAL"
                                                    ? ""
                                                    : "opacity-50"
                                            } bg-gradient-to-t from-[#EB9928] mb-5 to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5`}
                                        >
                                            <p>Normal Registration</p>
                                            <p>
                                                {" "}
                                                Rp.{" "}
                                                {`${
                                                    timeRegist == "NORMAL"
                                                        ? numeral(
                                                              ticketPrice
                                                          ).format("0,0")
                                                        : "xxx"
                                                }`}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <img
                                    src="images/line.svg"
                                    className=""
                                    alt=""
                                />
                            </div>
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] py-20 border-r-2 border-l-2 border-b-2 border-[#EB9928]">
                                {/* <img
                                    className="container w-96 sm:w-[1200px] flex justify-center mx-auto"
                                    src="images/timelineDBCC99.svg"
                                    alt=""
                                /> */}
                                <div className="">
                                    <TimeLine name={"dbcc"} />
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedIndex == 2 && (
                        <div className="py-10">
                            <div className="bg-[#FFF9EE] px-4 sm:px-0 rounded-[50px] rounded-bl-[30px] border-r-2 border-l-2 border-t-2 border-[#EB9928] rounded-br-[30px] pt-20 md:px-32">
                                <h1 className="font-bold mb-10 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                                    Coaching Session
                                </h1>
                                <div className="xl:flex">
                                    <div className="xl:w-1/3 pb-5 flex justify-center xl:justify-normal xl:mr-5">
                                        <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0 lg:mr-5 xl:mr-0 xl:mb-24">
                                            <img
                                                className=""
                                                src="images/speaker/navira.png"
                                                alt=""
                                            />

                                            <p className="text-[#EB9928] md:text-base text-sm text-center">
                                                The Indonesian Representative
                                                for APEC Voices of The Future &
                                                CEO Summit 2022, The 3rd Winner
                                                of HSBC Indonesia Business Case
                                                Competition
                                            </p>
                                        </div>
                                    </div>
                                    <div className="xl:w-2/3">
                                        <p className="mb-5 font-medium  text-left">
                                        <span className="text-[#EB9928] h-fit">
                                                Solving
                                            </span> a business case certainly requires a variety of qualified skills such as knowledge, strategy, good case analysis, and the ability to think innovatively. Coaching Session is here to provide a place for you to learn how to discuss and prepare you to solve business problems with a professional mentor!
                                        </p>
                                        <div className="mb-5  w-20 border-b-2 border-[#EB9928]"></div>
                                        <p className="text-left pb-10">
                                            {sessionBawah}
                                        </p>

                                        <div className="flex mb-20 flex-wrap justify-center">
                                            <Link href={route("dbcc.form-cs")}>
                                                <div
                                                    className={`hover:shadow-xl ${
                                                        timeRegistCS == "EB"
                                                            ? ""
                                                            : "opacity-50"
                                                    } bg-gradient-to-t from-[#EB9928] mb-5 to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5`}
                                                >
                                                    <p>Early Bird</p>
                                                    <p>
                                                        {" "}
                                                        Rp.{" "}
                                                        {`${
                                                            timeRegistCS == "EB"
                                                                ? numeral(
                                                                      ticketPriceCS
                                                                  ).format(
                                                                      "0,0"
                                                                  )
                                                                : "xxx"
                                                        }`}
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link href={route("dbcc.form-cs")}>
                                                <div
                                                    className={`hover:shadow-xl ${
                                                        timeRegistCS == "NORMAL"
                                                            ? ""
                                                            : "opacity-50"
                                                    } bg-gradient-to-t from-[#EB9928] mb-5 to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5`}
                                                >
                                                    <p>Normal Registration</p>
                                                    <p>
                                                        {" "}
                                                        Rp.{" "}
                                                        {`${
                                                            timeRegistCS ==
                                                            "NORMAL"
                                                                ? numeral(
                                                                      ticketPriceCS
                                                                  ).format(
                                                                      "0,0"
                                                                  )
                                                                : "xxx"
                                                        }`}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src="images/line.svg"
                                    className=""
                                    alt=""
                                />
                            </div>
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] py-20 border-r-2 border-l-2 border-b-2 border-[#EB9928]">
                                {/* <img
                                    className="hidden container w-96 sm:w-[1200px] sm:flex justify-center mx-auto"
                                    src="images/timelineCS.svg"
                                    alt=""
                                /> */}
                                <div className="">
                                    <TimeLine name={"cs"} />
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedIndex == 99 && (
                        <div className="py-10">
                            <div className="bg-[#FFF9EE]  px-4 sm:px-0 rounded-[50px] rounded-bl-[30px] border-r-2 border-l-2 border-t-2 border-[#EB9928] rounded-br-[30px] pt-20 md:px-32">
                                <h1 className="font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                                    Coaching Clinic
                                </h1>
                                <p className="mb-5 font-medium max-w-4xl flex mx-auto text-center">
                                    {clinicAtas}
                                </p>
                                <div className="mb-5 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                                <p className="text-center">{clinicBawah}</p>
                                <h1 className="font-semibold py-10 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-xl">
                                    Register Below
                                </h1>
                                <div className="flex justify-center mb-20 flex-wrap">
                                    <Link href="/registration-coaching-clinic">
                                        <div className="hover:shadow-xl opacity-50 bg-gradient-to-t from-[#EB9928] mb-5 md:mb-0 to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5">
                                            <p>Early Bird</p>
                                            <p>Rp. xxx</p>
                                        </div>
                                    </Link>
                                    <Link href="/registration-coaching-clinic">
                                        <div className="hover:shadow-xl bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] opacity-50 text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5">
                                            <p>Normal Registration</p>
                                            <p>Rp. xxx</p>
                                        </div>
                                    </Link>
                                </div>
                                <img
                                    src="images/line.svg"
                                    className=""
                                    alt=""
                                />
                            </div>
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] py-20 border-r-2 border-l-2 border-b-2 border-[#EB9928]">
                                {/* <img
                                    className="hidden w-full sm:w-[700px] sm:flex justify-center mx-auto"
                                    src="images/timelineCC.svg"
                                    alt=""
                                /> */}
                                <div className="">
                                    <TimeLine name={"cc"} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Events;
