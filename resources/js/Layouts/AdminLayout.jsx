import MobileHeader from "@/Admin/MobileHeader";
import Sidebar from "@/Admin/Sidebar";
import WebHeader from "@/Admin/WebHeader";
const AdminLayout = () => {
    return (
        <>
            <div className="bg-gray-100 font-family-karla flex">
                <Sidebar />
                <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
                    {/* Dekstop Header */}
                    <WebHeader />
                    <MobileHeader />
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
