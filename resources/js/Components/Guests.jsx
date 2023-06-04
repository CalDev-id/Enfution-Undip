const Guests = () => {
    return (
        <>
            <div className="text-center mb-20">
                <h1 className="font-semibold mb-10 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                    Something Bigger is Coming This Year!
                </h1>
                <div className="flex container justify-evenly">
                    <div>
                        <img
                            className="md:pt-32 md:w-96"
                            src="images/comingSoon.svg"
                            alt=""
                        />
                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-sm text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                            Coming Soon
                        </p>
                    </div>
                    <div>
                        <img
                            className="md:w-96"
                            src="images/comingSoon.svg"
                            alt=""
                        />
                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-sm text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                            Coming Soon
                        </p>
                    </div>
                    <div>
                        <img
                            className="md:pt-32 md:w-96"
                            src="images/comingSoon.svg"
                            alt=""
                        />
                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-sm text-white px-2 py-3 rounded-bl-3xl rounded-tr-3xl text-center">
                            Coming Soon
                        </p>
                    </div>
                </div>
            </div>

            <div className="container text-center mb-20">
                <h1 className="font-semibold text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl">
                    Previous Speakers & Guests of Honour
                </h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2">
                    <div className="w-fit h-fit mr-2 md:mr-0">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[35px] md:translate-y-[50px] w-72 md:h-72"
                            src={`images/speaker/wishnutama.svg`}
                            alt=""
                        />
                        <p className="z-10 relative md:text-lg font-semibold bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-5 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Wishnutama
                        </p>
                        <p className="text-[#EB9928] italic hidden md:block md:text-lg text-sm">
                            Ex Minister of Tourism & <br /> Creative Economy
                        </p>
                        <p className="text-[#EB9928] italic md:hidden md:text-lg text-sm">
                            Ex Minister of Tourism & Creative Economy
                        </p>
                    </div>
                    <div className="w-fit ml-2 md:ml-0">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[30px] md:translate-y-[50px] w-72 md:h-72"
                            src={`images/speaker/sandiaga.svg`}
                            alt=""
                        />
                        <p className="relative md:text-lg font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-3 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Sandiaga Uno
                        </p>
                        <p className="text-[#EB9928] md:text-lg italic text-sm ">
                            Minister of Tourism & Creative Economy
                        </p>
                    </div>
                    </div>
                </div>

                {/* kedua */}
                <div className="grid grid-cols-2 xl:grid-cols-4">
                    <div className="w-fit flex-col justify-center md:mx-auto mr-2">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[35px] md:translate-y-[45px] w-60 md:h-60"
                            src={`images/speaker/arief.svg`}
                            alt=""
                        />
                        <p className="z-10 relative md:text-lg font-semibold bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-1 md:px-5 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Arief Muhammad
                        </p>
                        <p className="text-[#EB9928] italic md:text-lg text-sm">
                        Youtuber &<br /> Creativepreneur
                        </p>
                    </div>
                    <div className="w-fit flex-col justify-center md:mx-auto ml-2">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[30px] w-60 md:h-60"
                            src={`images/speaker/ernest.svg`}
                            alt=""
                        />
                        <p className="relative md:text-lg font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-2 md:px-5 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Ernest Prakasa
                        </p>
                        <p className="text-[#EB9928] md:text-lg text-sm italic">
                        Youtuber & Actor
                        </p>
                    </div>
                    <div className="w-fit flex-col justify-center md:mx-auto mr-2">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[45px] w-60 md:h-60"
                            src={`images/speaker/tasya.svg`}
                            alt=""
                        />
                        <p className="relative md:text-lg font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-3 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Tasya Farasya
                        </p>
                        <p className="text-[#EB9928] md:text-lg text-sm italic">
                        Youtuber &
Beauty Influencer
                        </p>
                    </div>
                    <div className="w-fit flex-col justify-center md:mx-auto pt-1 mr-2">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[35px] w-60 md:h-60"
                            src={`images/speaker/jovial.svg`}
                            alt=""
                        />
                        <p className="relative md:text-lg font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-2 md:px-5 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Jovial Da Lopez
                        </p>
                        <p className="text-[#EB9928] md:text-base text-sm italic">
                        Youtuber & Actor
                        </p>
                    </div>
                </div>

                
                {/* ketiga */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                    <div className=" md:w-48 flex-col justify-center md:mx-auto mr-2">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[35px] md:translate-y-[45px] md:h-48"
                            src={`images/speaker/hermawan.svg`}
                            alt=""
                        />
                        <p className="z-10 relative md:text-base font-semibold bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-1 md:px-2 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Hermawan K
                        </p>
                        <p className="text-[#EB9928] md:text-base text-sm italic">
                        Founder & Chairman
of ACSB
                        </p>
                    </div>
                    <div className="md:w-48 flex-col justify-center md:mx-auto ml-2">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[30px] md:h-48"
                            src={`images/speaker/keenan.svg`}
                            alt=""
                        />
                        <p className="relative md:text-base font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-2 md:px-2 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Keenan Pearce
                        </p>
                        <p className="text-[#EB9928] md:text-base text-sm italic">
                            Owner of Euphoria Project
                        </p>
                    </div>
                    <div className="md:w-48 flex-col justify-center md:mx-auto mr-2">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[45px] md:h-48"
                            src={`images/speaker/chandra.svg`}
                            alt=""
                        />
                        <p className="relative md:text-base font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-2 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Chandra Liow
                        </p>
                        <p className="text-[#EB9928] md:text-base text-sm italic">
                            Youtuber & Actor
                        </p>
                    </div>
                    <div className="min-w-[160px] md:w-48 flex-col justify-center md:mx-auto pt-1 mr-2">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[35px] md:h-48"
                            src={`images/speaker/ge.svg`}
                            alt=""
                        />
                        <p className="relative md:text-base font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-2 md:px-2 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Ge Pamungkas
                        </p>
                        <p className="text-[#EB9928] md:text-base text-sm italic">
                            Youuber & Actor
                        </p>
                    </div>
                    <div className="flex-col justify-center md:mx-auto pt-1 mr-2 md:w-48">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[35px] md:h-48"
                            src={`images/speaker/nadhira.svg`}
                            alt=""
                        />
                        <p className="relative md:text-base font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-2 md:px-2 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            Nadhira N
                        </p>
                        <p className="text-[#EB9928] md:text-base text-sm italic">
                            CMO of Ayoblajar
                        </p>
                    </div>
                    <div className="min-w-[155px] flex-col justify-center md:mx-auto pt-1 mr-2 md:w-48">
                        <img
                            className="flex justify-center mx-auto transform translate-y-[35px] md:h-48"
                            src={`images/speaker/sadad.svg`}
                            alt=""
                        />
                        <p className="relative md:text-base font-semibold z-10 bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-base text-white px-2 md:px-2 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            M Sadad
                        </p>
                        <p className="text-[#EB9928] md:text-base text-sm italic">
                            CEO & Founder of Erigo
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Guests;
