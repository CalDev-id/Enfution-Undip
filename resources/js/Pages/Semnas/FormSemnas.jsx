import { Head, Link, router } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

const FormSemnas = (props) => {
    const [full_name, setName] = useState("");
    const [faculty_departements_batch, setFaculty] = useState("");
    const [gender, setGender] = useState("");
    const [place_dob, setPlaceDOB] = useState("");
    const [status, setStatus] = useState("");
    const [university, setUnirversity] = useState("");
    const [phone_number, setPhone] = useState("");
    const [line_id, setLine] = useState("");
    const [email, setEmail] = useState("");
    const [ktm, setKtm] = useState("");
    const [coupon, setCoupon] = useState("");

    const data = {
        full_name,
        faculty_departements_batch,
        gender,
        place_dob,
        status,
        university,
        phone_number,
        line_id,
        email,
        ktm,
        coupon,
    };
    const errors = props.errors;

    const handleSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();

        for (const d in data) {
            fd.append(`${d}`, data[d]);
        }
        router.post("/registration-national-seminar", fd);
    };

    useEffect(() => {
        if (Object.keys(errors).length == 0) {
            // resetForm();
        } else {
            // console.log(errors);
        }
    }, [errors]);

    return (
        <>
            <div className="bg-[#FFF9EE] pt-20 w-full min-h-screen text-[#1E2E40]">
                <Head title="Registration -  National Seminar" />
                <div className="container pb-32 bg-[#FFF9EE]">
                    <h1 className="text-center font-semibold text-5xl mb-10">
                        Registration Form
                    </h1>
                    <div className="flex justify-center mb-8 w-full">
                        <button className="btn rounded-none bg-[#1E2E40] w-28 sm:w-60">
                            National Seminar
                        </button>
                    </div>

                    <div
                        className={
                            props.info
                                ? "alert alert-warning w-fit sm:w-max sm:mx-10 mb-5"
                                : "hidden"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <span>
                            Sorry, please fill in the registration again
                        </span>
                    </div>

                    <p className="rounded-md border border-[#1E2E40] py-2 text-center italic sm:mx-10 mb-5">
                        {props.time_regist}
                    </p>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="md:mx-10 mb-5">
                                <p className="font-semibold">
                                    Full Name{" "}
                                    <span className="text-[#EB9928]">*</span>{" "}
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    onChange={(name) =>
                                        setName(name.target.value)
                                    }
                                />
                                {errors != null && errors.full_name && (
                                    <span className="text-red-600">
                                        {errors.full_name}
                                    </span>
                                )}
                            </div>

                            <div className="md:mx-10 mb-5">
                                <p className="font-semibold">
                                    Faculty/Department/Batch{" "}
                                    <span className="text-[#EB9928]">*</span>{" "}
                                </p>
                                <input
                                    type="text"
                                    placeholder="*ex Economic/Management/2021"
                                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    onChange={(faculty) =>
                                        setFaculty(faculty.target.value)
                                    }
                                />
                                {errors != null &&
                                    errors.faculty_departements_batch && (
                                        <span className="text-red-600">
                                            {errors.faculty_departements_batch}
                                        </span>
                                    )}
                            </div>

                            <div className="md:mx-10 mb-5">
                                <p className="font-semibold">
                                    Gender{" "}
                                    <span className="text-[#EB9928]">*</span>{" "}
                                </p>
                                <div className="flex">
                                    <div className="flex my-2 self-center mr-5">
                                        <input
                                            type="radio"
                                            name="radio-1"
                                            className="checkbox mr-3 focus:border-[#EB9928] focus:ring-[#EB9928]"
                                            onClick={(gender) =>
                                                setGender("Male")
                                            }
                                        />
                                        <p className="">Male</p>
                                    </div>
                                    <div className="flex my-2 self-center">
                                        <input
                                            type="radio"
                                            name="radio-1"
                                            className="checkbox mr-3 outline-1 outline-[#1E2E40] focus:border-[#EB9928] focus:ring-[#EB9928]"
                                            onClick={(gender) =>
                                                setGender("Female")
                                            }
                                        />
                                        <p className="">Female</p>
                                    </div>
                                </div>
                                {errors != null && errors.gender && (
                                    <span className="text-red-600">
                                        {errors.gender}
                                    </span>
                                )}
                            </div>

                            <div className="mb-5 md:mx-10">
                                <p className="font-semibold">
                                    Phone Number{" "}
                                    <span className="text-[#EB9928]">*</span>{" "}
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    onChange={(phone) =>
                                        setPhone(phone.target.value)
                                    }
                                    placeholder="+628xxxxx (not using (-) separator)"
                                />
                                {errors != null && errors.phone_number && (
                                    <span className="text-red-600">
                                        {errors.phone_number}
                                    </span>
                                )}
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
                                    onChange={(place_dob) =>
                                        setPlaceDOB(place_dob.target.value)
                                    }
                                />
                                {errors != null && errors.place_dob && (
                                    <span className="text-red-600">
                                        {errors.place_dob}
                                    </span>
                                )}
                            </div>

                            <div className="mb-5 md:mx-10">
                                <p className="font-semibold">
                                    Line ID{" "}
                                    <span className="text-[#EB9928]">*</span>{" "}
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    onChange={(id_line) =>
                                        setLine(id_line.target.value)
                                    }
                                    placeholder="@enfution15"
                                />
                                {errors != null && errors.line_id && (
                                    <span className="text-red-600">
                                        {errors.line_id}
                                    </span>
                                )}
                            </div>

                            <div className="mb-5 md:mx-10">
                                <p className="font-semibold">
                                    Status
                                    <span className="text-[#EB9928]">
                                        *
                                    </span>{" "}
                                </p>
                                <div className="relative">
                                    <select
                                        className="focus:border-[#EB9928] focus:ring-[#EB9928] w-full appearance-none rounded-lg border-[1.5px] border-[#1E2E40] bg-transparent py-3 px-5 font-medium text-body-color outline-none transition active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                        onChange={(status) =>
                                            setStatus(status.target.value)
                                        }
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Choose One
                                        </option>
                                        <option value="Undergraduate">
                                            Undergraduate
                                        </option>
                                        <option value="Student">Student</option>
                                        <option value="Non-Student">
                                            Non-Student
                                        </option>
                                    </select>
                                </div>
                                {errors != null && errors.status && (
                                    <span className="text-red-600">
                                        {errors.status}
                                    </span>
                                )}
                            </div>

                            <div className="mb-5 md:mx-10">
                                <p className="font-semibold">
                                    E-mail
                                    <span className="text-[#EB9928]">
                                        *
                                    </span>{" "}
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    onChange={(email) =>
                                        setEmail(email.target.value)
                                    }
                                    placeholder="example@gmail.com"
                                />
                                {errors != null && errors.email && (
                                    <span className="text-red-600">
                                        {errors.email}
                                    </span>
                                )}
                                {props.email_not_valid != null &&
                                    props.email_not_valid && (
                                        <span className="text-red-600">
                                            {props.email_not_valid}
                                        </span>
                                    )}
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
                                    onChange={(uni) =>
                                        setUnirversity(uni.target.value)
                                    }
                                />
                                {errors != null && errors.university && (
                                    <span className="text-red-600">
                                        {errors.university}
                                    </span>
                                )}
                            </div>
                            {props.time_regist == "Normal" ? (
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        Coupon/Referral Code
                                        <span className="text-[#EB9928]">
                                            *
                                        </span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="if any"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                        onChange={(coupon) =>
                                            setCoupon(coupon.target.value)
                                        }
                                    />
                                    {props.refcode_not_found != null &&
                                        props.refcode_not_found && (
                                            <span className="text-red-600">
                                                {props.refcode_not_found}
                                            </span>
                                        )}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>

                        <p className="font-semibold md:mx-10">
                            KTM (with .jpg and .png formats)
                            <span className="text-[#EB9928]">*</span>{" "}
                        </p>

                        <p className="text-[#EB9928] mb-2 md:mx-10">
                            (Only freshmen from Management of Diponegoro
                            University)
                        </p>
                        <div className="grid md:grid-cols-2 md:mr-40 md:ml-10">
                            <input
                                type="file"
                                id="file-ktm"
                                className="file-input file-input-bordered w-full focus:border-[#EB9928] focus:ring-[#EB9928]"
                                onChange={(e) => {
                                    setKtm(e.target.files[0]);
                                }}
                            />
                        </div>
                        {errors != null && errors.ktm && (
                            <span className="text-red-600 md:mx-10">
                                {errors.ktm}
                            </span>
                        )}

                        <div className="flex justify-center mt-10">
                            <Link href={route("national-seminar.main")}>
                                <button
                                    type="button"
                                    className="btn btn-outline w-28 sm:w-48 rounded-none mx-10"
                                >
                                    Cancel
                                </button>
                            </Link>
                            <button className="btn w-28 sm:w-48 rounded-none mx-10 bg-[#1E2E40]">
                                Next
                            </button>
                        </div>
                    </form>

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

export default FormSemnas;
