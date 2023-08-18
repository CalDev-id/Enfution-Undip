import MobileHeader from "@/Admin/MobileHeader";
import Sidebar from "@/Admin/Sidebar";
import WebHeader from "@/Admin/WebHeader";
const AdminLayout = ({ children, title, index }) => {
    return (
        <>
            <div className="bg-gray-100 font-family-karla flex">
                <Sidebar index={index} />
                <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
                    {/* Dekstop Header */}
                    <WebHeader />
                    <MobileHeader />
                    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                        <main className="w-full flex-grow p-6">
                            <h1 className="text-3xl text-black pb-6 font-bold">
                                {title}
                            </h1>
                            {children}
                        </main>

                        <footer className="w-full bg-white text-right p-4">
                            Built by{" "}
                            <a href={route("home")} className="underline">
                                Enfution
                            </a>
                            .
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
