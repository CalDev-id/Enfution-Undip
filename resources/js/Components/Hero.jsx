const Hero = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
            backgroundImage: `url("images/hero.png")`,
        }}
    >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <img src="images/dbccLogo.png" className="flex mx-auto mb-3 sm:w-40 w-32" alt="" />
                {/* <h1 className="mb-5 text-5xl font-bold">
                    Hello there
                </h1> */}
                <p className="mb-5">
                The Role of Green Business in<br />Achieving a Sustainable Economy
                </p>
                <div className="flex sm:text-base">
                    <a href="#">COACHING CLINIC</a>
                    <p className="mx-2">|</p>
                    <a href="#">COACHING SESSION</a>
                    <p className="mx-2">|</p>
                    <a href="#">DBCC</a>
                </div>
            </div>
            
        </div>
        <img className="absolute bottom-0 2xl:-bottom-36 xl:-bottom-20" src="images/wavesHero.png" alt="" />
    </div>
    );
};

export default Hero;
