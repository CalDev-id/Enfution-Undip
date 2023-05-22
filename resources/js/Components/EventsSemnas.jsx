import { useState } from "react";
import { Link } from "@inertiajs/react";

const EventsSemnas = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const dbccAtas =
        "This is a great opportunity for you to improve your ability to work together with interesting, creative, and innovative ideas. The Diponegoro Business Case Competition 2023 will give you real experiences and relevant learning on how to solve business problems.";

    const dbccBawah =
        "Diponegoro Business Case Competition (DBCC) is a competition held annually as part of ENFUTION. This program is an international-scale business case competition aimed at undergraduate students from all universities in Indonesia and internationally. Each team can present their ideas relevant to the company’s business conditions and the theme we have determined. This year's theme is “The Role of Green Business in Achieving Sustainable Economics''. This theme was inspired by the emergence of environmental movements carried out both through actions and campaigns by scientists and activists from various parts of the world. By choosing this theme, it is hoped that participants will learn how to achieve maximum profit while still taking part in protecting the earth for a better future. It is very important for us to learn how to implement the Green Business concept so that the company remains under control and as a result the environment is not polluted from the manufacturing activities carried out by the company. Therefore, this theme is considered appropriate to the condition of the earth with the worsening climate change and environmental pollution.";

    const sessionAtas =
        "Solving a business case certainly requires a variety of qualified skills such as knowledge, strategy, good case analysis, and the ability to think innovatively. Coaching Session is here to provide a place for you to learn how to discuss and prepare you to solve business problems with a professional mentor!";

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
                    NATIONAL SEMINAR
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
                    EARLY TALK 1
                </button>
                <button
                    onClick={() => {
                        setSelectedIndex(3);
                    }}
                    className={
                        selectedIndex == 3
                            ? "text-[#EB9928] w-40"
                            : "text-[#1E2E40] w-40"
                    }
                >
                    EARLY TALK 2
                </button>
            </div>
            <div className="">
                <div className="md:container">
                    {selectedIndex == 1 && (
                        <div className="py-10">
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-bl-[30px] border-r-2 border-l-2 border-t-2 border-[#EB9928] rounded-br-[30px] pt-20 md:px-32">
                                <h1 className="font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                                    National Seminar (Summit)
                                </h1>
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className=""
                                            src="images/orangHitam.svg"
                                            alt=""
                                        />
                                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Coming Soon
                                        </p>
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            One of Indonesian Ring 1 government
                                        </p>
                                    </div>
                                    <div className="items-center self-center md:ml-20 px-4">
                                        <h1 className="text-xl font-semibold mb-3">
                                            The role of government and public
                                            policy in supporting the creative
                                            economy
                                        </h1>
                                        <p className="border-l-2 border-[#EB9928] py-3 pl-4 mb-3">
                                            Lorem Ipsum{" "}
                                        </p>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Nama Speaker
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row">
                                    <div className="items-center self-center md:mr-20 px-4">
                                        <h1 className="text-xl font-semibold mb-3">
                                            The role of government and public
                                            policy in supporting the creative
                                            economy
                                        </h1>
                                        <p className="border-l-2 border-[#EB9928] py-3 pl-4 mb-3">
                                            Lorem Ipsum{" "}
                                        </p>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Nama Speaker
                                        </p>
                                    </div>
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className=""
                                            src="images/orangHitam.svg"
                                            alt=""
                                        />
                                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Coming Soon
                                        </p>
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            One of Indonesian Ring 1 government
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className=""
                                            src="images/orangHitam.svg"
                                            alt=""
                                        />
                                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Coming Soon
                                        </p>
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            One of Indonesian Ring 1 government
                                        </p>
                                    </div>
                                    <div className="items-center self-center md:ml-20 px-4">
                                        <h1 className="text-xl font-semibold mb-3">
                                            The role of government and public
                                            policy in supporting the creative
                                            economy
                                        </h1>
                                        <p className="border-l-2 border-[#EB9928] py-3 pl-4 mb-3">
                                            Lorem Ipsum{" "}
                                        </p>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Nama Speaker
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center my-20 flex-wrap">
                                    <Link href="/registration-national-seminar">
                                        <div className="bg-gradient-to-t from-[#EB9928] mb-5 md:mb-0 to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5">
                                            <p>Early Bird</p>
                                            <p>Rp. xxx</p>
                                        </div>
                                    </Link>
                                    <Link href="/">
                                        <div className="bg-opacity-50 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5">
                                            <p>Pre-Sale 1</p>
                                            <p>Rp. xxx</p>
                                        </div>
                                    </Link>
                                    <Link href="/">
                                        <div className="bg-opacity-50 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5">
                                            <p>Pre-Sale 2</p>
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
                                <img
                                    className="container w-96 sm:w-[1200px] flex justify-center mx-auto"
                                    src="images/timelineUtama.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                    {selectedIndex == 2 && (
                        <div className="py-10">
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-bl-[30px] border-r-2 border-l-2 border-t-2 border-[#EB9928] rounded-br-[30px] pt-20 md:px-32">
                                <h1 className="font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                                    Early Talk 1
                                </h1>
                                <div className="flex flex-col md:flex-row mb-20">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className=""
                                            src="images/orangHitam.svg"
                                            alt=""
                                        />
                                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Coming Soon
                                        </p>
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            xxx
                                        </p>
                                    </div>
                                    <div className="items-center self-center md:ml-20 px-4 max-w-2xl">
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Build Critical Thinking to Improve
                                            Economy Creative
                                        </p>{" "}
                                        <p className="border-l-2 border-[#EB9928] py-3 pl-4 mb-3">
                                            Lorem Ipsum{" "}
                                        </p>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Nama Speaker
                                        </p>
                                        <p className="mb-3">xxx</p>
                                        <p className="italic mb-3">
                                            “Critical thinking is the ability to
                                            think for yourself and to reliably
                                            and responsibly make the decisions
                                            that affect your life.” <span className="text-[#EB9928]"> - Diane
                                            Halpern</span>
                                        </p>
                                        <p className="mb-3">
                                            The upcoming Early Talk 1 event this
                                            year will delve into the topic of
                                            critical thinking. Given the
                                            ever-evolving era, our younger
                                            generation, who will inherit
                                            leadership roles in this country,
                                            are required by the times to
                                            continuously adapt. However, despite
                                            efforts to adjust to the changing
                                            times, we sometimes fall short in
                                            their implementation. Therefore, the
                                            skill of critical thinking is highly
                                            essential as a foundation for the
                                            younger generation to maximize their
                                            development in utilizing various
                                            opportunities across all aspects of
                                            life. In this occasion, we will
                                            discuss how to overcome these
                                            challenges, beginning with enhancing
                                            critical thinking itself.
                                        </p>
                                        <p className="font-semibold text-xl">
                                            JUNY <span className="text-[#EB9928]"> 14th</span>, 2023
                                        </p>
                                        <Link href="/registration-EarlyTalk1">
                                            <div className="bg-opacity-50 bg-gradient-to-r from-[#EB9928] my-3 to-[#FFCE2E] text-sm text-white text-center italic rounded-full w-36 py-2">
                                                <p>REGISTER NOW</p>
                                            </div>
                                        </Link>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            FREE!
                                        </p>
                                    </div>
                                </div>

                                <img
                                    src="images/line.svg"
                                    className=""
                                    alt=""
                                />
                            </div>
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] py-20 border-r-2 border-l-2 border-b-2 border-[#EB9928]">
                                <img
                                    className="container w-96 sm:w-[1200px] flex justify-center mx-auto"
                                    src="images/timelineUtama.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                    {selectedIndex == 3 && (
                        <div className="py-10">
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-bl-[30px] border-r-2 border-l-2 border-t-2 border-[#EB9928] rounded-br-[30px] pt-20 md:px-32">
                                <h1 className="font-semibold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                                    Early Talk 2
                                </h1>
                                <div className="flex flex-col md:flex-row mb-20">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className=""
                                            src="images/orangHitam.svg"
                                            alt=""
                                        />
                                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Coming Soon
                                        </p>
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            xxx
                                        </p>
                                    </div>
                                    <div className="items-center self-center md:ml-20 px-4 max-w-2xl">
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            How to Conquer the Economic Industry
                                            to Become a Thought Leader
                                        </p>{" "}
                                        <p className="border-l-2 border-[#EB9928] py-3 pl-4 mb-3">
                                            Lorem Ipsum{" "}
                                        </p>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Nama Speaker
                                        </p>
                                        <p className="mb-3">xxx</p>
                                        <p className="italic mb-3">
                                            “Leadership is about taking
                                            responsibility, not making excuses.” <span className="text-[#EB9928]">- Mitt Romney</span>
                                            
                                        </p>
                                        <p className="mb-3">
                                            By developing these qualities, we
                                            can enhance our resilience and
                                            better confront the challenges that
                                            arise in the creative economic
                                            industry and beyond. Our speakers
                                            are here to provide guidance and
                                            support in cultivating these
                                            personal traits, as well as to share
                                            their own experiences and insights
                                            from their successful careers.
                                            Through their mentorship and
                                            expertise, we can gain the knowledge
                                            and skills necessary to thrive in
                                            the dynamic and competitive modern
                                            work environment. We believe that by
                                            prioritizing personal growth and
                                            development, we can create a
                                            brighter future for ourselves and
                                            for society as a whole
                                        </p>
                                        <p className="font-semibold text-xl">
                                            JUNY <span className="text-[#EB9928]"> 14th</span>, 2023
                                        </p>
                                        <Link href="/registration-EarlyTalk2">
                                            <div className="bg-opacity-50 bg-gradient-to-r from-[#EB9928] my-3 to-[#FFCE2E] text-sm text-white text-center italic rounded-full w-36 py-2">
                                                <p>REGISTER NOW</p>
                                            </div>
                                        </Link>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            FREE!
                                        </p>
                                    </div>
                                </div>

                                <img
                                    src="images/line.svg"
                                    className=""
                                    alt=""
                                />
                            </div>
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] py-20 border-r-2 border-l-2 border-b-2 border-[#EB9928]">
                                <img
                                    className="container w-96 sm:w-[1200px] flex justify-center mx-auto"
                                    src="images/timelineUtama.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EventsSemnas;
