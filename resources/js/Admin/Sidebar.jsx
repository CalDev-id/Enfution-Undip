import { useState } from "react";

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState("");
    return (
        <>
            <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl bg-black">
                <div className="p-6">
                    <a
                        href="index.html"
                        className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                    >
                        Enfution
                    </a>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <a
                        href=""
                        onClick={(e) => {
                            setSelectedIndex(1);
                        }}
                        className={
                            selectedIndex == 1
                                ? "flex items-center bg-slate-700 text-white py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item dashboard"
                        }
                    >
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Dashboard
                    </a>
                    <a
                        href=""
                        onClick={(e) => {
                            setSelectedIndex(2);
                        }}
                        className={
                            selectedIndex == 2
                                ? "flex items-center bg-slate-700 text-white py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-sticky-note mr-3"></i>
                        National Seminar
                    </a>
                    <a
                        href=""
                        onClick={(e) => {
                            setSelectedIndex(3);
                        }}
                        className={
                            selectedIndex == 3
                                ? "flex items-center bg-slate-700 text-white py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-table mr-3"></i>
                        DBCC
                    </a>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
