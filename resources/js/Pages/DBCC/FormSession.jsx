import { Head, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

const FormSession = (props) => {
    const [open, setOpen] = useState(false);
    const [bundle, setBundle] = useState(false);
    const [type, setType] = useState("");
    const [full_name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [place_dob, setPlaceDOB] = useState("");
    const [email, setEmail] = useState("");
    const [line_id, setLine] = useState("");
    const [phone_number, setPhone] = useState("");
    const [faculty_department_batch, setFaculty] = useState("");
    const [university_institute, setUniversity] = useState("");
    const [full_name2, setName2] = useState("");
    const [gender2, setGender2] = useState("");
    const [place_dob2, setPlaceDOB2] = useState("");
    const [email2, setEmail2] = useState("");
    const [line_id2, setLine2] = useState("");
    const [phone_number2, setPhone2] = useState("");
    const [faculty_department_batch2, setFaculty2] = useState("");
    const [university_institute2, setUniversity2] = useState("");
    const [full_name3, setName3] = useState("");
    const [gender3, setGender3] = useState("");
    const [place_dob3, setPlaceDOB3] = useState("");
    const [email3, setEmail3] = useState("");
    const [line_id3, setLine3] = useState("");
    const [phone_number3, setPhone3] = useState("");
    const [faculty_department_batch3, setFaculty3] = useState("");
    const [university_institute3, setUniversity3] = useState("");
    const [member_photo, setPhoto] = useState("");
    const [dbcc_participant, setParticipant] = useState("");
    const [team_name, setTeam] = useState("");
    const [dbcc_registration_code, setCode] = useState("");
    const [dbcc_payment_slip, setSlip] = useState("");

    const data = {
        type,
        full_name,
        gender,
        place_dob,
        email,
        line_id,
        phone_number,
        faculty_department_batch,
        university_institute,
        full_name2,
        gender2,
        place_dob2,
        email2,
        line_id2,
        phone_number2,
        faculty_department_batch2,
        university_institute2,
        full_name3,
        gender3,
        place_dob3,
        email3,
        line_id3,
        phone_number3,
        faculty_department_batch3,
        university_institute3,
        member_photo,
        dbcc_participant,
        team_name,
        dbcc_registration_code,
        dbcc_payment_slip,
    };

    const errors = props.errors;

    const handleSubmit = (e) => {
        e.preventDefault();
        let fd = new FormData();

        for (const d in data) {
            fd.append(`${d}`, data[d]);
        }
        router.post("/registration-coaching-session", fd);
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
                <Head title="Registration -  Coaching Session" />
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="container pb-32 bg-[#FFF9EE]">
                        <h1 className="text-center font-semibold text-5xl mb-10">
                            Registration Form
                        </h1>
                        <div className="flex justify-center mb-8 w-full">
                                <button type="button" className="btn rounded-none bg-[#1E2E40] w-28 sm:w-60">
                                    Coaching Session
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

                        <p className="rounded-md border border-[#1E2E40] py-2 text-center italic sm:mx-10 mb-5 text-slate-500">
                            {props.time_regist}
                        </p>
                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Person
                                {props.time_regist == "Normal" ? (
                                    " / Bundle ?"
                                ) : (
                                    ""
                                )}
                                <span className="text-[#EB9928]"> *</span>{" "}
                            </p>
                            <p className="text-[#EB9928] mb-2">
                                {props.time_regist == "Normal" ? (
                                    "Get discount for bundle registration"
                                ) : (
                                    ""
                                )}
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
                                        onClick={(type) =>
                                            setType("Person")
                                        }
                                    />
                                    <p className="">Person</p>
                                </div>
                                {props.time_regist == "Normal" ? (
                                    <div className="flex my-2 self-center">
                                        <input
                                            type="radio"
                                            name="bundle"
                                            onChange={() => {
                                                setBundle(true);
                                            }}
                                            onClick={(type) =>
                                                setType("Bundle")
                                            }
                                            className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                        />
                                        <p className="">Bundle</p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            {errors != null && errors.type && (
                                <span className="text-red-600">
                                    {errors.type}
                                </span>
                            )}
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
                                    E-mail <span className="text-[#EB9928]">*</span>{" "}
                                </p>
                                <input
                                    type="email"
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

                            <div className="md:mx-10 mb-5">
                                <p className="font-semibold">
                                    Faculty/Department/Batch{" "}
                                    <span className="text-[#EB9928]">*</span>{" "}
                                </p>
                                <input
                                    type="text"
                                    placeholder="Faculty/Department/Batch"
                                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    onChange={(faculty) =>
                                        setFaculty(faculty.target.value)
                                    }
                                />
                                {errors != null && errors.faculty_department_batch && (
                                    <span className="text-red-600">
                                        {errors.faculty_department_batch}
                                    </span>
                                )}
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
                                            className="checkbox mr-3 outline-1 outline-[#1E2E40]"
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
                                    University/Institute
                                    <span className="text-[#EB9928]">*</span>{" "}
                                </p>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                    onChange={(university) =>
                                        setUniversity(university.target.value)
                                    }
                                />
                                {errors != null && errors.university_institute && (
                                    <span className="text-red-600">
                                        {errors.university_institute}
                                    </span>
                                )}
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
                                            onChange={(name2) =>
                                                setName2(name2.target.value)
                                            }
                                        />
                                        {errors != null && errors.full_name2 && (
                                            <span className="text-red-600">
                                                {errors.full_name2}
                                            </span>
                                        )}
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
                                            onChange={(id_line2) =>
                                                setLine2(id_line2.target.value)
                                            }
                                            placeholder="@enfution15"
                                        />
                                        {errors != null && errors.line_id2 && (
                                            <span className="text-red-600">
                                                {errors.line_id2}
                                            </span>
                                        )}
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
                                            onChange={(email2) =>
                                                setEmail2(email2.target.value)
                                            }
                                            placeholder="example@gmail.com"
                                        />
                                        {errors != null && errors.email2 && (
                                            <span className="text-red-600">
                                                {errors.email2}
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
                                            Phone Number{" "}
                                            <span className="text-[#EB9928]">
                                                *
                                            </span>{" "}
                                        </p>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                            onChange={(phone2) =>
                                                setPhone2(phone2.target.value)
                                            }
                                            placeholder="+628xxxxx (not using (-) separator)"
                                        />
                                        {errors != null && errors.phone_number2 && (
                                            <span className="text-red-600">
                                                {errors.phone_number2}
                                            </span>
                                        )}
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
                                            onChange={(place_dob2) =>
                                                setPlaceDOB2(place_dob2.target.value)
                                            }
                                        />
                                        {errors != null && errors.place_dob2 && (
                                            <span className="text-red-600">
                                                {errors.place_dob2}
                                            </span>
                                        )}
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
                                            onChange={(faculty2) =>
                                                setFaculty2(faculty2.target.value)
                                            }
                                        />
                                        {errors != null && errors.faculty_department_batch2 && (
                                            <span className="text-red-600">
                                                {errors.faculty_department_batch2}
                                            </span>
                                        )}
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
                                                    name="radio-2"
                                                    className="checkbox mr-3"
                                                    onChange={() => {}}
                                                    onClick={(gender2) =>
                                                        setGender2("Male")
                                                    }
                                                />
                                                <p className="">Male</p>
                                            </div>
                                            <div className="flex my-2 self-center">
                                                <input
                                                    type="radio"
                                                    name="radio-2"
                                                    className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                                    onClick={(gender2) =>
                                                        setGender2("Female")
                                                    }
                                                />
                                                <p className="">Female</p>
                                            </div>
                                        </div>
                                        {errors != null && errors.gender2 && (
                                            <span className="text-red-600">
                                                {errors.gender2}
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
                                            onChange={(university2) =>
                                                setUniversity2(university2.target.value)
                                            }
                                        />
                                        {errors != null && errors.university_institute2 && (
                                            <span className="text-red-600">
                                                {errors.university_institute2}
                                            </span>
                                        )}
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
                                            onChange={(name3) =>
                                                setName3(name3.target.value)
                                            }
                                        />
                                        {errors != null && errors.full_name3 && (
                                            <span className="text-red-600">
                                                {errors.full_name3}
                                            </span>
                                        )}
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
                                            onChange={(id_line3) =>
                                                setLine3(id_line3.target.value)
                                            }
                                            placeholder="@enfution15"
                                        />
                                        {errors != null && errors.line_id3 && (
                                            <span className="text-red-600">
                                                {errors.line_id3}
                                            </span>
                                        )}
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
                                            onChange={(email3) =>
                                                setEmail3(email3.target.value)
                                            }
                                            placeholder="example@gmail.com"
                                        />
                                        {errors != null && errors.email3 && (
                                            <span className="text-red-600">
                                                {errors.email3}
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
                                            Phone Number{" "}
                                            <span className="text-[#EB9928]">
                                                *
                                            </span>{" "}
                                        </p>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                            onChange={(phone3) =>
                                                setPhone3(phone3.target.value)
                                            }
                                            placeholder="+628xxxxx (not using (-) separator)"
                                        />
                                        {errors != null && errors.phone_number3 && (
                                            <span className="text-red-600">
                                                {errors.phone_number3}
                                            </span>
                                        )}
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
                                            onChange={(place_dob3) =>
                                                setPlaceDOB3(place_dob3.target.value)
                                            }
                                        />
                                        {errors != null && errors.place_dob3 && (
                                            <span className="text-red-600">
                                                {errors.place_dob3}
                                            </span>
                                        )}
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
                                            onChange={(faculty3) =>
                                                setFaculty3(faculty3.target.value)
                                            }
                                        />
                                        {errors != null && errors.faculty_department_batch3 && (
                                            <span className="text-red-600">
                                                {errors.faculty_department_batch3}
                                            </span>
                                        )}
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
                                                    name="radio-3"
                                                    className="checkbox mr-3"
                                                    onChange={() => {}}
                                                    onClick={(gender3) =>
                                                        setGender3("Male")
                                                    }
                                                />
                                                <p className="">Male</p>
                                            </div>
                                            <div className="flex my-2 self-center">
                                                <input
                                                    type="radio"
                                                    name="radio-3"
                                                    className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                                    onClick={(gender3) =>
                                                        setGender3("Female")
                                                    }
                                                />
                                                <p className="">Female</p>
                                            </div>
                                        </div>
                                        {errors != null && errors.gender3 && (
                                            <span className="text-red-600">
                                                {errors.gender3}
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
                                            onChange={(university3) =>
                                                setUniversity3(university3.target.value)
                                            }
                                        />
                                        {errors != null && errors.university_institute3 && (
                                            <span className="text-red-600">
                                                {errors.university_institute3}
                                            </span>
                                        )}
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
                                onChange={(e) => {
                                    setPhoto(e.target.files[0]);
                                }}
                            />
                        </div>
                        {errors != null && errors.member_photo && (
                            <span className="text-red-600 md:mx-10">
                                {errors.member_photo}
                            </span>
                        )}

                        <div>

                            <div className="md:mx-10 mb-5">
                            <p className="font-semibold mt-8">
                                Are You a Participant of Diponegoro Business Case
                                Competition?*
                            </p>
                                <div className="flex">
                                    <div className="flex my-2 self-center mr-5">
                                        <input
                                            type="radio"
                                            name="radio-4"
                                            className="checkbox mr-3"
                                            onChange={() => {
                                                setOpen(true);
                                            }}
                                            onClick={(dbccparticipant) =>
                                                setParticipant("Y")
                                            }
                                        />
                                        <p className="">Yes</p>
                                    </div>
                                    <div className="flex my-2 self-center">
                                        <input
                                            type="radio"
                                            name="radio-4"
                                            className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                            onChange={() => {
                                                setOpen(false);
                                            }}
                                            onClick={(dbccparticipant) =>
                                                setParticipant("N")
                                            }
                                        />
                                        <p className="">No</p>
                                    </div>
                                </div>
                                {errors != null && errors.dbcc_participant && (
                                    <span className="text-red-600">
                                        {errors.dbcc_participant}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className={open ? "block" : "hidden"}>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        Team Name{" "}
                                        <span className="text-[#EB9928]">*</span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                        onChange={(teamname) =>
                                            setTeam(teamname.target.value)
                                        }
                                    />
                                    {errors != null && errors.team_name && (
                                        <span className="text-red-600">
                                            {errors.team_name}
                                        </span>
                                    )}
                                </div>
                                <div className="mb-5 md:mx-10">
                                    <p className="font-semibold">
                                        DBCC Registration Code{" "}
                                        <span className="text-[#EB9928]">*</span>{" "}
                                    </p>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                                        onChange={(code) =>
                                            setCode(code.target.value)
                                        }
                                    />
                                    {errors != null && errors.dbcc_registration_code && (
                                        <span className="text-red-600">
                                            {errors.dbcc_registration_code}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="font-semibold md:mx-10 mb-4">
                                Upload Your DBCC Payment Slip Below!{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <div className="grid md:grid-cols-2 md:mr-40 md:ml-10">
                                <input
                                    type="file"
                                    className="file-input file-input-bordered w-full"
                                    onChange={(e) => {
                                        setSlip(e.target.files[0]);
                                    }}
                                />
                            </div>
                            {errors != null && errors.dbcc_payment_slip && (
                                <span className="text-red-600 md:mx-10">
                                    {errors.dbcc_payment_slip}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href={route("dbcc.main")}>
                                <button className="btn btn-outline w-28 sm:w-48 rounded-none mx-10">
                                    Cancel
                                </button>
                            </Link>
                            
                            <button className="btn w-28 sm:w-48 rounded-none mx-10 bg-[#1E2E40]">
                                Next
                            </button>
                            
                        </div>
                        <Link href="/">
                            <p className="underline text-center mt-10 font-light">
                                Return to Homepage
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormSession;
