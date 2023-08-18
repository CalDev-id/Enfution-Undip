import { useState } from "react";

const Sidebar = ({ index }) => {
    return (
        <>
            <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl bg-black">
                <div className="p-6">
                    <a
                        href={route("home")}
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
                        National Seminar
                    </a>
                    <a
                        href={route("dashboard-DBCC")}
                        className={
                            index == 3
                                ? "flex items-center bg-slate-700 text-white py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        DBCC
                    </a>
                    <a
                        href={route("dashboard-CS")}
                        className={
                            index == 4
                                ? "flex items-center bg-slate-700 text-white py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        Coaching Session
                    </a>
                    <a
                        href={route("dashboard-subscriber")}
                        className={
                            index == 6
                                ? "flex items-center bg-slate-700 text-white py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        Subscriber
                    </a>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
