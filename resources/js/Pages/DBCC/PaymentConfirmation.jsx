import { Link } from "@inertiajs/react";
import { useState } from "react";

const PaymentConfirmation = ({ harga }) => {

    const [modalOpen, setModalOpen] = useState(true);

    return (
        <div className="w-full bg-[#FFF9EE] min-h-screen">
            <div className="container flex-col flex justify-center mx-auto pb-20">
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
                    <div className="border border-black h-28 sm:h-40 w-80 self-center">
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
                            Theo Benaya
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-813-8801-5849
                        </p>
                    </div>
                    <div className="border border-black h-40 w-80 pt-10 hidden sm:block">
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
                    <div className="border border-black h-28 sm:h-40 w-80 self-center">
                        <img
                            src="images/bank/dana.svg"
                            className="w-24 sm:w-28 flex mx-auto pt-7 sm:pt-10"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Nandya Salma
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-812-2757-9209
                        </p>
                    </div>
                    <div className="border border-black h-28 sm:h-40 w-80 ">
                        <img
                            src="images/bank/paypal.svg"
                            className="w-24 sm:w-28 flex mx-auto pt-7"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            @TheoBenaya
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            +62-813-8801-5849
                        </p>
                    </div>
                    <div className="border border-black h-40 w-80 pt-5 hidden sm:block">
                        <img
                            src="images/bank/bri.svg"
                            className="sm:w-28 w-24 flex mx-auto"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Yesica Sihotang
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            033601120482509
                        </p>
                    </div>
                </div>
                <div className="flex justify-center md:px-10 lg:px-20">
                    <div className="border border-black h-28 sm:h-40 w-80 pt-2 sm:hidden">
                        <img
                            src="images/bank/bri.svg"
                            className="sm:w-28 w-24 flex mx-auto"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Yesica Sihotang
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            033601120482509
                        </p>
                    </div>
                    <div className="border border-black h-28 sm:h-40 w-80 pt-5 sm:hidden">
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
                        className="file-input file-input-bordered sm:w-1/2 w-full"
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

            <section>
                <div
                    className={
                        modalOpen
                            ? "fixed z-50 top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-[75%] px-4 py-5"
                            : "hidden"
                    }
                >
                    <div
                        // onClick={()=>{setModalOpen = false}}
                        className="w-full h-full relative sm:scale-75 xl:scale-90 max-w-lg max-h-96 xl:max-w-[984px] xl:max-h-[561px] bg-cover bg-center bg-no-repeat py-8 md:py-20 rounded-3xl xl:rounded-none px-4 sm:px-8 text-center"
                        style={{
                            backgroundImage: `url("images/subscribe.svg")`,
                        }}
                    >
                        <img
                            src="images/btnClose.svg"
                            alt=""
                            onClick={() => {
                                setModalOpen(false);
                            }}
                            className="absolute sm:right-32 sm:top-16 cursor-pointer right-8 top-8"
                        />
                        <h3 className="pb-2 text-2xl font-bold text-dark sm:text-5xl">
                            Thank You!
                        </h3>

                        <p className="mb-5 text-base sm:text-lg  leading-relaxed text-body-color max-w-md flex mx-auto">
                            Your registration has completed. For further notice,
                            will be announced through your email.
                        </p>
                        <p className=" text-sm text-center leading-relaxed text-body-color max-w-sm flex mx-auto justify-center">*we will give the link through email</p>

                        <p className="mb-5 text-sm text-center leading-relaxed text-body-color max-w-sm flex mx-auto">
                            *if within 2x24 hours you don’t receive any email
                            from us, please contact us
                        </p>

                        <button
                            className="underline italic"
                            onClick={() => {
                                setModalOpen(false);
                            }}
                        >
                            Return to homepage
                        </button>
                        <img
                            src="images/logoEnfu.svg"
                            alt=""
                            onClick={() => {
                                setModalOpen(false);
                            }}
                            className="absolute sm:right-32 sm:top-16 cursor-pointer left-5 bottom-5 w-11 sm:hidden"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentConfirmation;
