export default function ApplicationLogo(props) {
    return (
        <div className="sm:flex sm:mb-5 my-10 sm:my-0">
        <img
            src="images/LogoEnfuHome.svg"
            className="flex mx-auto mb-5 sm:w-52 w-32 self-center"
            alt=""
        />
        <div>
            <p className="sm:mb-5 text-white self-center font-bold relative sm:text-6xl text-3xl">
                The{" "}
                <span className="text-[#FFCE2E]">
                    15
                    <span className="sm:text-lg text-base absolute top-0 sm:mr-5">
                        th{" "}
                    </span>{" "}
                </span>{" "}
                <span className="pl-3 sm:pl-2"> Enfution</span>
            </p>
            <p className="font-normal text-[#FFF9EE] sm:text-xl text-sm">
                Optimizing young generation creativity
                <br />
                to Encounter Economic Develpment
            </p>
        </div>
    </div>
    );
}
