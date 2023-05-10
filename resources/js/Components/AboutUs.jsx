import Bulat from "./Bulat";
import Testi1, { Testi2 } from "./Testi";

const AboutUs = () => {
    return (
        <div className="w-full bg-[#FFF9EE] mb-10">
            <div className="container text-center mb-10">
                <h1 className="font-semibold mb-10 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-3xl xl:mt-20 2xl:mt-36">
                    About Us
                </h1>
                <p className="text-[#1E2E40] xl:px-52">
                    <span className="font-semibold text-[#EB9928] text-lg">
                        Diponegoro Business Case Competition (DBCC){" "}
                    </span>
                    is a competition held annually as part of ENFUTION. This
                    program is an international-scale business case competition
                    aimed at undergraduate students from all universities in
                    Indonesia and internationally. Each team can present their
                    ideas relevant to the company’s business conditions and the
                    theme we have determined.
                </p>
            </div>

            <div className="container text-center mb-10">
                <h1 className="font-semibold mb-10 text-transparent text-center bg-clip-text bg-gradient-to-t from-[#EB9928] to-[#FFCE2E] text-2xl xl:mt-10 2xl:mt-20">
                    Our Theme
                </h1>
                <p className="text-[#1E2E40] xl:px-32">
                    This year's theme is{" "}
                    <span className="font-semibold text-[#EB9928] text-lg">
                        “The Role of Green Business in Achieving Sustainable
                        Economics“
                    </span>
                    . This theme was inspired by the emergence of environmental
                    movements carried out both through actions and campaigns by
                    scientists and activists from various parts of the world. By
                    choosing this theme, it is hoped that participants will
                    learn how to achieve maximum profit while still taking part
                    in protecting the earth for a better future. It is very
                    important for us to learn how to implement the Green
                    Business concept so that the company remains under control
                    and as a result the environment is not polluted from the
                    manufacturing activities carried out by the company.
                    Therefore, this theme is considered appropriate to the
                    condition of the earth with the worsening climate change and
                    environmental pollution. <br /> <br /> This is a great
                    opportunity for you to improve your ability to work together
                    with interesting, creative, and innovative ideas. The
                    Diponegoro Business Case Competition 2023 will give you real
                    experiences and relevant learning on how to solve business
                    problems.
                </p>
            </div>

            <img
                className="w-96 flex justify-center mx-auto my-10"
                src="images/about.svg"
                alt=""
            />

            <div className="container grid grid-cols-2 sm:grid-cols-4 xl:px-52">
                <Bulat isBawah={true} />
                <Bulat isBawah={false} />
                <Bulat isBawah={true} />
                <Bulat isBawah={false} />
            </div>
        </div>
    );
};

export default AboutUs;
