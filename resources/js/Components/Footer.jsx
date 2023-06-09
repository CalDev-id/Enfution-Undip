import { Link } from "@inertiajs/react";

const Footer = ({active}) => {
    return (
        <>
            <div className="bg-[#FFCE2E] py-10">
                <div className="bg-[#FFF9EE]">
                    <div className="container">
                        <div className="lg:flex justify-between items-center py-10">
                            <div className="sm:flex justify-evenly items-center">
                                <div className="mr-20 mb-5 sm:mb-0">
                                    <img
                                        className="w-36"
                                        src="images/LogoEnfu.svg"
                                        alt=""
                                    />
                                    <p className="text-[#EB9928] font-semibold text-lg">
                                        Contact Us
                                    </p>
                                    <p>{active == "dbcc" && ("info.DBCC2023@gmail.com")}{active == "semnas" && ("enfutionundip.semnas@gmail.com")}{active == "enfu" && ("enfutionthe15@gmail.com")}</p>
                                </div>
                                <div>
                                    <ul>
                                        <li className="flex items-center mb-3">
                                            <img
                                                src="images/igLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <a href="https://www.instagram.com/enfutionundip/" target="_blank">enfutionundip</a>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <img
                                                src="images/ttLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <a href="https://www.tiktok.com/@enfutionundip" target="_blank">@enfutionundip</a>
                                        </li>
                                        <li className="flex items-center">
                                            <img
                                                src="images/linkLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <a href="https://www.linkedin.com/company/enfution/?originalSubdomain=id" target="_blank">Enfution Undip</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p className="text-[#EB9928] text-right font-semibold text-lg">
                                    Subscribe to
                                    <br />
                                    Our
                                    <span className="text-[#FFCE2E]">{" "}
                                    Newsletter
                                    </span>
                                    
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
