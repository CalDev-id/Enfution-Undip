import { useState } from "react";

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="w-full bg-black py-5 px-6 sm:hidden flex justify-between">
                <div className="navbar-end w-fit">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a
                                    href={route("dashboard")}
                                    className="active:bg-dark active:text-white"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("dashboard-semnas")}
                                    className="active:bg-dark active:text-white"
                                >
                                    National Seminar
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("dashboard")}
                                    className="active:bg-dark active:text-white"
                                >
                                    DBCC
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <a
                        href={route("home")}
                        className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                    >
                        Enfution
                    </a>

                    {/* <button
                        className={
                            isOpen
                                ? "hidden"
                                : "text-white text-3xl focus:outline-none"
                        }
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        open
                    </button>
                    <button
                        className={
                            isOpen
                                ? "text-white text-3xl focus:outline-none"
                                : "hidden"
                        }
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        close
                    </button> */}
                </div>

                {/* <!-- Dropdown Nav --> */}

                {/* <nav className={isOpen ? "flex flex-col pt-4" : "hidden"}>
                    <a
                        href=""
                        className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                    >
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Dashboard
                    </a>
                    <a
                        href=""
                        className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
                    >
                        <i className="fas fa-sticky-note mr-3"></i>
                        Blank Page
                    </a>
                    <a
                        href=""
                        className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
                    >
                        <i className="fas fa-table mr-3"></i>
                        Tables
                    </a>
                    <form action={route("logout")} method="post">
                        <button
                            type="submit"
                            className="relative btn text-white"
                        >
                            Logout
                        </button>
                    </form>
                </nav> */}
            </header>
        </>
    );
};

export default MobileHeader;
