import { useState } from "react";

const Navbar = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="w-full fixed z-50 bg-[#FFF9EE]">
            <div className="md:container">
                <div className="navbar justify-between">
                    <div className="">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                    </a>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                        <img
                            className="w-12 cursor-pointer"
                            src="images/logoNav.png"
                            alt=""
                        />
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            <li>
                                <a>Home</a>
                            </li>
                            <li tabIndex={0}>
                                <a className="text-[#EB9928]">
                                    DBCC
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>National Seminar</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="">
                        <button onMouseOver={
                            () => setIsHover(!isHover)
                        }
                        onMouseLeave={() => setIsHover(!isHover)}
                        className="btn text-[#FFCE2E] bg-[#1E2E40] rounded-full text-xs px-7">
                            Register Now
                        </button>
                        <div className={isHover ? "bg-[#FFCE2E] px-5 py-2 absolute z-20 -bottom-24 md:-bottom-16" : "hidden"}>
                            <p className="text-center text-xs">
                                NATIONAL SEMINAR
                            </p>
                            <p className="text-center text-xs">
                                DIPONEGORO BUSINESS<br />CASE COMPETITION
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
