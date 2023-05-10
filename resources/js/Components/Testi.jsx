const Testi1 = ({ quote, pesan, nama, imageURL, asal, team }) => {
    return (
        <div className="container">
            <div className="sm:flex justify-between items-center">
                <div className="sm:hidden sm:mr-20 flex justify-center items-center mb-5 sm:mb-0">
                    <div className="relative">
                        <div className="z-10">
                            <img
                                className="min-w-[200px]"
                                src={`images/${imageURL}.png`}
                                alt=""
                            />
                            <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-white px-5 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                                {nama}
                            </p>
                        </div>
                        <img
                            className="absolute -left-24 -top-8"
                            src="images/leftWings.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className=" sm:mr-20 ">
                    <p className="text-xl font-bold mb-2">“{quote}“</p>
                    <p className="border-[#EB9928] border-l-4 pl-5 h-fit mb-2">
                        {pesan}
                    </p>
                    <p className="text-[#FFCE2E] text-xl font-semibold">
                        {nama}
                    </p>
                    <p className="text-[#EB9928] font-semibold text-lg">
                        {asal}
                    </p>
                    <p className="text-[#1E2E40] text-sm font-light">{team}</p>
                </div>
                <div className="relative hidden sm:block">
                    <div className="hidden sm:block z-10">
                        <img
                            className="min-w-[200px]"
                            src={`images/${imageURL}.png`}
                            alt=""
                        />
                        <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-white px-5 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                            {nama}
                        </p>
                    </div>
                    <img
                        className="absolute -right-24 top-0"
                        src="images/rightWings.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export const Testi2 = ({ quote, pesan, nama, imageURL, asal, team }) => {
    return (
        <>
            <div className="container">
                <div className="sm:flex justify-between items-center">
                    <div className="sm:mr-20 flex justify-center items-center mb-5 sm:mb-0">
                        <div className="relative">
                            <div>
                                <img
                                    className="min-w-[200px]"
                                    src={`images/${imageURL}.png`}
                                    alt=""
                                />
                                <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-white px-5 py-2 rounded-bl-3xl rounded-tr-3xl text-center">
                                    {nama}
                                </p>
                            </div>
                            <img
                                className="absolute -left-24 -top-8"
                                src="images/leftWings.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-bold mb-2">“{quote}“</p>
                        <p className="border-[#EB9928] border-l-4 pl-5 h-fit mb-2">
                            {pesan}
                        </p>
                        <p className="text-[#FFCE2E] text-xl font-semibold">
                            {nama}
                        </p>
                        <p className="text-[#EB9928] font-semibold text-lg">
                            {asal}
                        </p>
                        <p className="text-[#1E2E40] text-sm font-light">
                            {team}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testi1;
