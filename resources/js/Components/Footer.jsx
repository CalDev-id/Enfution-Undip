import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const Footer = ({active}) => {
    const [email, setEmail] = useState("");

    const data = {
        email,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValidEmail = /^[A-Za-z0-9._%+-]+@gmail.com$/i.test(email);

        if (!isValidEmail) {
            // Display an error message or handle invalid email case
            Swal.fire({
                icon: 'error',
                text: 'Please enter a valid Gmail address.',
                confirmButtonColor: "#3085d6",
            });
            return;
        }

        let fd = new FormData();

        for (const d in data) {
            fd.append(`${d}`, data[d]);
        }

        const { scrollX, scrollY } = window;

        // console.log(fd);
        await router.post("/subscribe", fd);

        // Reset the email input value
        setEmail("");

        Swal.fire({
            icon: 'success',
            text: 'You have successfully subscribed to our newsletter!',
            confirmButtonColor: "#3085d6",
        })
    };

    return (
        <>
            <div className="bg-[#FFCE2E] py-10">
                <div className="bg-[#FFF9EE]">
                    <div className="container">
                        <div className="lg:flex justify-between items-center py-10">
                            <div className="sm:flex justify-evenly items-center">
                                <div className="mr-20 mb-5 sm:mb-0">
                                    <img
                                        className="w-36"
                                        src="images/LogoEnfu.svg"
                                        alt=""
                                    />
                                    <p className="text-[#EB9928] font-semibold text-lg">
                                        Contact Us
                                    </p>
                                    <p>{active == "dbcc" && ("info.DBCC2023@gmail.com")}{active == "semnas" && ("enfutionundip.semnas@gmail.com")}{active == "enfu" && ("enfutionthe15@gmail.com")}</p>
                                </div>
                                <div>
                                    <ul>
                                        <li className="flex items-center mb-3">
                                            <img
                                                src="images/igLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <a href="https://www.instagram.com/enfutionundip/" target="_blank">enfutionundip</a>
                                        </li>
                                        <li className="flex items-center mb-3">
                                            <img
                                                src="images/ttLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <a href="https://www.tiktok.com/@enfutionundip" target="_blank">@enfutionundip</a>
                                        </li>
                                        <li className="flex items-center">
                                            <img
                                                src="images/linkLogo.svg"
                                                className="w-10 mr-3"
                                                alt=""
                                            />
                                            <a href="https://www.linkedin.com/company/enfution/?originalSubdomain=id" target="_blank">Enfution Undip</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p className="text-[#EB9928] text-right font-semibold text-lg">
                                    Subscribe to
                                    <br />
                                    Our
                                    <span className="text-[#FFCE2E]">{" "}
                                    Newsletter
                                    </span>
                                    
                                </p>
                                <div className="relative my-2">
                                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                                        <input
                                            type="email"
                                            required
                                            id="email-input"
                                            // value={post}
                                            placeholder="Email Address"
                                            // onChange={(post) =>
                                            //     setPost(post.target.value)
                                            // }
                                            className="input w-full border-[#FFCE2E] border-2 focus:ring-0 focus:outline-none rounded-3xl pl-14 text-sm py-5 pr-32"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <button
                                            className="bg-[#FFCE2E] absolute z-10 right-0 bottom-0 text-white rounded-full px-6 py-3 font-medium"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                                <p className="text-right">
                                By clicking subscribe, you agree <br />
                                to receive email newsletter and calendar
                                notifications.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
