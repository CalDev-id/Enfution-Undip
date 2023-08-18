import { useState } from "react";
import { Head, Link } from "@inertiajs/react";

const FormClinic = () => {
    const [open, setOpen] = useState(false);
    const [bundle, setBundle] = useState(false);

    return (
        <>
            <div className="bg-[#FFF9EE] pt-20 w-full min-h-screen text-[#1E2E40]">
                <Head title="Registration - Coaching Clinic" />
                <div className="container pb-32 bg-[#FFF9EE]">
                    <h1 className="text-center font-semibold text-5xl mb-10">
                        Registration Form
                    </h1>
                    <div className="flex justify-center mb-8 w-full">
                        <button className="btn rounded-none bg-[#1E2E40] w-28 sm:w-60">
                            Coaching Clinic
                        </button>
                    </div>

                    <p className="rounded-md border border-[#1E2E40] py-2 text-center italic sm:mx-10 mb-5">
                        Early Bird
                    </p>
                    <div className="md:mx-10 mb-5">
                        <p className="font-semibold">
                            Person / Bundle ?{" "}
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <p className="text-[#EB9928] mb-2">
                            Get discount for bundle registration
                        </p>
                        <div className="flex">
                            <div className="flex my-2 self-center mr-5">
                                <input
                                    type="radio"
                                    name="bundle"
                                    className="checkbox mr-3"
                                    onChange={() => {
                                        setBundle(false);
                                    }}
                                />
                                <p className="">Person</p>
                            </div>
                            <div className="flex my-2 self-center">
                                <input
                                    type="radio"
                                    name="bundle"
                                    onChange={() => {
                                        setBundle(true);
                                    }}
                                    className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                />
                                <p className="">Bundle</p>
                            </div>
                        </div>
                    </div>
                    {bundle && (
                        <p className="font-semibold text-[#EB9928] mb-3 md:mx-10">
                            1st Person
                        </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Full Name{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                            />
                        </div>
                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                                Line ID{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                            />
                        </div>
                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                                E-mail <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="email"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                            />
                        </div>

                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                                Phone Number{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Place, Date of Birth{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                placeholder="Place, DD/MM/YYYY"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                            />
                        </div>

                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Faculty/Department/Batch{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                placeholder="Faculty/Department/Batch"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                            />
                        </div>
                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Gender <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <div className="flex">
                                <div className="flex my-2 self-center mr-5">
                                    <input
                                        type="radio"
                                        name="radio-1"
                                        className="checkbox mr-3"
                                        onChange={() => {}}
                                    />
                                    <p className="">Male</p>
                                </div>
                                <div className="flex my-2 self-center">
                                    <input
                                        type="radio"
                                        name="radio-1"
                                        className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                    />
                                    <p className="">Female</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                                University/Institute
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                            />
                        </div>
                    </div>

                    {bundle && (
                        <div>
                            {bundle && (
                                <p className="font-semibold text-[#EB9928] mb-3 md:mx-10">
                                    2nd Person
                                </p>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="md:mx-10 mb-5">
                                    <p className="font-semibold">
                                        Full Name{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        Line ID{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        E-mail{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="email"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>

                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        Phone Number{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="md:mx-10 mb-5">
                                    <p className="font-semibold">
                                        Place, Date of Birth{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Place, DD/MM/YYYY"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>

                                <div className="md:mx-10 mb-5">
                                    <p className="font-semibold">
                                        Faculty/Department/Batch{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Faculty/Department/Batch"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                                <div className="md:mx-10 mb-5">
                                    <p className="font-semibold">
                                        Gender{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <div className="flex">
                                        <div className="flex my-2 self-center mr-5">
                                            <input
                                                type="radio"
                                                name="radio-1"
                                                className="checkbox mr-3"
                                                onChange={() => {}}
                                            />
                                            <p className="">Male</p>
                                        </div>
                                        <div className="flex my-2 self-center">
                                            <input
                                                type="radio"
                                                name="radio-1"
                                                className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                            />
                                            <p className="">Female</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        University/Institute
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                            </div>
                            {bundle && (
                                <p className="font-semibold text-[#EB9928] mb-3 md:mx-10">
                                    3rd Person
                                </p>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="md:mx-10 mb-5">
                                    <p className="font-semibold">
                                        Full Name{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        Line ID{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        E-mail{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="email"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>

                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        Phone Number{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="md:mx-10 mb-5">
                                    <p className="font-semibold">
                                        Place, Date of Birth{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Place, DD/MM/YYYY"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>

                                <div className="md:mx-10 mb-5">
                                    <p className="font-semibold">
                                        Faculty/Department/Batch{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Faculty/Department/Batch"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                                <div className="md:mx-10 mb-5">
                                    <p className="font-semibold">
                                        Gender{" "}
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <div className="flex">
                                        <div className="flex my-2 self-center mr-5">
                                            <input
                                                type="radio"
                                                name="radio-1"
                                                className="checkbox mr-3"
                                                onChange={() => {}}
                                            />
                                            <p className="">Male</p>
                                        </div>
                                        <div className="flex my-2 self-center">
                                            <input
                                                type="radio"
                                                name="radio-1"
                                                className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                            />
                                            <p className="">Female</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        University/Institute
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <p className="font-semibold md:mx-10">
                        Upload File <span className="text-[#EB9928]">*</span>{" "}
                    </p>
                    <p className="text-[#EB9928] mb-2 md:mx-10">
                        Photo {bundle && "All Member PDF"} 3x4 (Formal)
                    </p>
                    <div className="grid md:grid-cols-2 md:mr-40 md:ml-10">
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                        />
                    </div>

                    <div>
                        <p className="font-semibold mt-5 md:mx-10">
                            Is there a paper to be reviewed?
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>

                        <div className="md:mx-10 mb-5">
                            <form action="" className="flex">
                                <div className="flex my-2 self-center mr-5">
                                    <input
                                        type="radio"
                                        name="radio-2"
                                        className="checkbox mr-3"
                                        onChange={() => {
                                            setOpen(true);
                                        }}
                                    />
                                    <p className="">Yes</p>
                                </div>
                                <div className="flex my-2 self-center">
                                    <input
                                        type="radio"
                                        name="radio-2"
                                        className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                        onChange={() => {
                                            setOpen(false);
                                        }}
                                    />
                                    <p className="">No</p>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className={open ? "block" : "hidden"}>
                        <p className="font-semibold md:mx-10 ">
                            Upload Your Paper File Here
                        </p>
                        <span className="text-[#EB9928] md:mx-10 mb-4">
                            *No DBCC File
                        </span>{" "}
                        <div className="grid md:grid-cols-2 md:mr-40 md:ml-10">
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link href="/DBCC">
                            <button className="btn btn-outline w-28 sm:w-48 rounded-none mx-10">
                                Cancel
                            </button>
                        </Link>
                        <Link href="/payment-confirmation-dbcc">
                            <button className="btn w-28 sm:w-48 rounded-none mx-10 bg-[#1E2E40]">
                                Next
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
        </>
    );
};

export default FormClinic;
