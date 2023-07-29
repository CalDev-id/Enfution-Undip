import { useEffect, useState } from "react";

const DetailCS = ({ team, data_peserta, page, periode, status }) => {
    const [file, setFile] = useState("");
    const [folder, setFolder] = useState("");
    const [id, setID] = useState("");
    const [kode, setKode] = useState("");
    const [ext, setExt] = useState("");
    let no = 0;
    const prev_url = `/dashboard/coaching-session?periode=${periode}${
        page != null ? `&page=${page}` : ""
    }${status != null ? `&status=${status}` : ""}`;

    const getPaymentDBCCOrMemberPhoto = () => {
        fetch(`/getDetailFileCS?id=${id}&kode=${kode}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                let ext = data.file.split(".");
                setExt(ext[ext.length - 1]);
                setFile(`${folder}${data.file}`);
            });
    };

    useEffect(() => {
        if (id != "" && kode != "") {
            getPaymentDBCCOrMemberPhoto();
        }
    }, [id, kode]);

    return (
        <>
            <div className="btn-group my-3">
                <a href={prev_url} className="btn btn-primary md:text-xl">
                    Back
                </a>

                <label
                    className={
                        team == ""
                            ? "btn btn-success md:text-xl hidden"
                            : "btn btn-success md:text-xl"
                    }
                    htmlFor={"my-modal-1"}
                    onClick={() => {
                        setID(data_peserta[0].id);
                        setKode("p");
                        setFolder("/uploads/cs_payment_dbcc_proof/");
                    }}
                >
                    DBCC Payment Slip
                </label>
                <label
                    className="btn btn-warning md:text-xl"
                    htmlFor={"my-modal-1"}
                    onClick={() => {
                        setID(data_peserta[0].id);
                        setKode("m");
                        setFolder("/uploads/cs_members/");
                    }}
                >
                    See Member's Photos
                </label>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-xl md:w-full lg:w-3/4 sm:w-full text-black">
                <table
                    className={
                        team == ""
                            ? "table w-full sm:text-lg md:text-xl table-zebra table-auto mb-4 hidden"
                            : "table w-full sm:text-lg md:text-xl table-zebra table-auto mb-4"
                    }
                >
                    <tbody>
                        <tr>
                            <th>Team Name</th>
                            <td>:</td>
                            <td>{team.team_name}</td>
                        </tr>
                        <tr>
                            <th>University - Detail</th>
                            <td>:</td>
                            <td>
                                {`${team.university_institute} - ${team.faculty_department_batch}`}
                            </td>
                        </tr>
                        <tr>
                            <th>Registration Code</th>
                            <td>:</td>
                            <td>{data_peserta[0].dbcc_registration_code}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {data_peserta.map((dp) => {
                no++;
                return (
                    <div key={dp.id}>
                        {no == 1 ? (
                            <h3 className="text-2xl font-bold mt-5 mb-3">
                                1st Person
                            </h3>
                        ) : no == 2 ? (
                            <h3 className="text-2xl font-bold mt-10 mb-3">
                                2nd Person
                            </h3>
                        ) : (
                            <h3 className="text-2xl font-bold mt-10 mb-3">
                                3rd Person
                            </h3>
                        )}
                        <div className="overflow-x-auto rounded-lg shadow-xl md:w-full lg:w-3/4 sm:w-full text-black">
                            <table className="table w-full sm:text-lg md:text-xl table-zebra table-auto">
                                <tbody className="mt-5">
                                    <tr>
                                        <th>Full Name</th>
                                        <td>:</td>
                                        <td>{dp.full_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Place, DOB</th>
                                        <td>:</td>
                                        <td>{dp.place_dob}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <td>:</td>
                                        <td>
                                            {dp.gender == "Male"
                                                ? "Laki-laki"
                                                : "Perempuan"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>:</td>
                                        <td>{dp.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone Number</th>
                                        <td>:</td>
                                        <td>
                                            <span>{dp.phone_number}</span>
                                            <a
                                                href={`https://wa.me/${dp.phone_number}`}
                                                target="_blank"
                                                className="link"
                                            >
                                                <span className="badge badge-primary text-lg py-3 ml-3">
                                                    Chat Now
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Line ID</th>
                                        <td>:</td>
                                        <td>{dp.line_id}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })}

            {/* Modal Button */}
            <input type="checkbox" id={"my-modal-1"} className="modal-toggle" />
            <div className="modal">
                <div
                    className={
                        ext == "pdf"
                            ? "modal-box w-11/12 max-w-7xl p-2 rounded-sm sm:p-5 sm:rounded-md"
                            : "modal-box w-1/3 max-w-7xl p-2 rounded-sm sm:p-5 sm:rounded-md"
                    }
                >
                    {ext == "pdf" ? (
                        <div className="file-member-pdf">
                            <embed
                                className="pdfobject w-full sm:h-[60vh] h-[30vh]"
                                type="application/pdf"
                                title="Embedded PDF"
                                src={file}
                            ></embed>
                        </div>
                    ) : (
                        <img src={file} alt="" className="w-full" />
                    )}

                    <div className="modal-action">
                        <label
                            htmlFor={"my-modal-1"}
                            className="btn bg-gray-600 text-white"
                        >
                            Tutup
                        </label>
                        <a
                            href={file}
                            className="btn btn-primary"
                            download={`${
                                kode == "m"
                                    ? "member-cs"
                                    : "dbcc-payment-proof-cs"
                            } - ${
                                team != ""
                                    ? team.team_name
                                    : data_peserta[0].full_name
                            }`}
                        >
                            {kode == "m"
                                ? "Unduh Identitas Peserta"
                                : "Unduh Bukti Pembayaran DBCC"}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailCS;