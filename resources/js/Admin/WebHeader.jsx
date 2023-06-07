import { Link } from "@inertiajs/react";
import { useState } from "react";

const WebHeader = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <header className="w-full items-center py-2 px-6 hidden sm:flex shadow-md">
                <div className="w-1/2"></div>
                <div
                    x-data="{ isOpen: false }"
                    className="relative w-1/2 flex justify-end"
                >
                    <Link
                        href={route("logout")}
                        className="relative btn text-white"
                        method="post"
                        as="button"
                    >
                        Logout
                    </Link>
                </div>
            </header>
        </>
    );
};

export default WebHeader;
