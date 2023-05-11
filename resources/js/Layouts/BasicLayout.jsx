import AboutUs from "@/Components/AboutUs";
import Events from "@/Components/Events";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import TestiPage from "@/Components/TestiPage";

const BasicLayout = ({ childern }) => {
    return (
        <section className="bg-[#FFF9EE]">
            <Navbar />

            <Hero />

            <AboutUs />

            <Events />

            <TestiPage />

            <Footer />
        </section>
    );
};

export default BasicLayout;
