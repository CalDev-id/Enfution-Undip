import { useState } from "react";

const TimeLine = ({ name }) => {
    const [active, setActive] = useState(1);

    return (
        <>
            <h1 className="text-[#FFF9EE] text-center font-bold">TIMELINE</h1>
            {name == "dbcc" && (
                <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul className="flex justify-between">
                            <li
                                className={
                                    active == 1
                                        ? "step step01 active"
                                        : "step step01"
                                }
                                onClick={() => {
                                    setActive(1);
                                }}
                            >
                                <div className="step-inner">July</div>
                            </li>
                            <li
                                className={
                                    active == 2
                                        ? "step step02 active"
                                        : "step step02"
                                }
                                onClick={() => {
                                    setActive(2);
                                }}
                            >
                                <div className="step-inner">August</div>
                            </li>
                            <li
                                className={
                                    active == 3
                                        ? "step step03 active"
                                        : "step step03"
                                }
                                onClick={() => {
                                    setActive(3);
                                }}
                            >
                                <div className="step-inner">September</div>
                            </li>
                            <li
                                className={
                                    active == 4
                                        ? "step step04 active"
                                        : "step step04"
                                }
                                onClick={() => {
                                    setActive(4);
                                }}
                            >
                                <div className="step-inner">October</div>
                            </li>
                        </ul>

                        <div id="line">
                            <div
                                id="line-progress"
                                className={
                                    active == 1
                                        ? "w-[3%]"
                                        : active == 2
                                        ? "w-[33%]"
                                        : active == 3
                                        ? "w-[66%]"
                                        : "w-[100%]"
                                }
                            ></div>
                        </div>
                    </div>

                    <div id="progress-content-section">
                        {active == 1 && (
                            <div className="section-content discovery active rounded-2xl">
                                <h2 className="mb-2 font-semibold">July</h2>
                                <p>
                                    {" "}
                                    <span className="text-[#EB9928]">
                                        {" "}
                                        Early Bird :{" "}
                                    </span>
                                    16th - 21th July
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Normal Registration :
                                    </span>{" "}
                                    24th July - 15th August
                                </p>
                            </div>
                        )}
                        {active == 2 && (
                            <div className="section-content strategy active">
                                <h2 className="mb-2 font-semibold">AUGUST</h2>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Normal Registration :
                                    </span>{" "}
                                    24th July - 15th August
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Case Distribution :
                                    </span>{" "}
                                    20th August
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Case Submission :
                                    </span>{" "}
                                    31st August
                                </p>
                            </div>
                        )}
                        {active == 3 && (
                            <div className="section-content creative active">
                                <h2 className="mb-2 font-semibold">
                                    SEPTEMBER
                                </h2>
                                <p>
                                    {" "}
                                    <span className="text-[#EB9928]">
                                        Announcement (Top 20) :{" "}
                                    </span>
                                    16th September
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Video Presentation Submission :
                                    </span>{" "}
                                    23rd September
                                </p>
                            </div>
                        )}
                        {active == 4 && (
                            <div className="section-content production active">
                                <h2 className="mb-2 font-semibold">OCTOBER</h2>
                                <p>
                                    {" "}
                                    <span className="text-[#EB9928]">
                                        Announcement (Top 10) :
                                    </span>{" "}
                                    5th October
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Live Q&A :{" "}
                                    </span>
                                    7th October
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Critical Thinking :{" "}
                                    </span>
                                    8th October
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Winner Announcement :{" "}
                                    </span>
                                    15th October
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {name == "cs" && (
                <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul className="flex justify-evenly">
                            <li
                                className={
                                    active == 1
                                        ? "step step01 active"
                                        : "step step01"
                                }
                                onClick={() => {
                                    setActive(1);
                                }}
                            >
                                <div className="step-inner">July</div>
                            </li>
                            <li
                                className={
                                    active == 2
                                        ? "step step02 active"
                                        : "step step02"
                                }
                                onClick={() => {
                                    setActive(2);
                                }}
                            >
                                <div className="step-inner">August</div>
                            </li>
                        </ul>

                        <div id="line">
                            <div
                                id="line-progress"
                                className={
                                    active == 1
                                        ? "w-[33%]"
                                        : active == 2
                                        ? "w-[100%]"
                                        : "w-[100%]"
                                }
                            ></div>
                        </div>
                    </div>

                    <div id="progress-content-section">
                        {active == 1 && (
                            <div className="section-content discovery active">
                                <h2 className="mb-2 font-semibold">July</h2>
                                <p>
                                    {" "}
                                    <span className="text-[#EB9928]">
                                        {" "}
                                        Early Bird :{" "}
                                    </span>
                                    16th - 21th July
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Normal Registration :
                                    </span>{" "}
                                    24th July - 15th August
                                </p>
                            </div>
                        )}
                        {active == 2 && (
                            <div className="section-content strategy active">
                                <h2 className="mb-2 font-semibold">AUGUST</h2>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Coaching Session :
                                    </span>{" "}
                                    20th August
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {name == "cc" && (
                <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul className="flex justify-center">
                            <li
                                className={
                                    active == 1
                                        ? "step step01 active"
                                        : "step step01"
                                }
                                onClick={() => {
                                    setActive(1);
                                }}
                            >
                                <div className="step-inner">September</div>
                            </li>
                        </ul>

                        <div id="line">
                            <div
                                id="line-progress"
                                className={
                                    active == 1 ? "w-[100%]" : "w-[100%]"
                                }
                            ></div>
                        </div>
                    </div>

                    <div id="progress-content-section">
                        {active == 1 && (
                            <div className="section-content discovery active">

                                <h2 className="mb-2 font-semibold">September</h2>

                                <p>
                                    {" "}
                                    <span className="text-[#EB9928]">
                                        {" "}
                                        Coaching Clinic :{" "}
                                    </span>
                                    30th September
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {name == "semnas" && (
                <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul className="flex justify-evenly">
                            <li
                                className={
                                    active == 1
                                        ? "step step01 active"
                                        : "step step01"
                                }
                                onClick={() => {
                                    setActive(1);
                                }}
                            >
                                <div className="step-inner">July</div>
                            </li>
                            <li
                                className={
                                    active == 2
                                        ? "step step02 active"
                                        : "step step02"
                                }
                                onClick={() => {
                                    setActive(2);
                                }}
                            >
                                <div className="step-inner">October</div>
                            </li>
                        </ul>

                        <div id="line">
                            <div
                                id="line-progress"
                                className={
                                    active == 1
                                        ? "w-[33%]"
                                        : active == 2
                                        ? "w-[100%]"
                                        : "w-[100%]"
                                }
                            ></div>
                        </div>
                    </div>

                    <div id="progress-content-section">
                        {active == 1 && (
                            <div className="section-content discovery active">
                                <h2 className="mb-2 font-semibold">JULY</h2>
                                <p>
                                    {" "}
                                    <span className="text-[#EB9928]">
                                        {" "}
                                        Open Registration :{" "}
                                    </span>
                                    15th July
                                </p>
                            </div>
                        )}
                        {active == 2 && (
                            <div className="section-content strategy active">
                                <h2 className="mb-2 font-semibold">OCTOBER</h2>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Close Registration :
                                    </span>{" "}
                                    14th October
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Summit :
                                    </span>{" "}
                                    15th October
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {name == "et1" && (
                <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul className="flex justify-evenly">
                            <li
                                className={
                                    active == 1
                                        ? "step step01 active"
                                        : "step step01"
                                }
                                onClick={() => {
                                    setActive(1);
                                }}
                            >
                                <div className="step-inner">JUNE</div>
                            </li>
                            <li
                                className={
                                    active == 2
                                        ? "step step02 active"
                                        : "step step02"
                                }
                                onClick={() => {
                                    setActive(2);
                                }}
                            >
                                <div className="step-inner">JULY</div>
                            </li>
                        </ul>

                        <div id="line">
                            <div
                                id="line-progress"
                                className={
                                    active == 1
                                        ? "w-[33%]"
                                        : active == 2
                                        ? "w-[100%]"
                                        : "w-[100%]"
                                }
                            ></div>
                        </div>
                    </div>

                    <div id="progress-content-section">
                        {active == 1 && (
                            <div className="section-content discovery active">
                                <h2 className="mb-2 font-semibold">JUNE</h2>
                                <p>
                                    {" "}
                                    <span className="text-[#EB9928]">
                                        {" "}
                                        Open Registration :{" "}
                                    </span>
                                    28th June
                                </p>
                            </div>
                        )}
                        {active == 2 && (
                            <div className="section-content strategy active">
                                <h2 className="mb-2 font-semibold">JULY</h2>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Close Registration :
                                    </span>{" "}
                                    13th July
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Early Talk 1 :
                                    </span>{" "}
                                    15th July
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {name == "et2" && (
                <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul className="flex justify-evenly">
                            <li
                                className={
                                    active == 1
                                        ? "step step01 active"
                                        : "step step01"
                                }
                                onClick={() => {
                                    setActive(2);
                                }}
                            >
                                <div className="step-inner">September</div>
                            </li>
                        </ul>

                        <div id="line">
                            <div
                                id="line-progress"
                                className={
                                    active == 1 ? "w-[100%]" : "w-[100%]"
                                }
                            ></div>
                        </div>
                    </div>

                    <div id="progress-content-section">
                        {active == 1 && (
                            <div className="section-content strategy active">
                                <h2 className="mb-2 font-semibold">
                                    September
                                </h2>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Open Registration :
                                    </span>{" "}
                                    6th September
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Close Registration :
                                    </span>{" "}
                                    16th September
                                </p>
                                <p>
                                    <span className="text-[#EB9928]">
                                        Early Talk 2 :
                                    </span>{" "}
                                    17th September
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style jsx="true">
                {`
                    .process-wrapper {
                        margin: auto;
                        max-width: 1080px;
                    }

                    #progress-bar-container {
                        position: relative;
                        width: 90%;
                        margin: auto;
                        height: 100px;
                        margin-top: 30px;
                    }

                    #progress-bar-container ul {
                        padding: 0;
                        margin: 0;
                        padding-top: 20px;
                        z-index: 9999;
                        position: absolute;
                        width: 100%;
                        margin-top: -40px;
                    }

                    #progress-bar-container li:before {
                        content: " ";
                        display: block;
                        margin: auto;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        border: solid 2px #aaa;
                        transition: all ease 0.3s;
                    }

                    #progress-bar-container li.active:before,
                    #progress-bar-container li:hover:before {
                        border: solid 2px #fff;

                        background: linear-gradient(
                            to right,
                            #eb9928 0%,
                            #eb9928 100%
                        );
                    }

                    #progress-bar-container li {
                        list-style: none;
                        float: left;
                        width: 20%;
                        text-align: center;
                        color: #aaa;
                        text-transform: uppercase;
                        font-size: 11px;
                        cursor: pointer;
                        font-weight: 700;
                        transition: all ease 0.2s;
                        vertical-align: bottom;
                        height: 60px;
                        position: relative;
                    }

                    #progress-bar-container li .step-inner {
                        position: absolute;
                        width: 100%;
                        bottom: 0;
                        font-size: 14px;
                    }

                    #progress-bar-container li.active,
                    #progress-bar-container li:hover {
                        color: #444;
                    }

                    #progress-bar-container li:after {
                        content: " ";
                        display: block;
                        width: 6px;
                        height: 6px;
                        background: #777;
                        margin: auto;
                        border: solid 7px #fff;
                        border-radius: 50%;
                        margin-top: 40px;
                        box-shadow: 0 2px 13px -1px rgba(0, 0, 0, 0.3);
                        transition: all ease 0.2s;
                    }

                    #progress-bar-container li:hover:after {
                        background: #555;
                    }

                    #progress-bar-container li.active:after {
                        background: #207893;
                    }

                    #progress-bar-container #line {
                        width: 80%;
                        margin: auto;
                        background: #eee;
                        height: 6px;
                        position: absolute;
                        left: 10%;
                        top: 57px;
                        z-index: 1;
                        border-radius: 50px;
                        transition: all ease 0.9s;
                    }

                    #progress-bar-container #line-progress {
                        content: " ";

                        height: 100%;
                        background: #207893;
                        background: linear-gradient(
                            to right,
                            #eb9928 0%,
                            #ffce2e 100%
                        );
                        position: absolute;
                        z-index: 2;
                        border-radius: 50px;
                        transition: all ease 0.9s;
                    }

                    #progress-content-section {
                        width: 90%;
                        margin: auto;
                        border: solid 1px #eb9928;
                        border-radius: 25px;
                    }

                    #progress-content-section .section-content {
                        padding: 30px 10px;
                        text-align: center;
                    }

                    #progress-content-section .section-content h2 {
                        font-size: 17px;
                        text-transform: uppercase;
                        color: #333;
                        letter-spacing: 1px;
                    }

                    #progress-content-section .section-content p {
                        font-size: 16px;
                        line-height: 1.8em;
                        color: #777;
                    }

                    #progress-content-section .section-content {
                        display: none;
                        animation: FadeInUp 700ms ease 1;
                        animation-fill-mode: forwards;
                        transform: translateY(15px);
                        opacity: 0;
                    }

                    #progress-content-section .section-content.active {
                        display: block;
                    }

                    @keyframes FadeInUp {
                        0% {
                            transform: translateY(15px);
                            opacity: 0;
                        }

                        100% {
                            transform: translateY(0px);
                            opacity: 1;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default TimeLine;
