import BasicLayout from "@/Layouts/BasicLayout";
import { Head } from "@inertiajs/react";
import AboutUs from "@/Components/AboutUs";
import Events from "@/Components/Events";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TestiPage from "@/Components/TestiPage";
import Galery from "@/Components/Gallery";

const HomePage = () => {
    return (
        <section className="bg-[#FFF9EE]">
            <Head title="DBCC" />
            <Navbar active={"dbcc"} />

            <Hero active={"dbcc"} />

            <AboutUs active={"dbcc"} />

            <Events hrefDbcc={"/form-dbcc"}/>

            <Galery />

            <TestiPage />

            <Footer />
        </section>

    );
};

export default HomePage;
