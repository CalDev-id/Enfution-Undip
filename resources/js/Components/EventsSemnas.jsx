import { useState } from "react";
import { Link } from "@inertiajs/react";
import TimeLine from "./TimeLine";
import numeral from "numeral";

const EventsSemnas = ({ ticketPrice, timeRegist }) => {
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
                                <div className="flex flex-col md:flex-row mb-5 sm:mb-0">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className=""
                                            src="images/speaker/sandiagauno.svg"
                                            alt=""
                                        />
                                        {/* <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Coming Soon
                                        </p> */}
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
                                        {/* <p className="border-l-2 border-[#EB9928] py-3 pl-4 mb-3">
                                            Coming Soon{" "}
                                        </p> */}
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Sandiaga Uno
                                        </p>
                                        <p className="mb-3 text-slate-500 font-light">
                                            Minister of Tourism & Creative
                                            Economy
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mb-5 sm:mb-0">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0 sm:hidden">
                                        <img
                                            className=""
                                            src="images/speaker/samuel.svg"
                                            alt=""
                                        />
                                        
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            A young and fresh entrepreneur
                                        </p>
                                    </div>
                                    <div className="items-center self-center md:mr-20 px-4">
                                        <h1 className="text-xl font-semibold mb-3">
                                            Leveraging the power of
                                            collaboration in creative industries
                                        </h1>
                                        {/* <p className="border-l-2 border-[#EB9928] py-3 pl-4 mb-3">
                                            Coming Soon{" "}
                                        </p> */}
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Samuel Christ
                                        </p>

                                        <p className="mb-3 text-slate-500 font-light">
                                            {" "}
                                            Co-founder of Seefluencer
                                        </p>
                                    </div>
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0 hidden sm:block">
                                        <img
                                            className=""
                                            src="images/speaker/samuel.svg"
                                            alt=""
                                        />
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            A young and fresh entrepreneur
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className=""
                                            src="images/speaker/batara.svg"
                                            alt=""
                                        />
                                        {/* <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Coming Soon
                                        </p> */}
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            A senior entrepreneur
                                        </p>
                                    </div>
                                    <div className="items-center self-center md:ml-20 px-4">
                                        <h1 className="text-xl font-semibold mb-3">
                                            Embracing Innovation: Adapting to
                                            Changing Markets and Staying Ahead
                                            of the Curve
                                        </h1>
                                        {/* <p className="border-l-2 border-[#EB9928] py-3 pl-4 mb-3">
                                            Coming Soon{" "}
                                        </p> */}
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Batara Sianturi
                                        </p>
                                        <p className="mb-3 text-slate-500 font-light">
                                            {" "}
                                            CEO of Citibank, N.A., Indonesia
                                        </p>
                                    </div>
                                </div>
                                <h1 className="font-semibold py-10 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-xl">
                                    Register Below
                                </h1>
                                <div className="flex justify-center mb-20 flex-wrap">
                                    <Link
                                        href={route(
                                            "national-seminar.form-summit"
                                        )}
                                    >
                                        <div
                                            className={`hover:shadow-xl ${
                                                timeRegist == "NORMAL"
                                                    ? ""
                                                    : "opacity-50"
                                            } bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-xl text-white text-center font-semibold rounded-lg w-60 py-4 mx-5`}
                                        >
                                            <p>Normal Registration</p>
                                            <p>
                                                {" "}
                                                - SOLD OUT{" "}
                                                {`${
                                                    timeRegist == "NORMAL"
                                                        ? numeral(
                                                              ticketPrice
                                                          ).format("0,0")
                                                        : "-"
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
                                <div className="">
                                    <TimeLine name={"semnas"} />
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedIndex == 2 && (
                        <div className="py-10">
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-bl-[30px] border-r-2 border-l-2 border-t-2 border-[#EB9928] rounded-br-[30px] pt-20 xl:px-20">
                                <h1 className="font-bold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                                    Early Talk 1
                                </h1>
                                <div className="flex flex-col xl:flex-row mb-20">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className=""
                                            src="images/speaker/vina.svg"
                                            alt=""
                                        />
                                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Vina Muliana
                                        </p>
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            BUMN Career Professional & Education
                                            Content Creator
                                        </p>
                                    </div>
                                    <div className="items-center self-center md:ml-16 px-4 max-w-2xl">
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Build Critical Thinking to Improve
                                            Economy Creative
                                        </p>{" "}
                                        <p className="border-l-4 italic border-[#EB9928] py-1 my-2 pl-4 mb-3">
                                            Kesuksesan itu ketika kamu bisa
                                            menjadi inspirasi dan berkontribusi
                                            untuk kemajuan diri dan orang-orang
                                            sekitar.
                                        </p>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Vina Muliana
                                        </p>
                                        <p className="mb-3">
                                            BUMN Career Professional & Education
                                            Content Creator
                                        </p>
                                        <p className="italic mb-3">
                                            “Critical thinking is the ability to
                                            think for yourself and to reliably
                                            and responsibly make the decisions
                                            that affect your life.”{" "}
                                            <span className="text-[#EB9928]">
                                                {" "}
                                                - Diane Halpern
                                            </span>
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
                                            JULY{" "}
                                            <span className="text-[#EB9928]">
                                                {" "}
                                                15th
                                            </span>
                                            , 2023
                                        </p>
                                        <Link href="/registration-EarlyTalk1">
                                            <div className="hover:shadow-xl bg-opacity-50 bg-gradient-to-r from-[#EB9928] my-3 to-[#FFCE2E] text-sm text-white text-center italic rounded-full w-36 py-2">
                                                <p>REGISTER NOW</p>
                                            </div>
                                        </Link>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            15K
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
                                <div className="">
                                    <TimeLine name={"et1"} />
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedIndex == 3 && (
                        <div className="py-10">
                            <div className="bg-[#FFF9EE] rounded-[50px] rounded-bl-[30px] border-r-2 border-l-2 border-t-2 border-[#EB9928] rounded-br-[30px] pt-20 md:px-20">
                                <h1 className="font-bold mb-5 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                                    Early Talk 2
                                </h1>
                                <div className="flex flex-col md:flex-row mb-20">
                                    <div className="w-60 md:w-72 items-center self-center mb-5 md:mb-0">
                                        <img
                                            className="xl:w-3/4 justify-center mx-auto"
                                            src="images/speaker/BESTARI.png"
                                            alt=""
                                        />
                                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-lg text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                            Bestari Bellaverina
                                        </p>
                                        <p className="text-[#EB9928] md:text-base text-sm text-center">
                                            Business Intelligence, LINE
                                            Indonesia
                                        </p>
                                    </div>
                                    <div className="items-center self-center md:ml-20 px-4 max-w-2xl">
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            How to Conquer the Economic Industry
                                            to Become a Thought Leader
                                        </p>{" "}
                                        <p className="border-l-4 border-[#EB9928] my-1 pl-4 mb-3 italic">
                                            "Always Data-Driven is a value that
                                            I always apply at work. To make
                                            decisions in business, we must be
                                            able to understand many different
                                            aspects of our performance,
                                            including the data. It's quite
                                            challenging, but also fun!"
                                        </p>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            Bestari Bellaverina
                                        </p>
                                        <p className="mb-3">
                                            Business Intelligence, LINE
                                            Indonesia
                                        </p>
                                        <p className="italic mb-3">
                                            “Leadership is about taking
                                            responsibility, not making excuses.”{" "}
                                            <span className="text-[#EB9928]">
                                                - Mitt Romney
                                            </span>
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
                                            SEPTEMBER{" "}
                                            <span className="text-[#EB9928]">
                                                {" "}
                                                17th
                                            </span>
                                            , 2023
                                        </p>
                                        <Link href="/registration-EarlyTalk2">
                                            <div className="hover:shadow-xl bg-opacity-50 bg-gradient-to-r from-[#EB9928] my-3 to-[#FFCE2E] text-sm text-white text-center italic rounded-full w-36 py-2">
                                                <p>REGISTER NOW</p>
                                            </div>
                                        </Link>
                                        <p className="text-[#EB9928] md:text-xl text-lg font-semibold">
                                            15K
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
                                <div className="">
                                    <TimeLine name={"et2"} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EventsSemnas;
