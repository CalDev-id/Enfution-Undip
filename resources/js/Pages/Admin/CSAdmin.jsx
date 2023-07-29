import Paginator from "@/Components/Paginator";
import { router } from "@inertiajs/react";
import numeral from "numeral";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CSAdmin = ({ trx, filter, search, info, status }) => {
    const [id, setId] = useState("");
    const [buktiBayar, setbuktiBayar] = useState("");
    const [konfirmasi, setKonfirmasi] = useState("");
    const [keyword, setKeyword] = useState("");

    const periode = ["Early Bird", "Normal"];
    const urlPeriode = ["EB", "NORMAL"];
    const urlFilter = "/dashboard/coaching-session?periode=";
    const status_verif = ["DONE", "REJECTED", "PENDING"];
    let urlStatus = "&status=";

    let no = (trx.current_page - 1) * 10 + 1;

    const options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    };

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(
            urlFilter + filter + urlStatus + status + "&search=" + keyword
        );
    };

    const getBuktiBayar = () => {
        fetch(`/getPaymentSlipCS?id=${id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setbuktiBayar(`/uploads/cs_payment_slip/${data.bukti}`);
            });
    };

    useEffect(() => {
        if (id != "") {
            getBuktiBayar(id);
        }
        if (konfirmasi != "") {
            alertAction(konfirmasi);
        }
    }, [id, konfirmasi]);

    const listTransactions = (trx) => {
        return trx.map((t) => {
            return (
                <tr className="text-center" key={no}>
                    <th>{no++}</th>
                    <td>{t.cs_participant.full_name}</td>
                    <td>{t.account_name}</td>
                    <td>{t.metode_bayar}</td>
                    <td>{t.account_number}</td>
                    <td>
                        {new Intl.DateTimeFormat("id-ID", options).format(
                            new Date(t.created_at)
                        ) + " WIB"}
                    </td>
                    <td>
                        {new Intl.DateTimeFormat("id-ID", options).format(
                            new Date(t.updated_at)
                        ) + " WIB"}
                    </td>
                    <td>
                        {t.cs_participant.dbcc_registration_code ? (
                            <span className="badge badge-primary">DBCC</span>
                        ) : (
                            "IDR " + numeral(t.amount).format("0,0")
                        )}
                    </td>
                    <td>
                        {t.cs_participant.dbcc_registration_code ?? (
                            <span className="badge badge-error font-bold">
                                Not DBCC
                            </span>
                        )}
                    </td>
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
                                    "/detail-cs-participant/" +
                                    t.id_first_member
                                }
                                className="btn btn-primary"
                            >
                                Detail
                            </a>
                            {status == status_verif[2] ? (
                                <>
                                    <button
                                        className="btn btn-error text-white"
                                        onClick={() => {
                                            setKonfirmasi([
                                                t.cs_participant.id,
                                                t.account_name,
                                                0,
                                            ]);
                                        }}
                                    >
                                        Tolak
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            setKonfirmasi([
                                                t.cs_participant.id,
                                                t.account_name,
                                                1,
                                            ]);
                                        }}
                                    >
                                        Verif
                                    </button>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </td>
                </tr>
            );
        });
    };

    const alertAction = ([id, acc_name, action]) => {
        const info = [
            {
                judul: "Konfirmasi Tolak",
                teks: `Apakah anda yakin menolak transaksi ${acc_name}`,
                respon: `Ditolak`,
                href: `/CSRejected/${id}`,
            },
            {
                judul: "Konfirmasi Terima",
                teks: `Apakah anda yakin menerima transaksi ${acc_name}`,
                respon: `Diverifikasi`,
                href: `/CSVerif/${id}`,
            },
        ];
        Swal.fire({
            title: info[action].judul,
            text: info[action].teks,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak",
        }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(() => {
                    window.location.href = info[action].href;
                }, 500);
            }
        });
    };
    return (
        <>
            {/* Filter and Search */}
            <div className="flex justify-between items-center mb-3">
                <div className="filter flex flex-wrap sm:justify-between justify-start gap-2 items-center">
                    <details className="dropdown">
                        <summary className="m-1 btn">
                            {filter == ""
                                ? "All"
                                : filter == "EB"
                                ? periode[0]
                                : periode[1]}
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a
                                    href={
                                        filter == ""
                                            ? urlFilter + urlPeriode[0]
                                            : urlFilter
                                    }
                                    className="active:bg-dark active:text-white"
                                >
                                    {filter == "" ? periode[0] : "All"}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        filter == "" || filter == "EB"
                                            ? urlFilter + urlPeriode[1]
                                            : urlFilter + urlPeriode[0]
                                    }
                                    className="active:bg-dark active:text-white"
                                >
                                    {filter == "" || filter == "EB"
                                        ? periode[1]
                                        : periode[0]}
                                </a>
                            </li>
                        </ul>
                    </details>
                    <details className="dropdown">
                        <summary
                            className={
                                status == "" || status == status_verif[2]
                                    ? "m-1 btn btn-warning"
                                    : status == status_verif[0]
                                    ? "m-1 btn btn-success"
                                    : "m-1 btn btn-error text-white"
                            }
                        >
                            {status == "" || status == status_verif[2]
                                ? status_verif[2]
                                : status == status_verif[0]
                                ? status_verif[0]
                                : status_verif[1]}
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a
                                    href={
                                        status == "" ||
                                        status == status_verif[2]
                                            ? urlFilter +
                                              filter +
                                              urlStatus +
                                              status_verif[0]
                                            : urlFilter +
                                              filter +
                                              urlStatus +
                                              status_verif[2]
                                    }
                                    className="active:bg-dark active:text-white"
                                >
                                    {status == "" || status == status_verif[2]
                                        ? status_verif[0]
                                        : status_verif[2]}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        status == "" ||
                                        status == status_verif[0] ||
                                        status == status_verif[2]
                                            ? urlFilter +
                                              filter +
                                              urlStatus +
                                              status_verif[1]
                                            : urlFilter +
                                              filter +
                                              urlStatus +
                                              status_verif[0]
                                    }
                                    className="active:bg-dark active:text-white"
                                >
                                    {status == "" ||
                                    status == status_verif[0] ||
                                    status == status_verif[2]
                                        ? status_verif[1]
                                        : status_verif[0]}
                                </a>
                            </li>
                        </ul>
                    </details>
                    {status == "DONE" && filter != "" ? (
                        <a
                            href={
                                "/printCS?periode=" +
                                filter +
                                urlStatus +
                                status
                            }
                            className="btn btn-accent m-1"
                        >
                            Cetak
                        </a>
                    ) : (
                        ""
                    )}
                </div>

                <form>
                    <div className="form-control">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder={search ?? "Search…"}
                                className="input input-bordered w-full focus:border-black focus:ring-black focus:outline-none"
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <button
                                onClick={handleSearch}
                                className="btn btn-square"
                            >
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
                        <span>
                            Transaksi dengan nama akun {info[0]} berhasil
                            diverifikasi
                        </span>
                    ) : (
                        <span>
                            Transaksi dengan nama akun {info[0]} ditolak!
                        </span>
                    )}
                </div>
            ) : (
                ""
            )}

            {/* Table Transactions */}
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
                            <th className="md:text-lg sm:text-md">Via</th>
                            <th className="md:text-lg sm:text-md">
                                No. Rekening
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Tanggal Daftar
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Tanggal Bayar
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Jumlah Bayar
                            </th>
                            <th className="md:text-lg sm:text-md">
                                DBCC Reg. Code
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Bukti Bayar
                            </th>
                            <th className="md:text-lg sm:text-md">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>{listTransactions(trx.data)}</tbody>
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

            {/* Pagination */}
            <div className="mt-5 flex justify-between items-center">
                <span>
                    Show of {trx.data.length} entries, {trx.current_page} of{" "}
                    {trx.last_page} Pages
                </span>
                <Paginator pages={trx} />
            </div>
        </>
    );
};

export default CSAdmin;