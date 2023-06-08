import Paginator from "@/Components/Paginator";
import { Link } from "@inertiajs/react";
import numeral from "numeral";
import { useEffect, useState } from "react";

const SemnasAdmin = ({ trx, filter, search, info }) => {
    const [id, setId] = useState("");
    const [buktiBayar, setbuktiBayar] = useState("");
    const transactions = trx.data;
    const event = ["Summit", "Early Talk 1", "Early Talk 2"];
    const urlEvent = ["summit", "talk-1", "talk-2"];
    const urlFilter = "/dashboard/national-seminar?event=";

    let no = (trx.current_page - 1) * 5 + 1;
    const options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    };

    const getBuktiBayar = () => {
        fetch(`/getPaymentSlip?id=${id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setbuktiBayar(`/uploads/semnas_payment_slip/${data.bukti}`);
            });
    };

    useEffect(() => {
        if (id != "") {
            getBuktiBayar(id);
        }
    }, [id]);

    const listTransactions = (trx) => {
        return trx.map((t) => {
            return (
                <tr className="text-center" key={no}>
                    <th>{no++}</th>
                    <td>{t.peserta_semnas.full_name}</td>
                    <td>{t.account_name}</td>
                    <td>{t.account_number}</td>
                    <td>
                        {new Intl.DateTimeFormat("id-ID", options).format(
                            new Date(t.updated_at)
                        ) + " WIB"}
                    </td>
                    <td>IDR {numeral(t.amount).format("0,0")}</td>
                    <td>
                        <label
                            className="btn btn-secondary"
                            htmlFor={"my-modal-1"}
                            onClick={() => {
                                setId(t.id);
                            }}
                        >
                            Lihat
                        </label>
                    </td>
                    <td className="flex justify-around">
                        <div className="btn-group">
                            <a
                                href={
                                    "/detail-semnas-participant/" + t.id_peserta
                                }
                                className="btn btn-primary"
                            >
                                Detail
                            </a>
                            <a
                                href={`/rejected/${t.id}`}
                                className="btn btn-error text-white"
                            >
                                Tolak
                            </a>
                            <a
                                href={`/sendVerif/${t.id_peserta}`}
                                className="btn btn-success"
                            >
                                Verif
                            </a>
                        </div>
                    </td>
                </tr>
            );
        });
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <details className="dropdown my-5">
                    <summary className="m-1 btn">
                        {filter == ""
                            ? "All"
                            : filter == "summit"
                            ? event[0]
                            : filter == "talk-1"
                            ? event[1]
                            : event[2]}
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a
                                href={
                                    filter == ""
                                        ? urlFilter + urlEvent[0]
                                        : urlFilter
                                }
                                className="active:bg-dark active:text-white"
                            >
                                {filter == "" ? event[0] : "All"}
                            </a>
                        </li>
                        <li>
                            <a
                                href={
                                    filter == "" || filter == "summit"
                                        ? urlFilter + urlEvent[1]
                                        : urlFilter + urlEvent[0]
                                }
                                className="active:bg-dark active:text-white"
                            >
                                {filter == "" || filter == "summit"
                                    ? event[1]
                                    : event[0]}
                            </a>
                        </li>
                        <li>
                            <a
                                href={
                                    filter == "talk-2"
                                        ? urlFilter + urlEvent[1]
                                        : urlFilter + urlEvent[2]
                                }
                                className="active:bg-dark active:text-white"
                            >
                                {filter == "talk-2" ? event[1] : event[2]}
                            </a>
                        </li>
                    </ul>
                </details>

                <form action="/dashboard/national-seminar" method="get">
                    <div className="form-control">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder={search ?? "Search…"}
                                className="input input-bordered focus:border-black focus:ring-black focus:outline-none"
                                name="search"
                            />
                            <button type="submit" className="btn btn-square">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {info != "" ? (
                <div
                    className={
                        info[1] == "success"
                            ? "alert alert-success w-fit mb-5 text-dark font-bold"
                            : "alert alert-error w-fit mb-5 text-white font-bold"
                    }
                >
                    {info[1] == "success" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    )}

                    {info[1] == "success" ? (
                        <span>Peserta {info[0]} berhasil diverifikasi</span>
                    ) : (
                        <span>
                            Transaksi dengan nama akun {info[0]} ditolak!
                        </span>
                    )}
                </div>
            ) : (
                ""
            )}

            <div className="overflow-x-auto">
                <table className="table w-full md:text-lg sm:text-md">
                    {/* head */}
                    <thead>
                        <tr className="text-center text-lg">
                            <th className="md:text-lg sm:text-md">#</th>
                            <th className="md:text-lg sm:text-md">
                                Nama Peserta
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Akun Peserta
                            </th>
                            <th className="md:text-lg sm:text-md">
                                No. Rekening
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Tanggal Bayar
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Jumlah Bayar
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Bukti Bayar
                            </th>
                            <th className="md:text-lg sm:text-md">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>{listTransactions(transactions)}</tbody>
                </table>

                {/* Modal Button */}
                <input
                    type="checkbox"
                    id={"my-modal-1"}
                    className="modal-toggle"
                />

                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-white text-black">
                        <img src={buktiBayar} alt="" className="w-full" />
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
            </div>

            <div className="mt-5 flex justify-between">
                <span>
                    Show of {trx.data.length} entries, {trx.current_page} of{" "}
                    {trx.last_page} Pages
                </span>
                <Paginator pages={trx} />
            </div>
        </>
    );
};

export default SemnasAdmin;
