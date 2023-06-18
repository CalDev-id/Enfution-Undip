import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const NewsLetter = (props) => {
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");

    const data = {
        subject,
        description,
    };
    const errors = props.errors;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let fd = new FormData();

        for (const d in data) {
            fd.append(`${d}`, data[d]);
        }

        // console.log(fd);
        await router.post("/sendNewsLetter", fd);

        setSubject("");
        setDescription("");

        Swal.fire({
            icon: 'success',
            text: 'Newsletter berhasil dikirim!',
            confirmButtonColor: "#3085d6",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="my-5">
                    <a href="/dashboard/subscriber">
                    <div className="m-1 btn">
                        Back
                    </div>
                    </a>
                </div>
                <p className="font-semibold">
                    Subject{" "}
                    <span className="text-[#EB9928]">*</span>{" "}
                </p>
                <input
                    type="text"
                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928]"
                    required
                    value={subject}
                    onChange={(subject) =>
                        setSubject(subject.target.value)
                    }
                />
                <p className="font-semibold mt-5">
                    Description{" "}
                    <span className="text-[#EB9928]">*</span>{" "}
                </p>
                <textarea
                    className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md focus:border-[#EB9928] focus:ring-[#EB9928] h-auto"
                    required
                    value={description}
                    rows={11}
                    onChange={(description) =>
                        setDescription(description.target.value)
                    }
                />
                <button className="btn md:text-xl mt-7 w-full"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </>
    );
};

export default NewsLetter;