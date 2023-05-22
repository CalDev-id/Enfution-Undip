const Footer = () => {
    return (
        <>
            <div className="bg-[#FFCE2E] py-10">
                <div className="bg-[#FFF9EE]">
                    <div className="container">
                        <div className="lg:flex justify-between items-center py-10">
                            <div className="sm:flex justify-evenly items-center">
                                <div className="mr-20">
                                    <img
                                        className="w-36"
                                        src="images/LogoEnfu.svg"
                                        alt=""
                                    />
                                    <p className="text-[#EB9928] font-semibold text-lg">
                                        Contact Us
                                    </p>
                                    <p>info.DBCC2023@gmail.com</p>
                                </div>
                                <div>
                                    <ul>
                                        <li className="flex items-center mb-3">
                                            <img
                                                src="images/igLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <p>enfutionundip</p>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <img
                                                src="images/ttLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <p>@enfutionundip</p>
                                        </li>
                                        <li className="flex items-center">
                                            <img
                                                src="images/linkLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <p>Enfution Undip</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p className="text-[#EB9928] text-right font-semibold text-lg">
                                    Subscribe to
                                    <br />
                                    Our the
                                    <span className="text-[#FFCE2E]">
                                        15th
                                    </span>{" "}
                                    Enfution
                                </p>
                                <div className="relative my-2">
                                    <input
                                        type="text"
                                        // value={post}
                                        placeholder="Email Address"
                                        // onChange={(post) =>
                                        //     setPost(post.target.value)
                                        // }
                                        className="input w-full border-[#FFCE2E] border-2 focus:ring-0 focus:outline-none rounded-3xl pl-14 text-sm py-5 pr-32"
                                    />
                                    <button
                                        className="bg-[#FFCE2E] absolute z-10 right-0 bottom-0 text-white rounded-full px-6 py-3 font-medium"
                                        type="button"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-right">
                                By clicking subscribe, you agree <br />
                                to receive email newsletter and calendar
                                notifications.
                            </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
