import { Link, router } from "@inertiajs/react";
import numeral from "numeral";
import { useEffect, useState } from "react";

const PaymentConfirmation = (props) => {
    const [account_name, setName] = useState("");
    const [account_number, setNumber] = useState("");
    const [bank_name, setBank] = useState("");
    const [payment_slip, setSlip] = useState("");
    // const [amount, setAmount] = useState(props.total);
    // const [bayar_via, setVia] = useState("");
    const errors = props.errors;
    console.log(props);
    const data = {
        account_name,
        account_number,
        bank_name,
        payment_slip,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();

        for (const d in data) {
            fd.append(`${d}`, data[d]);
        }
        router.post("/payment-confirmation-semnas", fd);
    };

    useEffect(() => {
        if (Object.keys(errors).length == 0) {
            // resetForm();
        } else {
            console.log(errors);
        }
    }, [errors]);

    return (
        <div className="w-full bg-[#FFF9EE] min-h-screen pb-20">
            <div className="container flex-col flex justify-center mx-auto">
                <h1 className="text-center font-semibold text-5xl mb-10 pt-20">
                    Payment Confirmation
                </h1>
                <p className="text-center font-semibold text-xl mb-3">
                    You have to pay:
                </p>

                <p className="bg-[#1E2E40] text-white text-center py-3 text-xl font-semibold mb-5 mx-10">
                    IDR {numeral(props.total).format("0,0.00")}
                </p>
                <div className="flex justify-center md:px-10 lg:px-20">
                    <div className="border-l border-t border-b border-black h-28 sm:h-40 w-80 self-center">
                        <img
                            src="images/bank/dana.svg"
                            className="w-24 sm:w-28 flex mx-auto pt-7 sm:pt-10"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Maya Simorangkir
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            082273259386
                        </p>
                    </div>
                    <div className="border border-black h-28 sm:h-40 w-80 ">
                        <img
                            src="images/bank/bni.svg"
                            className="w-24 sm:w-28 flex mx-auto pt-10"
                        />
                        <p className="text-[#EB9928] text-center text-sm sm:text-base">
                            Maya Simorangkir
                        </p>
                        <p className="text-[#1E2E40] text-center text-sm sm:text-base">
                            1349522707
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold text-center text-lg">
                                Name <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                                value={props.name}
                                disabled
                            />
                        </div>
                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold text-center text-lg">
                                Bank Name{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                                onChange={(bank) => setBank(bank.target.value)}
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
                                onChange={(acc_name) =>
                                    setName(acc_name.target.value)
                                }
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
                                onChange={(acc_number) =>
                                    setNumber(acc_number.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <p className="font-semibold text-lg">
                            Payment Proof
                            <span className="text-[#EB9928]">*</span>
                        </p>
                        <p className="text-[#EB9928] font-semibold mb-3">
                            Payment Slip
                        </p>
                        <input
                            type="file"
                            className="file-input file-input-bordered sm:w-1/2"
                            onChange={(e) => {
                                setSlip(e.target.files[0]);
                            }}
                        />
                    </div>

                    <div className="flex justify-center mt-20">
                        <Link href="/">
                            <button className="btn btn-outline w-28 sm:w-48 rounded-none mx-10">
                                Back
                            </button>
                        </Link>
                        <button className="btn w-28 sm:w-48 rounded-none mx-10 bg-[#1E2E40]">
                            Submit
                        </button>
                        {/* <Link href="/">
                        </Link> */}
                    </div>
                </form>
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
