import { Link } from "@inertiajs/react";

const Hero = ({ active }) => {
    return (
        <section>
            {active === "home" && (
                <div
                    className="hero min-h-screen bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: `url("images/heroHome.png")`,
                    }}
                >
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-3xl">
                            <div className="sm:flex sm:mb-10 mb-5">
                                <img
                                    src="images/LogoEnfuHome.svg"
                                    className="flex mx-auto mb-5 sm:w-52 w-32 self-center"
                                    alt=""
                                />
                                <div>
                                    <p className="sm:mb-5 self-center font-bold relative sm:text-6xl text-3xl">
                                        The{" "}
                                        <span className="text-[#FFCE2E]">
                                            15
                                            <span className="sm:text-lg text-base absolute top-0 sm:mr-5">
                                                th{" "}
                                            </span>{" "}
                                        </span>{" "}
                                        <span className="pl-3 sm:pl-2"> Enfution</span>
                                    </p>
                                    <p className="font-normal text-[#FFF9EE] sm:text-xl text-sm">
                                        Optimizing young generation creativity
                                        <br />
                                        to Encounter Economic Development
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center text-base sm:text-xl">
                                <Link href="/DBCC">BUSINESS CASE</Link>
                                <p className="mx-2">|</p>
                                <Link href="/national-seminar">NATIONAL SEMINAR</Link>
                            </div>
                        </div>
                    </div>
                    <img
                        className="md:hidden absolute -bottom-3 2xl:-bottom-36 xl:-bottom-12"
                        src="images/wavesHero.png"
                        alt=""
                    />
                    <img
                        className="hidden md:block absolute bottom-0  xl:bottom-0"
                        src="images/wavesHero2.png"
                        alt=""
                    />
                </div>
            )}
            {active === "dbcc" && (
                <div
                    className="hero min-h-screen bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: `url("images/hero.png")`,
                    }}
                >
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <img
                                src="images/dbccLogo.png"
                                className="flex mx-auto mb-5 sm:w-40 w-32"
                                alt=""
                            />
                            {/* <h1 className="mb-5 text-5xl font-bold">
                    Hello there
                </h1> */}
                            <p className="mb-5">
                                The Role of Green Business in
                                <br />
                                Achieving a Sustainable Economy
                            </p>
                            <div className="flex justify-center sm:text-base text-sm">
                                <Link href="/registration-coaching-session">COACHING SESSION</Link>
                                <p className="mx-2">|</p>
                                <Link href="/registration-dbcc">DBCC</Link>
                            </div>
                        </div>
                    </div>
                    <img
                        className="md:hidden absolute -bottom-3 2xl:-bottom-36 xl:-bottom-12"
                        src="images/wavesHero.png"
                        alt=""
                    />
                    <img
                        className="hidden md:block absolute bottom-0  xl:bottom-0"
                        src="images/wavesHero2.png"
                        alt=""
                    />
                </div>
            )}
            {active === "national" && (
                <div
                    className="hero min-h-screen bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: `url("images/bannerSemnas.svg")`,
                    }}
                >
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <img
                                src="images/LogoSemnas.svg"
                                className="flex mx-auto mb-5 sm:w-[600px] w-40"
                                alt=""
                            />
                            <p className="mb-5">
                                Developing Creative Human Resources To
                                <br />
                                Support Creative Economy
                            </p>
                            <div className="flex justify-center sm:text-base text-xs">
                                <Link href="/registration-EarlyTalk1">EARLY TALK 1</Link>
                                <p className="mx-2">|</p>
                                <Link href="/registration-EarlyTalk2">EARLY TALK 2</Link>
                                <p className="mx-2">|</p>
                                <Link href="/registration-national-seminar">NATIONAL SEMINAR</Link>
                            </div>
                        </div>
                    </div>
                    <img
                        className="md:hidden absolute -bottom-3 2xl:-bottom-36 xl:-bottom-12"
                        src="images/wavesHero.png"
                        alt=""
                    />
                    <img
                        className="hidden md:block absolute bottom-0  xl:bottom-0"
                        src="images/wavesHero2.png"
                        alt=""
                    />
                </div>
            )}
        </section>
    );
};

export default Hero;
