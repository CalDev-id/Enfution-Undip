import AboutUs from "@/Components/AboutUs";
import EventsSemnas from "@/Components/EventsSemnas";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import GallerySemnas from "@/Components/GallerySemnas";
import Testi from "@/Components/Testi";
import TestiPageSemnas from "@/Components/TestiPageSemnas";

const NationalSeminar = () => {
    return (
        <section className="bg-[#FFF9EE]">
            <Head title="National Seminar" />
            <Navbar active={"national"} />

            <Hero active={"national"} />

            <AboutUs active={"national"} />\

            <EventsSemnas />

            <GallerySemnas />
            
            <TestiPageSemnas />
            <Footer active={"semnas"} />

        </section>
    );
};

export default NationalSeminar;