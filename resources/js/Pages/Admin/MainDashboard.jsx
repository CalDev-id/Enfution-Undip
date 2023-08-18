import numeral from "numeral";

const MainDashboard = ({ semnas, dbcc, cs, cc, subs }) => {
    return (
        <>
            {/* Informasi Pendapatan */}
            <h1 className="text-xl font-bold my-5">Total Pendapatan</h1>
            <div className="flex flex-wrap w-full gap-3">
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">SEMNAS</h2>
                        <div className="card-actions justify-center items-center bg-primary h-full rounded-md">
                            <span className="text-3xl text-center font-bold text-white">
                                IDR {numeral(semnas.pendapatan).format("0,0")}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">DBCC</h2>
                        <div className="card-actions justify-center items-center bg-primary h-full rounded-md">
                            <span className="text-3xl text-center font-bold text-white">
                                IDR {numeral(dbcc.pendapatan).format("0,0")}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">
                            Coaching Session
                        </h2>
                        <div className="card-actions justify-center items-center bg-primary h-full rounded-md">
                            <span className="text-3xl text-center font-bold text-white">
                                IDR {numeral(cs.pendapatan).format("0,0")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Akhir Informasi Pendapatan */}

            {/* Informasi Semnas */}
            <h1 className="text-xl font-bold my-5 mt-10">Semnas Infografis</h1>
            <div className="flex flex-wrap w-full gap-3">
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Pendaftar</h2>
                        <div className="card-actions justify-center items-center bg-white h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {semnas.pendaftar}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Menunggu</h2>
                        <div className="card-actions justify-center items-center bg-warning h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {semnas.pending}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Ditolak</h2>
                        <div className="card-actions justify-center items-center bg-danger h-full rounded-md">
                            <span className="text-3xl text-center font-bold text-white">
                                {semnas.rejected}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Diverifikasi</h2>
                        <div className="card-actions justify-center items-center bg-accent h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {semnas.done}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Akhir Informasi Semnas */}

            {/* Informasi DBCC */}
            <h1 className="text-xl font-bold my-5 mt-10">DBCC Infografis</h1>
            <div className="flex flex-wrap w-full gap-3">
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Pendaftar</h2>
                        <div className="card-actions justify-center items-center bg-white h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {dbcc.pendaftar}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Menunggu</h2>
                        <div className="card-actions justify-center items-center bg-warning h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {dbcc.pending}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Ditolak</h2>
                        <div className="card-actions justify-center items-center bg-danger h-full rounded-md">
                            <span className="text-3xl text-center font-bold text-white">
                                {dbcc.rejected}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Diverifikasi</h2>
                        <div className="card-actions justify-center items-center bg-accent h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {dbcc.done}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Akhir Informasi DBCC */}

            {/* Informasi Coaching Session */}
            <h1 className="text-xl font-bold my-5 mt-10">
                Coaching Session Infografis
            </h1>
            <div className="flex flex-wrap w-full gap-3">
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Pendaftar</h2>
                        <div className="card-actions justify-center items-center bg-white h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {cs.pendaftar}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Menunggu</h2>
                        <div className="card-actions justify-center items-center bg-warning h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {cs.pending}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Ditolak</h2>
                        <div className="card-actions justify-center items-center bg-danger h-full rounded-md">
                            <span className="text-3xl text-center font-bold text-white">
                                {cs.rejected}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Diverifikasi</h2>
                        <div className="card-actions justify-center items-center bg-accent h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {cs.done}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Akhir Informasi Coaching Session */}

            {/* Informasi Subscriber */}
            <h1 className="text-xl font-bold my-5 mt-10">
                Subscriber Infografis
            </h1>
            <div className="flex flex-wrap w-full gap-3">
                <div className="card w-80 h-52 bg-dark">
                    <div className="card-body">
                        <h2 className="card-title text-white">Pendaftar</h2>
                        <div className="card-actions justify-center items-center bg-white h-full rounded-md">
                            <span className="text-3xl text-center font-bold">
                                {subs.subscriber}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Akhir Informasi Subscriber */}
        </>
    );
};

export default MainDashboard;