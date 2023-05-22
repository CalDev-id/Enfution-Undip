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
                            <div className="flex mb-10">
                                <img
                                    src="images/LogoEnfuHome.svg"
                                    className="flex mx-auto mb-5 sm:w-52 w-32 self-center"
                                    alt=""
                                />
                                <div>
                                    <p className="mb-5 self-center font-semibold text-6xl">
                                        The <span className="text-[#FFCE2E]">15th</span> Enfution
                                    </p>
                                    <p className="font-light text-[#FFF9EE] text-xl">
                                        Optimizing young generation creativity
                                        <br />
                                        to Encounter Economic Develpment
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center sm:text-base text-xl">
                                <a href="#">BUSINESS CASE</a>
                                <p className="mx-2">|</p>
                                <a href="#">NATIONAL SEMINAR</a>
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
                            <div className="flex sm:text-base text-xs">
                                <a href="#">COACHING CLINIC</a>
                                <p className="mx-2">|</p>
                                <a href="#">COACHING SESSION</a>
                                <p className="mx-2">|</p>
                                <a href="#">DBCC</a>
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
                                <a href="#">EARLY TALK 1</a>
                                <p className="mx-2">|</p>
                                <a href="#">EARLY TALK 2</a>
                                <p className="mx-2">|</p>
                                <a href="#">NATIONAL SEMINAR</a>
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
