import AboutUs from "@/Components/AboutUs";
import EventsSemnas from "@/Components/EventsSemnas";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import GallerySemnas from "@/Components/GallerySemnas";
import Testi from "@/Components/Testi";
import TestiPageSemnas from "@/Components/TestiPageSemnas";

const NationalSeminar = (props) => {
    return (
        <section className="bg-[#FFF9EE]">
            <Head title="National Seminar" />
            <Navbar active={"national"} />
            <Hero active={"national"} />
            <AboutUs active={"national"} />
            <EventsSemnas
                ticketPrice={props.ticketPrice}
                timeRegist={props.timeRegist}
            />
            <GallerySemnas />
            <TestiPageSemnas />
            <Footer active={"semnas"} />
        </section>
    );
};

export default NationalSeminar;
