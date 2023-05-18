const FormDBCC = () => {
    return (
        <div className="bg-[#FFF9EE] pt-20 w-full min-h-screen text-[#1E2E40]">
            <div className="container">
                <h1 className="text-center font-semibold text-5xl mb-10">
                    Registration Form
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="md:mr-20 mb-5">
                        <p className="font-semibold">
                            Team Name <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold">
                            University/Institute{" "}
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="md:mr-20 mb-5">
                        <p className="font-semibold">
                            Faculty/Department/Batch{" "}
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            placeholder="Faculty/Department/Batch"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold">
                            Coupon/Referral Code{" "}
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            placeholder="if any"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                </div>

                <p className="font-semibold text-[#EB9928] mb-3">Team Leader</p>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-96">
                    <div className="md:mr-20 mb-5">
                        <p className="font-semibold">
                            Full Name <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold">
                            Phone Number{" "}
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="md:mr-20 mb-5">
                        <p className="font-semibold">
                            Gender <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <select className="select select-bordered w-full bg-transparent border-[#1E2E40]">
                            <option disabled selected>
                                Male
                            </option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold">
                            Line ID <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="md:mr-20 mb-5">
                        <p className="font-semibold">
                            Place, Date of Birth{" "}
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            placeholder="Place, DD/MM/YYYY"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <p className="font-semibold">
                            E-mail <span className="text-[#EB9928]">*</span>{" "}
                        </p>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormDBCC;
