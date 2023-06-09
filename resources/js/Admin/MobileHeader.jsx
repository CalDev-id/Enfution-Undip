import { useState } from "react";

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="w-full bg-black py-5 px-6 sm:hidden">
                <div className="flex items-center justify-between">
                    <a
                        href=""
                        className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                    >
                        Admin
                    </a>
                    <button
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
                    </button>
                </div>

                {/* <!-- Dropdown Nav --> */}
                <nav className={isOpen ? "flex flex-col pt-4" : "hidden"}>
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
                </nav>
            </header>
        </>
    );
};

export default MobileHeader;
