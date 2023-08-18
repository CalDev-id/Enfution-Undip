import Paginator from "@/Components/Paginator";
import { Link } from "@inertiajs/react";
import numeral from "numeral";
import { useEffect, useState } from "react";

const SubscriberAdmin = ({ trx, filter, search, info }) => {
    const [id, setId] = useState("");
    const subscribers = trx.data;

    let no = (trx.current_page - 1) * 5 + 1;
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
  
    const listSubscribers = (trx) => {
      return trx.map((t) => {
        return (
          <tr className="text-center" key={no}>
            <th>{no++}</th>
            <td>{t.email}</td>
            <td>
              {new Intl.DateTimeFormat("id-ID", options).format(
                new Date(t.updated_at)
              ) + " WIB"}
            </td>
          </tr>
        );
      });
    };

    return (
        <>
            <div className="flex justify-between items-center mb-3">
                <div className="">
                    <a href="/newsLetter">
                    <div className="m-1 btn">
                        Send Newsletter
                    </div>
                    </a>
                </div>
                <form action="/dashboard/subscriber" method="get">
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

            <div className="overflow-x-auto">
                <table className="table w-full md:text-lg sm:text-md">
                    {/* head */}
                    <thead>
                        <tr className="text-center text-lg">
                            <th className="md:text-lg sm:text-md">#</th>
                            <th className="md:text-lg sm:text-md" width="100%">
                                Email Subscriber
                            </th>
                            <th className="md:text-lg sm:text-md">
                                Tanggal Subscribe
                            </th>
                        </tr>
                    </thead>
                    <tbody>{listSubscribers(subscribers)}</tbody>
                </table>

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

export default SubscriberAdmin;