const Sponsors = () => {
    return (
        <>
            <div className="container sm:flex justify-center my-40">
                <img
                    src="images/speaker/masaru.svg"
                    alt=""
                    className="w-60 mr-10 flex mx-auto sm:mx-0 sm:block mb-5 sm:mb-0 sm:mr-20"
                />
                <div className="self-center">
                    <p className="md:max-w-lg font-bold text-xl mb-3">
                        Creativity comes from looking for the unexpected and
                        stepping outside your own experience.
                    </p>
                    <p className="border-l-4 border-[#EB9928] pl-5 py-2 md:max-w-2xl">
                        We will learn that computers, amazing as they are, still
                        cannot come close to being as effective as human beings.
                        A computer isn't creative on its own because it is
                        programmed to behave in a predictable way. Creativity
                        comes from looking for the unexpected and stepping
                        outside your own experience. Computers simply cannot do
                        that.
                    </p>
                    <p className="text-[#EB9928] font-semibold text-xl">
                        Masaru Ibuka
                    </p>
                    <p className="text-[#1E2E40]">
                        Co-founder and leading engineer of Sony Corporation
                    </p>
                </div>
            </div>

            <img src="images/eventTop.png" alt="" />
            <div className="bg-[#FFCE2E]  ">
                <div className="container">
                    <div className="bg-[#FFF9EE] rounded-tl-[50px] rounded-tr-[50px] h-60 rounded-bl-[30px] rounded-br-[30px] mb-3">
                        <p className="text-[#EB9928] font-bold text-2xl text-center py-5">
                            Sponsored By
                        </p>
                    </div>
                    <div className="flex justify-between flex-col sm:flex-row">
                        <div className="w-full sm:mr-1 mb-3 sm:mb-0 bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] h-60 flex justify-center">
                            <p className="text-[#EB9928] font-bold text-2xl text-center my-5">
                                Media Partner
                            </p>
                        </div>
                        <div className="w-full sm:ml-2 bg-[#FFF9EE] rounded-[50px] rounded-tl-[30px] rounded-tr-[30px] h-60 flex justify-center">
                            <p className="text-[#EB9928] font-bold text-2xl text-center my-5">
                                Community Partner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="images/eventBtm.png" alt="" className="mb-40"/>
        </>
    );
};

export default Sponsors;
