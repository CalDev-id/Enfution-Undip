import AboutUs from "@/Components/AboutUs";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

const BasicLayout = ({ childern }) => {
    return (
        <>
            <Navbar />
            
            <Hero />

            <AboutUs />
        
        </>
    );
};

export default BasicLayout;
