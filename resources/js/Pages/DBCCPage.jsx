import { Head } from "@inertiajs/react";
import AboutUs from "@/Components/AboutUs";
import Events from "@/Components/Events";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TestiPage from "@/Components/TestiPage";
import Galery from "@/Components/Gallery";

const DBCCPage = (props) => {
    return (
        <section className="bg-[#FFF9EE]">
            <Head title="DBCC" />
            <Navbar active={"dbcc"} />

            <Hero active={"dbcc"} />

            <AboutUs active={"dbcc"} />

            <Events
                ticketPrice={props.ticketPrice}
                timeRegist={props.timeRegist}
                ticketPriceCS={props.ticketPriceCS}
                timeRegistCS={props.timeRegistCS}
            />

            <Galery />

            <TestiPage />

            <Footer active={"dbcc"} />
        </section>

    );
};

export default DBCCPage;