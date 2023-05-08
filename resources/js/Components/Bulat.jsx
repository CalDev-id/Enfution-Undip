import { useState } from "react";

const Bulat = ({ isBawah }) => {
    return (
        <div
            className={
                isBawah
                    ? "flex justify-center items-center xl:pt-10 mb-5 xl:mb-0"
                    : "flex justify-center items-center mb-5 xl:mb-0"
            }
        >
            <div className="relative">
                <img src="images/behind.png" className="sm:w-40 w-32" alt="" />
                <img
                    src="images/front.png"
                    className="absolute top-4 left-5 sm:w-48 w-32"
                    alt=""
                />
                <div className="absolute flex justify-center items-center top-12 left-10">
                    <div className="text-transparent sm:text-2xl bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E]">
                        <p className="font-extrabold">450+</p>
                        <p>Participant</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bulat;
