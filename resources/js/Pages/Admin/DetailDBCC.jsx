const DetailDBCC = ({ team, data_peserta, page, periode, status }) => {
    let no = 0;
    
    const prev_url = `/dashboard/DBCC?periode=${periode}${
        page != null ? `&page=${page}` : ""
    }${status != null ? `&status=${status}` : ""}`;

    return (
        <>
            <div className="btn-group my-3">
                <a href={prev_url} className="btn btn-primary md:text-xl">
                    Back
                </a>
                <label
                    className="btn btn-success md:text-xl"
                    htmlFor={"my-modal-1"}
                >
                    See Member's Photos
                </label>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-xl md:w-full lg:w-3/4 sm:w-full text-black">
                <table className="table w-full sm:text-lg md:text-xl table-zebra table-auto mb-4">
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
                            <td>{team.reg_code}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 className="text-2xl font-bold my-5 bg-slate-800 text-white w-fit p-3 rounded-md shadow-md">
                Team Member
            </h3>
            {data_peserta.map((dp) => {
                no++;
                return (
                    <div key={dp.id}>
                        {no == 1 ? (
                            <h3 className="text-2xl font-bold mt-5 mb-3">
                                Team Leader
                            </h3>
                        ) : no == 2 ? (
                            <h3 className="text-2xl font-bold mt-10 mb-3">
                                Team Member 1
                            </h3>
                        ) : (
                            <h3 className="text-2xl font-bold mt-10 mb-3">
                                Team Member 2
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
                <div className="modal-box w-11/12 max-w-7xl p-2 rounded-sm sm:p-5 sm:rounded-md">
                    <div className="file-member-pdf">
                        <embed
                            className="pdfobject w-full sm:h-[60vh] h-[30vh]"
                            type="application/pdf"
                            title="Embedded PDF"
                            src={`/uploads/dbcc_members/${team.member_photo}`}
                        ></embed>
                    </div>
                    <div className="modal-action">
                        <label
                            htmlFor={"my-modal-1"}
                            className="btn bg-gray-600 text-white"
                        >
                            Tutup
                        </label>
                        <a
                            href={`/uploads/dbcc_members/${team.member_photo}`}
                            className="btn btn-primary"
                            download={`member_teams - ${team.team_name}`}
                        >
                            Unduh Identitas Tim
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailDBCC;