import { useState } from "react";

const Sidebar = ({ index }) => {
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
                        href={route("dashboard")}
                        className={
                            index == 1
                                ? "flex items-center bg-slate-700 text-white py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-sticky-note mr-3"></i>
                        Dashboard
                    </a>
                    <a
                        href={route("dashboard-semnas")}
                        className={
                            index == 2
                                ? "flex items-center bg-slate-700 text-white py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-sticky-note mr-3"></i>
                        National Seminar
                    </a>
                    <a
                        href={route("dashboard")}
                        className={
                            index == 3
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
