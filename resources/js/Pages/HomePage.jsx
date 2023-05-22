import BasicLayout from "@/Layouts/BasicLayout";
import { Head } from "@inertiajs/react";
import AboutUs from "@/Components/AboutUs";
import Events from "@/Components/Events";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TestiPage from "@/Components/TestiPage";
import Galery from "@/Components/Gallery";
import EventsHome from "@/Components/EventsHome";
import Sponsors from "@/Components/Sponsors";

const HomePage = () => {
    return (
        <section className="bg-[#FFF9EE]">
            <Head title="Home" />
            <Navbar active={"home"} />

            <Hero active={"home"} />

            <AboutUs active={"home"} />

            <EventsHome/>

            <Sponsors/>

            <Footer />
        </section>

    );
};

export default HomePage;
