const Testi = ({ quote, pesan, nama, imageURL, asal, team }) => {
    return (
        <div className="container flex mx-auto justify-center">
            <div className="relative">
                <div className="">
                    <img
                        className="flex justify-center mx-auto"
                        src={`images/${imageURL}.png`}
                        alt=""
                    />
                    <p className="bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-xl text-white px-5 py-4 rounded-bl-3xl rounded-tr-3xl text-center">
                        {nama}
                    </p>
                </div>
                <div className="w-fit text-center">
                    <p className="text-[#EB9928] font-semibold text-lg">
                        {asal}
                    </p>
                    <p className="text-[#1E2E40] text-sm font-light">{team}</p>
                    <img
                        className="flex mx-auto w-14 my-10"
                        src="images/kutip.svg"
                        alt=""
                    />
                    <p className="text-xl font-bold mb-2">“{quote}“</p>

                    <div className="my-5 flex mx-auto w-20 border-b-2 border-[#EB9928]"></div>

                    <p className="h-fit mb-2">{pesan}</p>

                    <img
                        className="flex mx-auto w-14 my-10"
                        src="images/kutip.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>

    );
};

export default Testi;
