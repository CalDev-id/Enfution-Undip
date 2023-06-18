import BasicLayout from "@/Layouts/BasicLayout";
import { Head, router } from "@inertiajs/react";
import AboutUs from "@/Components/AboutUs";
import Events from "@/Components/Events";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TestiPage from "@/Components/TestiPage";
import Galery from "@/Components/Gallery";
import EventsHome from "@/Components/EventsHome";
import Sponsors from "@/Components/Sponsors";
import { useState } from "react";
import Swal from 'sweetalert2';

const HomePage = ({active}) => {
    const [modalOpen, setModalOpen] = useState(true);
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

        // console.log(fd);
        await router.post("/subscribe", fd);

        setEmail("");
        setModalOpen(false);

        Swal.fire({
            icon: 'success',
            text: 'You have successfully subscribed to our newsletter!',
            confirmButtonColor: "#3085d6",
        })
    };
    return (
        <section className="bg-[#FFF9EE]">
            <Head title="Home" />
            <Navbar active={"home"} />

            <Hero active={"home"} />

            <AboutUs active={"home"} />

            <EventsHome />

            <Sponsors />

            <Footer active={"enfu"} />

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
                        className="w-full h-full relative sm:scale-75 xl:scale-90 max-w-lg max-h-96 xl:max-w-[984px] xl:max-h-[561px] bg-cover bg-center bg-no-repeat py-16 md:py-20 rounded-3xl xl:rounded-none px-4 sm:px-8 text-center"
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
                            Keep up with us
                        </h3>

                        <p className="mb-5 text-base leading-relaxed text-body-color max-w-md flex mx-auto">
                            Subscribe to our newsletter and get the latest
                            updates straight to your inbox
                        </p>
                        <div className="relative my-2 max-w-xl flex mx-auto flex-col mb-5">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <input
                                    type="email"
                                    required
                                    // value={post}
                                    placeholder="Email Address"
                                    // onChange={(post) =>
                                    //     setPost(post.target.value)
                                    // }
                                    className="input w-full border-[#1E2E40] focus:border-[#EB9928] focus:ring-[#EB9928] border-2 focus:ring-0 focus:outline-none rounded-3xl pl-10 text-sm py-5 pr-32 bg-transparent"
                                    onChange={(email) =>
                                        setEmail(email.target.value)
                                    }
                                />
                                <button
                                    className="bg-[#1E2E40] absolute z-10 right-0 bottom-0 text-white rounded-full px-4 sm:px-10 py-3 font-medium"
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <button
                            className="underline italic"
                            onClick={() => {
                                setModalOpen(false);
                            }}
                        >
                            maybe next time
                        </button>
                        <img
                            src="images/LogoEnfu.svg"
                            alt=""
                            onClick={() => {
                                setModalOpen(false);
                            }}
                            className="absolute sm:right-32 sm:top-16 cursor-pointer left-5 bottom-5 w-11 sm:hidden"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
};
export default HomePage;
