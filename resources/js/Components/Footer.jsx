const Footer = () => {
    return (
        <>
            <div className="bg-[#FFCE2E] py-10">
                <div className="bg-[#FFF9EE]">
                    <div className="container">
                        <div className="flex justify-between">
                            <div>
                                <img src="images/logoNav.png" alt="" />
                                <p className="text-[#EB9928] font-semibold text-lg">
                                    Contact Us
                                </p>
                                <p>info.DBCC2023@gmail.com</p>
                            </div>
                            <div>
                                <ul>
                                    <li className="flex items-center">
                                        <img
                                            src="images/igLogo.svg"
                                            className="w-10 mr-3"
                                            alt=""
                                        />
                                        <p>enfutionundip</p>
                                    </li>
                                    <li className="flex items-center">
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
                                    <li className="flex items-center">
                                        <img
                                            src="images/lineLogo.svg"
                                            className="w-10 mr-3"
                                            alt=""
                                        />
                                        <p>@enfutionundip</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-[#EB9928] font-semibold text-lg">
                                    Subscribe to Our the <span className="text-[#FFCE2E]">15th</span>  Enfution
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
