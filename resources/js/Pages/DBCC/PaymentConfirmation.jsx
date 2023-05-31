import { Link } from "@inertiajs/react";

const PaymentConfirmation = ({ harga }) => {
    return (
        <div className="w-full bg-[#FFF9EE] min-h-screen">
            <div className="container flex-col flex justify-center mx-auto">
                <h1 className="text-center font-semibold text-5xl mb-10 pt-20">
                    Payment Confirmation
                </h1>
                <p className="text-center font-semibold text-xl mb-3">
                    You have to pay:
                </p>

                <p className="bg-[#1E2E40] text-white text-center py-3 text-xl font-semibold mb-5 mx-10">
                    Rp. xxx.xxx,xx
                </p>

                <div className="flex justify-center md:px-10 lg:px-20">
                    <div className="border-l border-t border-b border-black h-28 sm:h-40 w-80 self-center">
                        <img
                            src="images/bank/gopay.svg"
                            className="w-24 sm:w-28 flex mx-auto pt-7 sm:pt-10"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Nandya Salma
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-813-9051-3323
                        </p>
                    </div>
                    <div className="border border-black h-28 sm:h-40 w-80 ">
                        <img
                            src="images/bank/flip.svg"
                            className="w-10 sm:w-14 flex mx-auto pt-5"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Nandya Salma
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-813-9051-3323
                        </p>
                    </div>
                    <div className="border-r border-t border-b border-black h-40 w-80 hidden md:block pt-10">
                        <img
                            src="images/bank/ovo.svg"
                            className="sm:w-28 w-24 flex mx-auto"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Nandya Salma
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-813-9051-3323
                        </p>
                    </div>
                </div>
                <div className="flex justify-center md:px-10 lg:px-20">
                    <div className="border-l border-t border-b border-black h-28 sm:h-40 w-80 self-center">
                        <img
                            src="images/bank/dana.svg"
                            className="w-24 sm:w-28 flex mx-auto pt-7 sm:pt-10"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Nandya Salma
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-813-9051-3323
                        </p>
                    </div>
                    <div className="border border-black h-28 sm:h-40 w-80 ">
                        <img
                            src="images/bank/paypal.svg"
                            className="w-24 sm:w-28 flex mx-auto pt-5"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Nandya Salma
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-813-9051-3323
                        </p>
                    </div>
                </div>
                <div className="flex justify-center md:px-10 lg:px-20 md:hidden">
                    <div className="border border-black h-28 sm:h-40 w-60 ">
                        <img
                            src="images/bank/ovo.svg"
                            className="w-24 sm:w-28 flex mx-auto pt-5"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Nandya Salma
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-813-9051-3323
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    <div className="md:mx-10 mb-5">
                        <p className="font-semibold text-center text-lg">
                            Name / Team Name{" "}
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="mb-5 md:mx-10">
                        <p className="font-semibold text-center text-lg">
                            Bank Name <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="mb-5 md:mx-10">
                        <p className="font-semibold text-center text-lg">
                            Account Name
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="email"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>

                    <div className="mb-5 md:mx-10">
                        <p className="font-semibold text-center text-lg">
                            Account Number{" "}
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                </div>

                <div className="text-center pt-10">
                    <p className="font-semibold text-lg">
                        Payment Proof<span className="text-[#EB9928]">*</span>
                    </p>
                    <p className="text-[#EB9928] font-semibold mb-3">
                        Payment Slip
                    </p>
                    <input
                        type="file"
                        className="file-input file-input-bordered sm:w-1/2"
                    />
                </div>

                <div className="flex justify-center mt-20">
                    <Link href="/">
                        <button className="btn btn-outline w-28 sm:w-48 rounded-none mx-10">
                            Back
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="btn w-28 sm:w-48 rounded-none mx-10 bg-[#1E2E40]">
                            Submit
                        </button>
                    </Link>
                </div>
                <Link href="/">
                    <p className="underline text-center mt-10 font-light">
                        Return to Homepage
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default PaymentConfirmation;
