import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

const FormET1 = (props) => {
    const [open, setOpen] = useState(false);
    const [bundle, setBundle] = useState(false);
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

        for (const key in fd) {
            console.log(key);
        }
        // console.log(fd);
        router.post("/registration-EarlyTalk1", fd);
    };

    useEffect(() => {
        if (Object.keys(errors).length == 0) {
            // resetForm();
        } else {
            console.log(errors);
        }
    }, [errors]);

    return (
        <>
            <div className="bg-[#FFF9EE] pt-20 w-full min-h-screen text-[#1E2E40]">
                <Head title="Registration -  Early Talk 1" />
                <div className="container pb-32 bg-[#FFF9EE]">
                    <h1 className="text-center font-semibold text-5xl mb-10">
                        Registration Form ET1
                    </h1>
                    <div className="flex justify-center mb-8 w-full">
                        {/* <Link href={route("national-seminar.form-semnas")}>
                            <button className="btn btn-outline w-28 sm:w-60 rounded-none">
                                National Seminar
                            </button>
                        </Link>
                        <Link href={route("national-seminar.form-et1")}>
                            <button className="btn rounded-none bg-[#1E2E40] w-28 sm:w-60">
                                Early Talk1
                            </button>
                        </Link>
                        <Link href={route("national-seminar.form-et2")}>
                            <button className="btn btn-outline w-24 sm:w-60 rounded-none">
                                Early Talk 2
                            </button>
                        </Link> */}

                        <button className="btn rounded-none bg-[#1E2E40] w-28 sm:w-60">
                            Early Talk1
                        </button>
                    </div>

                    <p className="rounded-md border border-[#1E2E40] py-2 text-center italic sm:mx-10 mb-5">
                        Early Bird
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
                                    onChange={(place_dob) =>
                                        setPlaceDOB(place_dob.target.value)
                                    }
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
                                    onChange={(id_line) =>
                                        setLine(id_line.target.value)
                                    }
                                />
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
                                    >
                                        <option value="" disabled selected>
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
                                    <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
                                </div>
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
                                />
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
                            </div>
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
                            </div>
                        </div>

                        <p className="font-semibold md:mx-10">
                            KTM <span className="text-[#EB9928]">*</span>{" "}
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
export default FormET1;
