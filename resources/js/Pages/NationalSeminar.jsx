import AboutUs from "@/Components/AboutUs";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const NationalSeminar = () => {
    return (
        <section className="bg-[#FFF9EE]">
            <Head title="National Seminar" />
            <Navbar active={"national"} />

            <Hero active={"national"} />

            <AboutUs active={"national"} />
            <Footer />

        </section>
    );
};

export default NationalSeminar;