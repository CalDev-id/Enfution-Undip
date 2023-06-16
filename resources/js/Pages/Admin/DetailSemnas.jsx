const DetailSemnas = ({ data_peserta, page, event, status }) => {
    const prev_url = `/dashboard/national-seminar?event=${event}${
        page != null ? `&page=${page}` : ""
    }${status != null ? `&status=${status}` : ""}`;

    return (
        <>
            <div className="btn-group my-3">
                <a href={prev_url} className="btn btn-primary md:text-xl">
                    Back
                </a>
                {data_peserta.ktm != null ? (
                    <label
                        className="btn btn-success md:text-xl"
                        htmlFor={"my-modal-1"}
                    >
                        See KTM
                    </label>
                ) : (
                    ""
                )}
            </div>
            <div className="overflow-x-auto bg-slate-500 rounded-lg shadow-xl md:w-full lg:w-3/4 sm:w-full text-black">
                <table className="table w-full sm:text-lg md:text-xl table-zebra table-auto">
                    <tbody>
                        <tr>
                            <th>Full Name</th>
                            <td>:</td>
                            <td>{data_peserta.full_name}</td>
                        </tr>
                        <tr>
                            <th>Place, DOB</th>
                            <td>:</td>
                            <td>{data_peserta.place_dob}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>:</td>
                            <td>
                                {data_peserta.gender == "Male"
                                    ? "Laki-laki"
                                    : "Perempuan"}
                            </td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>:</td>
                            <td>{data_peserta.email}</td>
                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <td>:</td>
                            <td>
                                <span>{data_peserta.phone_number}</span>
                                <a
                                    href={`https://wa.me/${data_peserta.phone_number}`}
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
                            <td>{data_peserta.line_id}</td>
                        </tr>
                        <tr>
                            <th>University - Detail</th>
                            <td>:</td>
                            <td>
                                {data_peserta.university ? (
                                    `${data_peserta.university} - ${data_peserta.faculty_departements_batch}`
                                ) : (
                                    <>
                                        <span className="badge badge-warning text-lg p-3 font-bold mr-1">
                                            None
                                        </span>
                                    </>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>:</td>
                            <td>{data_peserta.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal Button */}
            <input type="checkbox" id={"my-modal-1"} className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white text-black">
                    <img
                        src={`/uploads/semnas_ktm/${data_peserta.ktm}`}
                        alt=""
                        className="w-full"
                    />
                    <div className="modal-action">
                        <label
                            htmlFor={"my-modal-1"}
                            className="btn bg-gray-600 text-white"
                        >
                            Tutup
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailSemnas;
