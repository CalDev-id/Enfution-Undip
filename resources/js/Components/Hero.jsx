const Hero = ({ active }) => {
    return (
        <section>
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
                            Developing Creative Human Resources To<br />Support Creative Economy
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
