import Guest from "@/Layouts/GuestLayout";
import Bulat from "./Bulat";
import Testi from "./Testi";
import Guests from "./Guests";

const AboutUs = ({ active }) => {
    return (
        <div>
            {active === "home" && (
                <div className="w-full bg-[#FFF9EE] mb-32 mt-5 sm:mt-0">
                    <div className="container text-center mb-10">
                        <h1 className="font-semibold mb-3 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                            About Us
                        </h1>
                        <div className="mb-10 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                        <div className="flex justify-center">
                            <p className="text-[#1E2E40] xl:max-w-3xl">
                                <span className="font-semibold text-[#EB9928] text-lg">
                                    Enfution{"  "}
                                </span>
                                is an annual event that held by Management
                                Student Association, Diponegoro University,
                                which consist of Diponegoro Business Case
                                Competition and National Seminar. Enfution
                                desire to help all parties to be confident in
                                maximizing their skills and enhance the future.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center mb-10">
                        <div className="md:w-96 text-center w-80">
                            <img
                                className=""
                                src="images/speaker/ProfSuhar.svg"
                                alt=""
                            />
                            <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-xl text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                                Prof. Dr. Suharnomo, S.E., M.Si
                            </p>
                            <p className="font-bold text-[#EB9928] text-xl">
                                Dean of Faculty of
                                <br />
                                Economics and Business
                            </p>
                            <p className="text-[#EB9928]">
                                Diponegoro University
                            </p>
                        </div>
                    </div>

                    <div className="container text-center mb-10">
                        <img
                            src="images/kutip.png"
                            alt=""
                            className="flex justify-center mx-auto"
                        />
                        <p className="md:max-w-6xl text-center flex mx-auto my-8">
                            The 15th Enfution is the biggest event held by MSA
                            FEB Undip which consists of Diponegoro Business Case
                            Competition (DBCC) and National Seminar. Enfution
                            was established with the aim of enhancing students’
                            knowledge, skills, critical thinking abilities, and
                            to improve the overall quality of their education.
                            Over the years, Enfution has consistently strived
                            for excellence through ongoing development and
                            improvement. With each passing year, Enfution has
                            continued to make notable improvements, as evidenced
                            by the growing number of participants, the high
                            caliber of guest speakers, the expansion of event
                            sections, and the increasing media coverage. With
                            This year’s theme, “Optimizing Young Generation
                            Creativity to Encounter Economic Development”, The
                            15th Enfution provides participants with the
                            opportunities to explore their interests, develop
                            their talents, and improve their skills in various
                            areas. By investing in the education and training of
                            our youth, The 15th Enfution can help them unleash
                            their full potential and contribute to the economic
                            growth and development of our nation.
                        </p>
                        <img
                            src="images/kutip2.png"
                            alt=""
                            className="flex justify-center mx-auto"
                        />
                    </div>

                    <p className="font-semibold text-center mb-10">Now its your turn to take the chance, <br />are you ready for this?</p>

                    <img src="images/LogoGabungan.svg" className="flex mx-auto sm:max-w-xl my-20 max-w-xs" alt="" />


                </div>
            )}
            {active === "dbcc" && (
                <div className="w-full bg-[#FFF9EE] mb-10 mt-5 sm:mt-0">
                    <div className="container text-center mb-10">
                        <h1 className="font-semibold mb-3 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                            About Us
                        </h1>
                        <div className="mb-10 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                        <p className="text-[#1E2E40] xl:px-52">
                            <span className="font-semibold text-[#EB9928] text-lg">
                                Diponegoro Business Case Competition (DBCC){" "}
                            </span>
                            is a competition held annually as part of ENFUTION.
                            This program is an international-scale business case
                            competition aimed at undergraduate students from all
                            universities in Indonesia and internationally. Each
                            team can present their ideas relevant to the
                            company’s business conditions and the theme we have
                            determined.
                        </p>
                    </div>

                    <div className="container text-center mb-10">
                        <h1 className="font-semibold mb-3 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-2xl xl:mt-10 2xl:mt-20">
                            Our Theme
                        </h1>
                        <div className="mb-10 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                        <p className="text-[#1E2E40] xl:px-32">
                            This year's theme is{" "}
                            <span className="font-semibold text-[#EB9928]">
                                “The Role of Green Business in Achieving
                                Sustainable Economics“
                            </span>
                            . This theme was inspired by the emergence of
                            environmental movements carried out both through
                            actions and campaigns by scientists and activists
                            from various parts of the world. By choosing this
                            theme, it is hoped that participants will learn how
                            to achieve maximum profit while still taking part in
                            protecting the earth for a better future. It is very
                            important for us to learn how to implement the Green
                            Business concept so that the company remains under
                            control and as a result the environment is not
                            polluted from the manufacturing activities carried
                            out by the company. Therefore, this theme is
                            considered appropriate to the condition of the earth
                            with the worsening climate change and environmental
                            pollution. <br /> <br /> This is a great opportunity
                            for you to improve your ability to work together
                            with interesting, creative, and innovative ideas.
                            The Diponegoro Business Case Competition 2023 will
                            give you real experiences and relevant learning on
                            how to solve business problems.
                        </p>
                    </div>

                    <img
                        className="w-96 sm:w-[450px] flex justify-center mx-auto my-16"
                        src="images/about.svg"
                        alt=""
                    />
                    <div className="flex justify-center">
                        <div className="container grid grid-cols-2 sm:grid-cols-4 xl:px-52 my-16">
                            <img
                                className="w-56 flex justify-center mx-auto"
                                src="images/1.svg"
                                alt=""
                            />
                            <img
                                className="w-56 flex justify-center mx-auto"
                                src="images/2.svg"
                                alt=""
                            />
                            <img
                                className="w-56 flex justify-center mx-auto"
                                src="images/3.svg"
                                alt=""
                            />
                            <img
                                className="w-56 flex justify-center mx-auto"
                                src="images/4.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="mb-20">
                        <h1 className="font-semibold mb-3 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                            Timeline
                        </h1>
                        <div className="mb-5 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                        <div className="mx-auto flex">
                            <img
                                className="container w-96 sm:w-[1200px] flex justify-center mx-auto my-10"
                                src="images/timelineUtama.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
            {active === "national" && (
                <div className="w-full bg-[#FFF9EE] mb-10 mt-5 sm:mt-0">
                    <div className="container text-center mb-10">
                        <h1 className="font-semibold mb-3 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                            About Us
                        </h1>
                        <div className="mb-10 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                        <p className="text-[#1E2E40] xl:px-52">
                            <span className="font-semibold text-[#EB9928] text-lg">
                                National Seminar{" "}
                            </span>
                            is an annual event in order to empower students and
                            societies throughout Indonesia. This event will
                            invite national speakers who are competent and
                            expert in their fields which are able to provide
                            motivations and insight. Our main goal is to educate
                            properly and appropriately, especially the youth
                            generation about the importance of improving
                            self-quality in order to have a competitive
                            advantage during this dynamic era. Thus, they can
                            contribute, lead change and development in
                            Indonesia.
                        </p>
                    </div>

                    <div className="container text-center mb-10">
                        <h1 className="font-semibold mb-3 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-2xl xl:mt-10 2xl:mt-20">
                            Our Theme
                        </h1>
                        <div className="mb-10 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                        <p className="mb-10 text-[#1E2E40] xl:px-32">
                            In this era of the fourth industrial revolution,
                            many innovations are happening in the fields of
                            technology, information, communication, and others,
                            especially in business. With the development of
                            technology and the demographic bonus that Indonesia
                            will experience in 2045, the quality of human
                            resources is crucial to compete globally. In the
                            field of business, human resources can be improved
                            through the cultivation of creativity to foster new
                            innovation and competitiveness for Indonesian
                            society, including entrepreneurs, professionals, and
                            the government as policy makers.
                        </p>
                        <p className="text-[#1E2E40] xl:px-32 mb-10">
                            This year's National Seminar has the theme of{" "}
                            <span className="font-semibold text-[#EB9928]">
                                “Developing Creative Human Resources to Support
                                Creative Economy“
                            </span>{" "}
                            to increase the creativity of human resources to
                            ignite inspiration for Indonesian youths interested
                            in the business field, particularly in the creative
                            economy and to use creativity as the basis for
                            thinking to accelerate the growth of future human
                            resources.
                        </p>

                        <p className="text-[#1E2E40] xl:px-32">
                            By joining The National Seminar, You have the
                            <span className="font-semibold text-[#EB9928]">
                                opportunity
                            </span>{" "}
                            to listen to business experts and young
                            entrepreneurs who have succeeded, gain insights and
                            knowledge about the strategies and tactics they used
                            to develop their businesses. Not only that, the
                            attendees who come are people who share the same
                            interest, namely in economics and entrepreneurship.
                            The National Seminar can be a place for participants
                            to{" "}
                            <span className="font-semibold text-[#EB9928]">
                                build relationships
                            </span>{" "}
                            with people who share similar interests with you.
                            There will be also a Q&A session so that
                            participants have the opportunity to ask business
                            experts and young entrepreneurs about things that
                            may be of concern or{" "}
                            <span className="font-semibold text-[#EB9928]">
                                interest
                            </span>{" "}
                            to them
                        </p>
                    </div>

                    <img
                        className="w-96 sm:w-[450px] flex justify-center mx-auto my-16"
                        src="images/ourThemeNational.svg"
                        alt=""
                    />

                    <Guests />

                    <div className="mb-20">
                        <h1 className="font-semibold mb-3 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                            Timeline
                        </h1>
                        <div className="mb-5 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>
                        <div className="mx-auto flex">
                            <img
                                className="w-96 sm:w-[1200px] flex justify-center mx-auto my-10"
                                src="images/timelineSemnas.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;
