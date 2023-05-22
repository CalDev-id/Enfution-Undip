const PaymentConfirmation = ({ harga }) => {
    return (
        <div className="w-full bg-[#FFF9EE] min-h-screen">
            <div className="container flex-col flex justify-center mx-auto">
                <h1 className="text-center font-semibold text-5xl mb-10 pt-20">
                Payment Confirmation
                </h1>
                <p className="text-center font-semibold text-xl mb-3">You have to pay:</p>

                <p className="bg-[#1E2E40] text-white text-center py-3 text-xl font-semibold mb-5">Rp. xxx.xxx,xx</p>

                <div className="grid grid-cols-2 md:grid-cols-3 md:px-10 lg:px-20">
                    <div className="border border-black h-40 self-center">
                        <img src="images/bank/gopay.svg" className="w-28 flex mx-auto" />
                        <p className="text-[#EB9928] text-center">Nandya Salma</p>
                        <p className="text-[#1E2E40] text-center">+62-813-9051-3323</p>
                    </div>
                    <div className="border border-black h-40 ">
                        <img src="images/bank/flip.svg" className="w-14 flex mx-auto" />
                        <p className="text-[#EB9928] text-center">Nandya Salma</p>
                        <p className="text-[#1E2E40] text-center">+62-813-9051-3323</p>
                    </div>
                    <div className="border border-black h-40 hidden md:block">
                        <img src="images/bank/ovo.svg" className="w-28 flex mx-auto" />
                        <p className="text-[#EB9928] text-center">Nandya Salma</p>
                        <p className="text-[#1E2E40] text-center">+62-813-9051-3323</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirmation;
